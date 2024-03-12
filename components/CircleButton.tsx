import { SetStateAction, Dispatch } from "react";

export default function CircleButton({
  children, add, total, setTotal,
}: {
  readonly children: React.ReactNode;
  readonly add: boolean;
  readonly total: string;
  readonly setTotal: Dispatch<SetStateAction<string>>;
}) {
  const newNum = add ? (Number(total) + 2): (Number(total)- 2)

  return (
    <button
      className="bg-legoTealInputLight rounded-full p-2 text-legoTealLight"
      type="button"
      onClick={(() => newNum >= 0 && setTotal(newNum.toString()))}
    >
      {children}
    </button>
  )
}