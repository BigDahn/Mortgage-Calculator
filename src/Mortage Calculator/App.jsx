import { useState,useEffect } from "react"
import FormCheckbox from "./components/FormCheckbox"
import { FormProvider, useForm} from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { calculate, clearAll } from "./feature/mortageSlice/mortageCal"
import ShowResult from "./components/ShowResult"
import NoResult from "./components/NoResult"

const App = () => {

const {Result} = useSelector((state)=>state.mortgage)
  const dispatch = useDispatch()


const {
  register,
  handleSubmit,
  reset,
  formState: { errors },
} = useForm()

const clear = () =>{
  reset()
  dispatch(clearAll())
}
  
  const onSubmit = (data) => {


let {amount,term,rate,type} = data
term = term * 12
rate = rate / 100 / 12


const rawValue = amount.replace(/([^\d.+-]+)/g, '')
const newData = {
  amount:Number(rawValue),
  term: Number(term),
  rate: Number(rate),
  type: type,
}


    dispatch(calculate({ form: newData }))
    
  }

   
  return (
    <div className=" bg-white rounded-xl w-[100vw] h-[100vh]  justify-center  rounded-tl-md rounded-bl-md  m-auto  md:flex md:w-[800px] md:h-fit lg: grid mt-0 sm:mt-40">
      <div className=" mx-4 md:m-4   ">
        <div className="justify-between items-center py-4 md:py-0 md:pb-8 md:flex">
          <p className="text-xl text-cslate-900 font-bold">
            Mortgage Calculator
          </p>
          <p
            className="text-sm text-cslate-700 underline hover:text-slate-700 cursor-pointer pt-2 md:pt-0"
            onClick={() => clear()}
          >
            Clear All
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="md:max-w-sm mx-auto flex flex-col"
        >
          <label className="block mb-2 text-sm font-medium text-slate-500 text-left">
            Mortgage Amount
          </label>
          <div className="flex flex-row-reverse">
            <input
              type="text"
              id="amount"
              name="amount"
              inputMode="decimal"
              className={
                errors.amount
                  ? 'cursor-pointer peer rounded-none rounded-e-md border-l-0 bg-white border  font-bold text-cslate-900 hover:border-cslate-900 focus:outline-none focus:ring-[#d7da2f] focus:border-red-600 block flex-1 min-w-0 w-full text-sm p-2.5'
                  : 'cursor-pointer peer rounded-none rounded-e-md border-l-0 bg-white border border-cslate-500 font-bold text-cslate-900 hover:border-cslate-900 focus:outline-none focus:ring-[#d7da2f] focus:border-[#d7da2f] block flex-1 min-w-0 w-full text-sm p-2.5'
              }
              {...register('amount', {
                required: {
                  value: true,
                  message: 'This field is required',
                },
              })}
            />
            <span
              className={
                errors.amount
                  ? 'inline-flex items-center px-3 text-sm font-bold text-white bg-red-600 border border-e-0 border-r-0 border-cred rounded-s-md peer-hover:border-cslate-900 peer-focus:border-red-600 peer-focus:bg-red-600 peer-focus:text-cslate-900'
                  : 'inline-flex items-center px-3 text-sm font-bold text-cslate-700 bg-blue-400 border border-e-0 border-r-0 border-cslate-500 rounded-s-md peer-hover:border-cslate-900 peer-focus:border-[#d7da2f] peer-focus:bg-[#d7da2f] peer-focus:text-cslate-900'
              }
            >
              £
            </span>
          </div>
          {errors.amount && (
            <p className="text-red-500">{errors.amount.message}</p>
          )}
          <div className="flex pt-4">
            <div className="pr-4 w-full">
              <label className="block mb-2 text-sm font-medium text-slate-500 text-left">
                Mortgage Term
              </label>
              <div className="flex">
                <input
                  type="text"
                  id="term"
                  name="term"
                  inputMode="decimal"
                  {...register('term', {
                    required: {
                      value: true,
                      message: 'This field is required',
                    },
                  })}
                  className={
                    errors.term
                      ? 'cursor-pointer peer rounded-none rounded-s-md border-r-0 bg-white border border-cred font-bold text-cslate-900 hover:border-cslate-900 focus:outline-none focus:ring-[#d7da2f] focus:border-red-600 block flex-1 min-w-0 w-full text-sm p-2.5'
                      : 'cursor-pointer peer rounded-none rounded-s-md border-r-0 bg-white border border-cslate-500 font-bold text-cslate-900 hover:border-cslate-900 focus:outline-none focus:ring-[#d7da2f] focus:border-[#d7da2f] block flex-1 min-w-0 w-full text-sm p-2.5'
                  }
                />
                <span
                  className={
                    errors.term
                      ? 'inline-flex items-center px-3 text-sm font-bold text-white bg-red-600 border border-s-0 border-l-0 border-cred rounded-e-md peer-hover:border-cslate-900  peer-focus:border-red-600 peer-focus:bg-red-600 peer-focus:text-cslate-900'
                      : 'inline-flex items-center px-3 text-sm font-bold text-cslate-700 bg-blue-400 border border-s-0 border-l-0 border-cred-500 rounded-e-md peer-hover:border-cslate-900  peer-focus:border-[#d7da2f] peer-focus:bg-[#d7da2f] peer-focus:text-cslate-900'
                  }
                >
                  years
                </span>
              </div>
              {errors.term && (
                <p className="text-red-500">{errors.term.message}</p>
              )}
            </div>

            <div className="w-full">
              <label className="block mb-2 text-sm font-medium text-slate-500 text-left">
                Interest Rate
              </label>
              <div className="flex">
                <input
                  type="text"
                  id="rate"
                  name="rate"
                  inputMode="decimal"
                  {...register('rate', {
                    required: {
                      value: true,
                      message: 'This field is required',
                    },
                  })}
                  className={
                    errors.rate
                      ? 'cursor-pointer peer rounded-none rounded-s-md border-r-0 bg-white border border-cred font-bold text-cslate-900 hover:border-cslate-900 focus:outline-none focus:ring-[#d7da2f] focus:border-red-600 block flex-1 min-w-0 w-full text-sm p-2.5'
                      : 'cursor-pointer peer rounded-none rounded-s-md border-r-0 bg-white border border-cslate-500 font-bold text-cslate-900 hover:border-cslate-900 focus:outline-none focus:ring-[#d7da2f] focus:border-[#d7da2f] block flex-1 min-w-0 w-full text-sm p-2.5'
                  }
                />
                <span
                  className={
                    errors.rate
                      ? 'inline-flex items-center px-3 text-sm font-bold text-white bg-red-600 border border-s-0 border-l-0 border-cred rounded-e-md peer-hover:border-cslate-900  peer-focus:border-red-600 peer-focus:bg-red-600 peer-focus:text-cslate-900'
                      : 'inline-flex items-center px-3 text-sm font-bold text-cslate-700 bg-blue-400 border border-s-0 border-l-0 border-cred-500 rounded-e-md peer-hover:border-cslate-900  peer-focus:border-[#d7da2f] peer-focus:bg-[#d7da2f] peer-focus:text-cslate-900'
                  }
                >
                  %
                </span>
              </div>
              {errors.rate && (
                <p className="text-red-500">{errors.rate.message}</p>
              )}
            </div>
          </div>

          <label className="block mb-2 text-sm font-medium text-slate-500 text-left pt-4">
            Mortgage Type
          </label>

          <label className="cursor-pointer p-2 flex items-center font-bold text-cslate-900 text-sm mb-2 rounded-md bg-white border border-cslate-500 hover:border-lemon has-[:checked]:border-lemon has-[:checked]:bg-lemon has-[:checked]:bg-opacity-20">
            <input
              id="mortgage-type-1"
              type="radio"
              name="type"
              value="Repayment"
              className="cursor-pointer w-4 h-4 border-cslate-300 focus:outline-none accent-clime mr-2 checked:bg-clime "
              {...register('type', {
                required: 'This field is required',
              })}
            />
            Repayment
          </label>

          <label className="cursor-pointer p-2 flex items-center font-bold text-cslate-900 text-sm mb-2 rounded-md bg-white border border-cslate-500 hover:border-lemon has-[:checked]:border-lemon has-[:checked]:bg-lemon has-[:checked]:bg-opacity-20">
            <input
              id="mortgage-type-2"
              type="radio"
              name="type"
              value="Interest Only"
              className="cursor-pointer w-4 h-4 border-cslate-300 focus:outline-none accent-clime mr-2 checked:bg-clime"
              {...register('type')}
            />
            Interest Only
          </label>

          {errors.type && <p className="text-red-500">{errors.type.message}</p>}

          <button
            type="submit"
            className="text-cslate-900 font-bold mt-2 mb-8 md:mb-0 md:max-w-[250px] btn bg-lemon"
            onClick={onSubmit}
          >
            <div className="flex items-center justify-center">
              <img src="/icon-calculator.svg" alt="" className="mr-2" />
              <p className="text-sm">Calculate Repayments</p>
            </div>
          </button>
        </form>
      </div>
      {Result ? <ShowResult /> : <NoResult />}

      {console.log(Result)}
    </div>
  )
}

export default App
