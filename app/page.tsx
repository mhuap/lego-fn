"use client";
import { useEffect, useMemo, useState } from 'react';

import { IconMinus, IconPlus } from '@tabler/icons-react';
import {Button, CheckboxGroup} from "@nextui-org/react";
import debounce from "lodash.debounce";
import clsx from 'clsx';

import CircleButton from '../components/CircleButton';
import SectionBox from '../components/SectionBox';
import CustomCheckbox from '../components/CustomCheckbox';
import ResultLineCalc from '../components/ResultLineCalc';

import dpSolution from "../util/dpSolution";

function getLengths() {
  const result = []
  for (let i = 2; i <= 16; i += 2) {
    result.push(i);
  }
  return result
}

const sizes = getLengths();
const DEBOUNCE_TIME_MS = 400;
const oddTotalWarning = <>{"pls use even numbers."} <br/> {"current pieces are all mutiples of 2."} </>

export default function Page() {
  const [total, setTotal] = useState<string>('');
  const [isEven, setIsEven] = useState<boolean>(true);
  const [checkboxesInvalid, setCheckboxesInvalid] = useState(false);
  const [formInvalid, setFormInvalid] = useState(true);
  const [first, setFirst] = useState(true);
  const [available, setAvailable] = useState([]);
  const [calc, setCalc] = useState(null);

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setTotal(e.target.value);
    totalDebounce(e);
  }

  useEffect(() => {
    setFormInvalid(available.length < 1 || (total.length == 0) || !isEven);
  }, [available, total, isEven])

  useEffect(() => {
    setFirst(false);
  }, [total, available])
  
  

  const totalDebounce = useMemo(
    () => 
      debounce(({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => { 
        // console.log("Changed value: ", value);
        setIsEven((Number(value) % 2) == 0);
      }, DEBOUNCE_TIME_MS),
    []
  );

  useEffect(() => {
    return () => {
      totalDebounce.cancel();
    };
  }, [totalDebounce]);

  const calculate = (e : React.FormEvent) => {
    e.preventDefault();

    const c = dpSolution(Number(total), available.map((x: string) : number => Number(x)));
    setCalc(c);
    
  }

  return <>
    <h1>Straight line layout calculator</h1>
    <p className="not-italic font-medium text-legoTeal mb-8">Works for thin floors, walls, roofs, railings, ridges, beams, and trims.</p>
    <form onSubmit={calculate}>
      <SectionBox>
        <label
          className="text-xl text-center font-black uppercase text-legoTeal mb-4"
          htmlFor="total"
        >
          Total Length
        </label>
        <div className="flex justify-center w-full">
          <CircleButton
            add={false}
            total={total}
            setTotal={setTotal}
          >
            <IconMinus stroke="4"/>
          </CircleButton>
          <input id="total" name="total" type="number" min="0" step="2" max="500" required
            className={clsx(
              [
                "mx-4 min-w-14 [appearance:textfield]",
                "[&::-webkit-outer-spin-button]:appearance-none",
                "[&::-webkit-inner-spin-button]:appearance-none"
              ],
              {
                "outline outline-legoYellow focus:outline-legoYellow": !isEven,
              }
            )}
            value={total}
            onChange={handleChange}
          />
          <CircleButton
            add={true}
            total={total}
            setTotal={setTotal}
          >
            <IconPlus stroke="4"/>
          </CircleButton>
        </div>
        {!isEven && <span className="not-italic font-medium mt-4 text-legoYellow text-center text-sm">{oddTotalWarning}</span>}
      </SectionBox>

      <SectionBox>
        <CheckboxGroup
          label="Available Lengths"
          classNames={{
            wrapper: "grid grid-cols-3 xs:grid-cols-4 gap-y-4 gap-x-8",
            label: "text-xl text-center font-black uppercase text-legoTeal mb-4",
            description: "mt-2 text-legoYellow not-italic font-medium text-center"
          }}
          size="lg"
          isInvalid={checkboxesInvalid}
          onValueChange={(value) => {
            setAvailable(value);
            setCheckboxesInvalid(value.length < 1);
          }}
          description={checkboxesInvalid ? "missing available lengths" : ""}
        >
          {sizes.map(x => <CustomCheckbox key={x} value={x.toString()} color={checkboxesInvalid ? "invalid" : "default"}/>)}
        </CheckboxGroup>
      </SectionBox>
      <button
        type="submit"
        className={clsx(
          [
            "w-full rounded-full p-4 mb-4 bg-legoYellow",
            "italic text-xl text-center font-black uppercase text-legoBrown"
          ],
          {
            "opacity-25": formInvalid
          }
        )}
        disabled={formInvalid || first}
      >
        Calculate
      </button>
    </form>
    {calc && <ResultLineCalc calc={calc}></ResultLineCalc>}
  </>;
}
