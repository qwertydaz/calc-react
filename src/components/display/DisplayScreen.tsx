import React from 'react';
import { Flex } from 'antd';
import Expression from './Expression';
import CurrentOperand from './CurrentOperand';

const DisplayScreen: React.FC = () => {
  return (
    <Flex
      data-testid={'display-screen'}
      className={'display-screen'}
      vertical
    >
      <Expression />
      <CurrentOperand />
    </Flex>
  )
};

export default DisplayScreen;
