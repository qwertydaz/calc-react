import { FunctionKey } from '../../consts/enums';
import BlockButton from '../common/BlockButton';
// import { useDispatch } from 'react-redux';

const EquateButton: React.FC = () => {
  // const dispatch = useDispatch();

  const onClick = () => {
    console.log('Equals function clicked');
    // dispatch(clearDisplay())
  }

  return (
    <BlockButton
      className='equate-button'
      text={FunctionKey.EQUATE}
      onClick={onClick}
    />
  );
};

export default EquateButton;
