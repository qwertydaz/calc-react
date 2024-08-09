const enum OperandKey {
  ONE = '1',
  TWO = '2',
  THREE = '3',
  FOUR = '4',
  FIVE = '5',
  SIX = '6',
  SEVEN = '7',
  EIGHT = '8',
  NINE = '9',
  ZERO = '0',
};

const enum OperatorKey {
  ADDITION = '+',
  SUBTRACTION = '-',
  MULTIPLICATION = '*',
  DIVISION = '/',
};

const enum FunctionKey {
  CLEAR = 'C',
  SOLVE = '=',
  DECIMAL = '.',
  BACKSPACE = '←',
};

const enum Mode {
  READ,
  WRITE,
};

export {
  OperandKey,
  OperatorKey,
  FunctionKey,
  Mode,
};
