import { OperatorKey } from '../../consts/enums';
import BlockButton from '../common/BlockButton';
// import { useDispatch } from 'react-redux';

const AddButton: React.FC = () => {
  // const dispatch = useDispatch();

  const onClick = () => {
    console.log('Addition operator clicked');
    // dispatch(clearDisplay())
  }

  return (
    <BlockButton text={OperatorKey.ADDITION} onClick={onClick} />
  );
};

export default AddButton;
