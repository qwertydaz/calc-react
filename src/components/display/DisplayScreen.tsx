import { Flex } from 'antd';
import Expression from './Expression';
import CurrentOperand from './CurrentOperand';

const DisplayScreen: React.FC = () => {
  return (
    <Flex vertical>
      <Expression />
      <CurrentOperand />
    </Flex>
  )
};

export default DisplayScreen;
