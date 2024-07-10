import { OperatorKeys } from '../../consts/KeypadConsts';
import BlockButton from '../common/BlockButton';
import { useDispatch } from 'react-redux';

const MinusButton: React.FC = () => {
  const dispatch = useDispatch();

  const onClick = () => {
    console.log('Minus operator clicked');
    // dispatch(clearDisplay())
  }

  return (
    <BlockButton text={OperatorKeys.MINUS} onClick={onClick} />
  );
};

export default MinusButton;
