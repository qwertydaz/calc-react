import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CalculatorState {
  displayValue: string;
  previousValue: string;
  operator: string | null;
  waitingForOperand: boolean;
};

const initialState: CalculatorState = {
  displayValue: 'no input ...',
  previousValue: '',
  operator: null,
  waitingForOperand: false,
};

const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    setDisplayValue: (state: CalculatorState, action: PayloadAction<string>) => {
      state.displayValue = action.payload;
    },
    setPreviousValue: (state: CalculatorState, action: PayloadAction<string>) => {
      state.previousValue = action.payload;
    },
    setOperator: (state: CalculatorState, action: PayloadAction<string | null>) => {
      state.operator = action.payload;
    },
    setWaitingForOperand: (state: CalculatorState, action: PayloadAction<boolean>) => {
      state.waitingForOperand = action.payload;
    },
    clearDisplay: (state: CalculatorState) => {
      return initialState;
    },
  },
});

export const {
  setDisplayValue,
  setPreviousValue,
  setOperator,
  setWaitingForOperand,
  clearDisplay,
} = calculatorSlice.actions;

export default calculatorSlice.reducer;
