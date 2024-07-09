import { Button } from 'antd';

interface ButtonProps {
  text?: string;
  icon?: any;
};

const onClick = () => {
  console.log('Button Clicked');
}

const BlockButton: React.FC<ButtonProps> = ({
  text=undefined,
  icon=undefined,
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
