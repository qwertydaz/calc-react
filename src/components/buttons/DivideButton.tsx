import { OperatorKeys } from '../../consts/KeypadConsts';
import BlockButton from '../common/BlockButton';
import { useDispatch } from 'react-redux';

const DivideButton: React.FC = () => {
  const dispatch = useDispatch();

  const onClick = () => {
    console.log('Divide operator clicked');
    // dispatch(clearDisplay())
  }

  return (
    <BlockButton text={OperatorKeys.DIVIDE} onClick={onClick} />
  );
};

export default DivideButton;
