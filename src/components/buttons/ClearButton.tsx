import { FunctionKeys } from '../../consts/KeypadConsts';
import BlockButton from '../common/BlockButton';
import { clearDisplay } from '../../reducers/calculatorReducer';
import { useDispatch } from 'react-redux';

const ClearButton: React.FC = () => {
  const dispatch = useDispatch();

  const onClick = () => {
    console.log('Clear function clicked');
    dispatch(clearDisplay())
  }

  return (
    <BlockButton text={FunctionKeys.CLEAR} onClick={onClick} />
  );
};

export default ClearButton;
