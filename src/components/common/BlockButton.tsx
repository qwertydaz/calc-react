import { Button } from 'antd';
import { ConfigContext } from 'antd/es/config-provider';
import { useContext } from 'react';

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

  const { getPrefixCls } = useContext(ConfigContext);
  const rootPrefixCls = getPrefixCls();

  return (
    <Button
      data-testid={className}
      className={`block-button ${className} ${rootPrefixCls}-btn-primary`}
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
