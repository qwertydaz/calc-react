import { RootState } from '../store';

const selectCurrentOperand = (state: RootState) => state.calculator.currentOperand;
const selectExpression = (state: RootState) => state.calculator.expression;
const selectFirstOperand = (state: RootState) => state.calculator.firstOperand;
const selectOperator = (state: RootState) => state.calculator.operator;
const selectSecondOperand = (state: RootState) => state.calculator.secondOperand;

export {
  selectCurrentOperand,
  selectExpression,
  selectFirstOperand,
  selectOperator,
  selectSecondOperand,
};
