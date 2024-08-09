import { FunctionKey } from '../../consts/enums';
import BlockButton from '../common/BlockButton';
// import { useDispatch } from 'react-redux';

const SolveButton: React.FC = () => {
  // const dispatch = useDispatch();

  const onClick = () => {
    console.log('Solve function clicked');
    // dispatch(clearDisplay())
  }

  return (
    <BlockButton
      className='solve-button'
      text={FunctionKey.SOLVE}
      onClick={onClick}
    />
  );
};

export default SolveButton;
