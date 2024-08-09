import BlockButton from '../common/BlockButton';
import { updateCurrentOperand } from '../../store/reducers/calculator.reducer';
import { useDispatch } from 'react-redux';

interface OperandButtonProps {
  numberText: string;
}

const OperandButton: React.FC<OperandButtonProps> = ({numberText}) => {
  const dispatch = useDispatch();

  const onClick = () => {
    console.log(`Number clicked: ${numberText}`);
    dispatch(updateCurrentOperand(numberText));
  }

  return (
    <BlockButton
      className='number-button'
      text={numberText}
      onClick={onClick}
    />
  );
};

export default OperandButton;
