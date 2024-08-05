import DisplayScreen from './display/DisplayScreen';
import { Card } from 'antd';
import { NumberKey } from '../consts/enums';
import ClearButton from './buttons/ClearButton';
import NumberButton from './buttons/NumberButton';
import EquateButton from './buttons/EquateButton';
import AddButton from './buttons/AddButton';
import SubtractButton from './buttons/SubtractButton';
import DivideButton from './buttons/DivideButton';
import MultiplyButton from './buttons/MultiplyButton';
import BackspaceButton from './buttons/BackspaceButton';
import DecimalButton from './buttons/DecimalButton';

const Calculator: React.FC = () => {
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
      data-testid='calculator'
      className='calculator'
      title={<DisplayScreen />}
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
        <NumberButton numberText={NumberKey.SEVEN} />
      </Card.Grid>
      <Card.Grid hoverable={false} style={rowStyle}>
        <NumberButton numberText={NumberKey.EIGHT} />
      </Card.Grid>
      <Card.Grid hoverable={false} style={rowStyle}>
        <NumberButton numberText={NumberKey.NINE} />
      </Card.Grid>
      <Card.Grid hoverable={false} style={rowStyle}>
        <MultiplyButton />
      </Card.Grid>
      <Card.Grid hoverable={false} style={rowStyle}>
        <NumberButton numberText={NumberKey.FOUR} />
      </Card.Grid>
      <Card.Grid hoverable={false} style={rowStyle}>
        <NumberButton numberText={NumberKey.FIVE} />
      </Card.Grid>
      <Card.Grid hoverable={false} style={rowStyle}>
        <NumberButton numberText={NumberKey.SIX} />
      </Card.Grid>
      <Card.Grid hoverable={false} style={rowStyle}>
        <SubtractButton />
      </Card.Grid>
      <Card.Grid hoverable={false} style={rowStyle}>
        <NumberButton numberText={NumberKey.ONE} />
      </Card.Grid>
      <Card.Grid hoverable={false} style={rowStyle}>
        <NumberButton numberText={NumberKey.TWO} />
      </Card.Grid>
      <Card.Grid hoverable={false} style={rowStyle}>
        <NumberButton numberText={NumberKey.THREE} />
      </Card.Grid>
      <Card.Grid hoverable={false} style={rowStyle}>
        <AddButton />
      </Card.Grid>
      <Card.Grid hoverable={false} style={bottomRowStyle}>
        <NumberButton numberText={NumberKey.ZERO} />
      </Card.Grid>
      <Card.Grid hoverable={false} style={bottomRowStyle}>
        <EquateButton />
      </Card.Grid>
    </Card>
  );
};

export default Calculator;
