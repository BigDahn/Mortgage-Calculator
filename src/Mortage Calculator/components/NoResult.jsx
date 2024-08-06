
const NoResult = () => {
  return (
    <div className=" bg-[#122f3f] mx-auto items-center justify-center rounded-tr-md rounded-br-md flex flex-col h-[calc(100vh-350px)] md:h-auto md:w-[400px] md:rounded-xl md:rounded-tl-none md:rounded-bl-[3rem] ">
      <img
        src="/illustration-empty.svg"
        alt=""
        className="w-[150px] h-[150px]"
      />
      <p className=" text-md font-bold text-white mt-2">
        Results are shown here
      </p>
      <p className="text-xs text-center text-cslate-300 mx-4 mt-2">
        Complete the form and click "Calculate Repayments" to see what your
        monthly repayments would be.
      </p>
    </div>
  )
}

export default NoResult
