import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const CurrentOperand: React.FC = () => {
  const currentOperand = useSelector((state: RootState) => state.calculator.currentOperand);

  return (
    <>
      {currentOperand}
    </>
  );
};

export default CurrentOperand;
