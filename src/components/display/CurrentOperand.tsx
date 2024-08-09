import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const CurrentOperand: React.FC = () => {
  const currentOperand = useSelector((state: RootState) => state.calculator.currentOperand);

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
