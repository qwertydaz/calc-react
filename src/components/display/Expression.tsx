import React from 'react';
import { useSelector } from 'react-redux';
import { selectExpression } from '../../store/selectors/calculator.selectors';

const Expression: React.FC = () => {
  const expression = useSelector(selectExpression);

  return (
    <div
      data-testid='expression'
      className='expression'
    >
      {expression}
    </div>
  );
};

export default Expression;
