export default function PiecesTile({
  piece, quantity,
} : {
  piece: string;
  quantity: number;
}) {
  return (
    <div className="">
      <div className="flex rounded-md border-2 border-legoTealInput w-[76px] mx-auto">
        <div className="flex bg-legoTealInput w-9 h-9 justify-center items-center">
          {piece}
        </div>
        <div className="flex w-9 h-9 justify-center items-center not-italic">
          x{quantity}
        </div>
      </div>
    </div>
   
  )
}
