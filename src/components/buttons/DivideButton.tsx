import React from 'react';
import { OperatorKey } from '../../consts/enums';
import BlockButton from '../common/BlockButton';
// import { useDispatch } from 'react-redux';

const DivideButton: React.FC = () => {
  // const dispatch = useDispatch();

  const onClick = () => {
    console.log('Division operator clicked');
    // dispatch(clearDisplay())
  };

  return (
    <BlockButton
      className='operator-button'
      text={OperatorKey.DIVISION}
      onClick={onClick}
    />
  );
};

export default DivideButton;
