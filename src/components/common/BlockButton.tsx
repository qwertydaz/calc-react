import { Button } from 'antd';

interface BlockButtonProps {
  className?: string;
  text?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
};

const BlockButton: React.FC<BlockButtonProps> = ({
  className='',
  text,
  icon,
  onClick,
  ...props
}) => {
  return (
    <Button
      data-testid={className}
      className={`block-button ${className}`}
      block
      icon={icon}
      onClick={onClick}
      {...props}
    >
      {text}
    </Button>
  );
};

export default BlockButton;
