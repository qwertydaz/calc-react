import BlockButton from '../common/BlockButton';
// import { useDispatch } from 'react-redux';

interface NumberButtonProps {
  numberText: string;
}

const NumberButton: React.FC<NumberButtonProps> = ({numberText}) => {
  // const dispatch = useDispatch();

  const onClick = () => {
    console.log(`Number clicked: ${numberText}`);
    // dispatch(clearDisplay())
  }

  return (
    <BlockButton
      className='number-button'
      text={numberText}
      onClick={onClick}
    />
  );
};

export default NumberButton;
