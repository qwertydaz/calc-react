import { FunctionKey } from '../../consts/enums';
import BlockButton from '../common/BlockButton';
// import { useDispatch } from 'react-redux';

const NegateButton: React.FC = () => {
  // const dispatch = useDispatch();

  const onClick = () => {
    console.log('Negate function clicked');
    // dispatch(clearDisplay())
  }

  return (
    <BlockButton
      className='function-button'
      text={FunctionKey.NEGATE}
      onClick={onClick}
    />
  );
};

export default NegateButton;
