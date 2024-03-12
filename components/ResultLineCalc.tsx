import PiecesTile from "./PiecesTile";


export default function ResultLineCalc({
  calc
}: {
  calc: { value: number; result: { [p: string]: number }};
}) {
  const {value, result} = calc;

  const pieces = Object.entries(result).map(([piece, quantity]) => <PiecesTile key={piece} piece={piece} quantity={quantity}/>);

  return (
    <>
      <h2 className="bg-legoYellow w-full rounded-t-xl p-2 text-legoBrown">Optimal Pieces</h2>
      <div className="bg-legoTealSection rounded-b-xl p-4">
        <div className="grid grid-cols-3 xs2:grid-cols-4 gap-x-4 gap-y-4">
          {value == -1 ? <p className="text-center">no solution {":("}</p> : pieces}
        </div>
      </div>
    </>
  )
}
