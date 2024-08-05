import { OperatorKey } from './enums';

type LabeledValue<T> = {
  label: string;
  value: T;
};

type Operator = OperatorKey.ADDITION | OperatorKey.SUBTRACTION | OperatorKey.MULTIPLICATION | OperatorKey.DIVISION;

export type {
  LabeledValue,
  Operator,
};
