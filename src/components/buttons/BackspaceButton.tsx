import { FunctionKey } from '../../consts/enums';
import BlockButton from '../common/BlockButton';
// import { useDispatch } from 'react-redux';

const BackspaceButton: React.FC = () => {
  // const dispatch = useDispatch();

  const onClick = () => {
    console.log('Backspace function clicked');
    // dispatch(clearDisplay())
  }

  return (
    <BlockButton text={FunctionKey.BACKSPACE} onClick={onClick} />
  );
};

export default BackspaceButton;
