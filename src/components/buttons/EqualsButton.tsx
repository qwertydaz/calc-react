import { FunctionKeys } from '../../consts/KeypadConsts';
import BlockButton from '../common/BlockButton';
import { useDispatch } from 'react-redux';

const EqualsButton: React.FC = () => {
  const dispatch = useDispatch();

  const onClick = () => {
    console.log('Equals function clicked');
    // dispatch(clearDisplay())
  }

  return (
    <BlockButton text={FunctionKeys.EQUALS} onClick={onClick} />
  );
};

export default EqualsButton;
