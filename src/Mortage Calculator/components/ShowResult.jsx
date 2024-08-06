import { useSelector } from "react-redux"



const ShowResult = () => {
  const { Repayments} = useSelector((store) => store.mortgage)
   const { Total } = useSelector((store) => store.mortgage)
  return (
    <div className=" bg-[#122f3f] px-8 py-4 flex flex-col h-[55vh] rounded-br-md rounded-tr-md md:h-auto md:w-[400px] md:rounded-xl md:rounded-tl-none md:rounded-bl-[3rem] ">
      <p className=" text-md font-bold text-white mt-2">Your Results</p>
      <p className="text-xs font-bold text-2xl text-white mt-2">
        Your results are shown below based on the information you provided. To
        adjust the results, edit the form and click "Calculate Repayments"
        again.
      </p>
      <div className="mt-8 flex flex-col align-center bg-[#0e2431] rounded-md border-t-2 border-lemon">
        <div className="text-xs text-2xl font-medium mx-6 mt-4 mb-3">
          Your monthly repayments
        </div>
        <div className="mx-6 text-5xl font-bold text-lemon border-b-[2px] border-lemon pb-4">
          £{Repayments}
        </div>
        <div className="text-xs text-cslate-300 font-medium mx-6 mt-4 mb-2">
          Total you'll repay over the term
        </div>
        <div className="mx-6 text-xl font-bold text-white mb-4">£{Total}</div>
      </div>
    </div>
  )
}

export default ShowResult
