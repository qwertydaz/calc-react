import React from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentOperand } from '../../store/selectors/calculator.selectors';

const CurrentOperand: React.FC = () => {
  const currentOperand = useSelector(selectCurrentOperand);

  return (
    <div
      data-testid='current-operand'
      className='current-operand'
    >
      {currentOperand}
    </div>
  );
};

export default CurrentOperand;
