export default function SectionBox({
  children, 
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-legoTealSection rounded-xl p-4 flex flex-col items-center mb-4">
      {children}
    </div>
  )
}
