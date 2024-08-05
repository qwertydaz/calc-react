import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LabeledValue, Operator } from '../consts/types';

interface CalculatorState {
  currentOperand: string;
  firstOperand?: LabeledValue<number>;
  secondOperand?: LabeledValue<number>;
  operator?: LabeledValue<Operator>;
};

const initialState: CalculatorState = {
  currentOperand: 'please input a number ...',
  firstOperand: undefined,
  secondOperand: undefined,
  operator: undefined,
};

const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    setCurrentOperand: (state: CalculatorState, action: PayloadAction<string>) => {
      state.currentOperand = action.payload;
    },
    setFirstOperand: (state: CalculatorState, action: PayloadAction<LabeledValue<number>>) => {
      state.firstOperand = action.payload;
    },
    setSecondOperand: (state: CalculatorState, action: PayloadAction<LabeledValue<number>>) => {
      state.secondOperand = action.payload;
    },
    setOperator: (state: CalculatorState, action: PayloadAction<LabeledValue<Operator>>) => {
      state.operator = action.payload;
    },
    clearDisplay: () => {
      return initialState;
    },
  },
});

export const {
  setCurrentOperand,
  setFirstOperand,
  setSecondOperand,
  setOperator,
  clearDisplay,
} = calculatorSlice.actions;

export default calculatorSlice.reducer;
