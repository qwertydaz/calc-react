import { OperatorKey } from '../../consts/enums';
import BlockButton from '../common/BlockButton';
// import { useDispatch } from 'react-redux';

const MultiplyButton: React.FC = () => {
  // const dispatch = useDispatch();

  const onClick = () => {
    console.log('Multiplication operator clicked');
    // dispatch(clearDisplay())
  }

  return (
    <BlockButton text={OperatorKey.MULTIPLICATION} onClick={onClick} />
  );
};

export default MultiplyButton;
