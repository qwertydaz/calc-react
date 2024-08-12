import React from 'react';
import { FunctionKey } from '../../consts/enums';
import BlockButton from '../common/BlockButton';
import { clearDisplay } from '../../store/reducers/calculator.reducer';
import { useDispatch } from 'react-redux';

const ClearButton: React.FC = () => {
  const dispatch = useDispatch();

  const onClick = () => {
    console.log('Clear function clicked');
    dispatch(clearDisplay())
  }

  return (
    <BlockButton
      className='function-button'
      text={FunctionKey.CLEAR}
      onClick={onClick}
    />
  );
};

export default ClearButton;
