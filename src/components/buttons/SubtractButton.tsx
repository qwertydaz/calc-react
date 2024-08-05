import { OperatorKey } from '../../consts/enums';
import BlockButton from '../common/BlockButton';
// import { useDispatch } from 'react-redux';

const SubtractButton: React.FC = () => {
  // const dispatch = useDispatch();

  const onClick = () => {
    console.log('Subtraction operator clicked');
    // dispatch(clearDisplay())
  }

  return (
    <BlockButton text={OperatorKey.SUBTRACTION} onClick={onClick} />
  );
};

export default SubtractButton;
