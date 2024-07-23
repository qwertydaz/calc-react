import { FunctionKeys } from '../../consts/KeypadConsts';
import BlockButton from '../common/BlockButton';
// import { useDispatch } from 'react-redux';

const BackspaceButton: React.FC = () => {
  // const dispatch = useDispatch();

  const onClick = () => {
    console.log('Backspace function clicked');
    // dispatch(clearDisplay())
  }

  return (
    <BlockButton text={FunctionKeys.BACKSPACE} onClick={onClick} />
  );
};

export default BackspaceButton;
