import { Button } from 'antd';

interface ButtonProps {
  text?: string;
  icon?: any;
  onClick?: () => void;
};

const BlockButton: React.FC<ButtonProps> = ({
  text=undefined,
  icon=undefined,
  onClick,
}) => {

  return (
    <Button
      test-id='block-button'
      block
      icon={icon}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

export default BlockButton;
