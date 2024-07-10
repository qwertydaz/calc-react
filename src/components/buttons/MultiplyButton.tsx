import { OperatorKeys } from '../../consts/KeypadConsts';
import BlockButton from '../common/BlockButton';
import { useDispatch } from 'react-redux';

const MultiplyButton: React.FC = () => {
  const dispatch = useDispatch();

  const onClick = () => {
    console.log('Multiply operator clicked');
    // dispatch(clearDisplay())
  }

  return (
    <BlockButton text={OperatorKeys.MULTIPLY} onClick={onClick} />
  );
};

export default MultiplyButton;
