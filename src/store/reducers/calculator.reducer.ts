import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Operand, Operator } from '../../consts/types';

interface CalculatorState {
  currentOperand: string;
  expression: string;
  firstOperand?: Operand;
  operator?: Operator;
  secondOperand?: Operand;
};

const initialState: CalculatorState = {
  currentOperand: 'please input a number ...',
  expression: '',
  firstOperand: undefined,
  operator: undefined,
  secondOperand: undefined,
};

const generateExpression = (state: CalculatorState) => {
  return `${state.firstOperand?.value} ${state.operator?.value} ${state.secondOperand?.value}`.trim();
}

const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    updateCurrentOperand: (state: CalculatorState, action: PayloadAction<string>) => {
      state.currentOperand += action.payload;
    },
    setFirstOperand: (state: CalculatorState, action: PayloadAction<Operand>) => {
      state.firstOperand = action.payload;
      state.expression = generateExpression(state);
    },
    setOperator: (state: CalculatorState, action: PayloadAction<Operator>) => {
      state.operator = action.payload;
      state.expression = generateExpression(state);
    },
    setSecondOperand: (state: CalculatorState, action: PayloadAction<Operand>) => {
      state.secondOperand = action.payload;
      state.expression = generateExpression(state);
    },
    clearDisplay: (state: CalculatorState) => {
      state.currentOperand = initialState.currentOperand;
      state.expression = initialState.expression;
      state.firstOperand = initialState.firstOperand;
      state.secondOperand = initialState.secondOperand;
      state.operator = initialState.operator;
    },
  },
});

export const {
  updateCurrentOperand,
  setFirstOperand,
  setSecondOperand,
  setOperator,
  clearDisplay,
} = calculatorSlice.actions;

export default calculatorSlice.reducer;
