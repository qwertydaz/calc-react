import { FunctionKey, Mode, OperandKey, OperatorKey } from './enums';

type LabeledValue<T> = {
  label: string;
  value: T;
};

type Operand = LabeledValue<OperandKey>;
type Operator = LabeledValue<OperatorKey>;
type Function = LabeledValue<FunctionKey>;

type DisplayMode = Mode.READ | Mode.WRITE;

export type {
  Operand,
  Operator,
  Function,
  DisplayMode,
};
