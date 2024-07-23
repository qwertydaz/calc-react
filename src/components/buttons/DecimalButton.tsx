import { FunctionKeys } from '../../consts/KeypadConsts';
import BlockButton from '../common/BlockButton';
// import { useDispatch } from 'react-redux';

const DecimalButton: React.FC = () => {
  // const dispatch = useDispatch();

  const onClick = () => {
    console.log('Decimal function clicked');
    // dispatch(clearDisplay())
  }

  return (
    <BlockButton text={FunctionKeys.DECIMAL} onClick={onClick} />
  );
};

export default DecimalButton;
