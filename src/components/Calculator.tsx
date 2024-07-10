import Display from './common/Display';
import { Card } from 'antd';
import { NumberKeys } from '../consts/KeypadConsts';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import ClearButton from './buttons/ClearButton';
import NumberButton from './buttons/NumberButton';
import EqualsButton from './buttons/EqualsButton';
import PlusButton from './buttons/PlusButton';
import MinusButton from './buttons/MinusButton';
import DivideButton from './buttons/DivideButton';
import MultiplyButton from './buttons/MultiplyButton';
import BackspaceButton from './buttons/BackspaceButton';
import DecimalButton from './buttons/DecimalButton';

const Calculator: React.FC = () => {
  const displayValue = useSelector((state: RootState) => state.calculator.displayValue);

  const rowStyle: React.CSSProperties = {
    width: '25%',
    textAlign: 'center',
  };

  const bottomRowStyle: React.CSSProperties = {
    width: '50%',
    textAlign: 'center',
  };

  return (
    <Card
      test-id='calculator'
      title={<Display text={displayValue} />}
      bordered={false}
    >
      <Card.Grid hoverable={false} style={rowStyle}>
        <BackspaceButton />
      </Card.Grid>
      <Card.Grid hoverable={false} style={rowStyle}>
        <ClearButton />
      </Card.Grid>
      <Card.Grid hoverable={false} style={rowStyle}>
        <DecimalButton />
      </Card.Grid>
      <Card.Grid hoverable={false} style={rowStyle}>
        <DivideButton />
      </Card.Grid>
      <Card.Grid hoverable={false} style={rowStyle}>
        <NumberButton numberText={NumberKeys.SEVEN} />
      </Card.Grid>
      <Card.Grid hoverable={false} style={rowStyle}>
        <NumberButton numberText={NumberKeys.EIGHT} />
      </Card.Grid>
      <Card.Grid hoverable={false} style={rowStyle}>
        <NumberButton numberText={NumberKeys.NINE} />
      </Card.Grid>
      <Card.Grid hoverable={false} style={rowStyle}>
        <MultiplyButton />
      </Card.Grid>
      <Card.Grid hoverable={false} style={rowStyle}>
        <NumberButton numberText={NumberKeys.FOUR} />
      </Card.Grid>
      <Card.Grid hoverable={false} style={rowStyle}>
        <NumberButton numberText={NumberKeys.FIVE} />
      </Card.Grid>
      <Card.Grid hoverable={false} style={rowStyle}>
        <NumberButton numberText={NumberKeys.SIX} />
      </Card.Grid>
      <Card.Grid hoverable={false} style={rowStyle}>
        <MinusButton />
      </Card.Grid>
      <Card.Grid hoverable={false} style={rowStyle}>
        <NumberButton numberText={NumberKeys.ONE} />
      </Card.Grid>
      <Card.Grid hoverable={false} style={rowStyle}>
        <NumberButton numberText={NumberKeys.TWO} />
      </Card.Grid>
      <Card.Grid hoverable={false} style={rowStyle}>
        <NumberButton numberText={NumberKeys.THREE} />
      </Card.Grid>
      <Card.Grid hoverable={false} style={rowStyle}>
        <PlusButton />
      </Card.Grid>
      <Card.Grid hoverable={false} style={bottomRowStyle}>
        <NumberButton numberText={NumberKeys.ZERO} />
      </Card.Grid>
      <Card.Grid hoverable={false} style={bottomRowStyle}>
        <EqualsButton />
      </Card.Grid>
    </Card>
  );
};

export default Calculator;
