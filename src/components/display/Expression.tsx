import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { useEffect, useRef } from 'react';

const Expression: React.FC = () => {
  const firstOperand = useSelector((state: RootState) => state.calculator.firstOperand);
  const operator = useSelector((state: RootState) => state.calculator.operator);
  const secondOperand = useSelector((state: RootState) => state.calculator.secondOperand);

  const expressionRef = useRef<string>('');

  useEffect(() => {
    expressionRef.current = `${firstOperand?.label ?? ''} ${operator?.label ?? ''} ${secondOperand?.label ?? ''}`.trim();
  }, [firstOperand, operator, secondOperand]);

  return (
    <div className='expression'>
      {expressionRef.current}
    </div>
  );
};

export default Expression;
