import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CalculatorState {
  operand1: number;
  operand2: number;
  operator: string;
  result: number;
};

const initialState: CalculatorState = {
  operand1: 0,
  operand2: 0,
  operator: '',
  result: 0,
};

const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    setOperand1: (state: CalculatorState, action: PayloadAction<number>) => {
      state.operand1 = action.payload;
    },
    setOperand2: (state: CalculatorState, action: PayloadAction<number>) => {
      state.operand2 = action.payload;
    },
    setOperator: (state: CalculatorState, action: PayloadAction<string>) => {
      state.operator = action.payload;
    },
    setResult: (state: CalculatorState, action: PayloadAction<number>) => {
      state.result = action.payload;
    },
  },
});

export const {
  setOperand1,
  setOperand2,
  setOperator,
  setResult,
} = calculatorSlice.actions;

export default calculatorSlice.reducer;
