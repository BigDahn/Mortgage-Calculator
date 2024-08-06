import { createSlice } from "@reduxjs/toolkit";

const initialState = {


  Repayments: null,
  Total: null,
  Result: false
}



const CalcSlice = createSlice({
  name: 'mortgage',
  initialState,
  
  reducers:{
    calculate : (state,action)=>{
        const {form} = action.payload
        const {amount,term,rate,type} = form
          
        let repayment = parseFloat(
          (amount * (rate * Math.pow(1 + rate, term))) /
            (Math.pow(1 + rate, term) - 1)
        )
         
         let interest = Number(parseFloat(repayment * term - amount).toFixed(2))

         
         let total = parseFloat(amount + interest).toFixed(2)

         repayment = new Intl.NumberFormat().format(
           parseFloat(repayment).toFixed(2)
         )
         interest = new Intl.NumberFormat().format(interest)
         total = new Intl.NumberFormat().format(total)

         console.log(total)
         console.log(repayment)
         console.log(interest)

         if (type === "Repayment") {
            
            state.Repayments = repayment;
            state.Total = total
            state.Result = true
            
         }
         if (type === "Interest Only") {
          state.Total = total
          state.Repayments = interest
          state.Result = true
         }
        
        
    },
    clearAll: (state)=>{
      state.Repayments = null,
      state.Total = null,
      state.Result = false
    }
  }
})


export const {calculate,clearAll} = CalcSlice.actions
export default CalcSlice.reducer