import { OperatorKeys } from '../../consts/KeypadConsts';
import BlockButton from '../common/BlockButton';
import { useDispatch } from 'react-redux';

const PlusButton: React.FC = () => {
  const dispatch = useDispatch();

  const onClick = () => {
    console.log('Plus operator clicked');
    // dispatch(clearDisplay())
  }

  return (
    <BlockButton text={OperatorKeys.PLUS} onClick={onClick} />
  );
};

export default PlusButton;
