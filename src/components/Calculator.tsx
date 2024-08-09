import DisplayScreen from './display/DisplayScreen';
import { Card } from 'antd';
import { OperandKey } from '../consts/enums';
import ClearButton from './buttons/ClearButton';
import OperandButton from './buttons/OperandButton';
import SolveButton from './buttons/SolveButton';
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
        <OperandButton numberText={OperandKey.SEVEN} />
      </Card.Grid>
      <Card.Grid hoverable={false} style={rowStyle}>
        <OperandButton numberText={OperandKey.EIGHT} />
      </Card.Grid>
      <Card.Grid hoverable={false} style={rowStyle}>
        <OperandButton numberText={OperandKey.NINE} />
      </Card.Grid>
      <Card.Grid hoverable={false} style={rowStyle}>
        <MultiplyButton />
      </Card.Grid>
      <Card.Grid hoverable={false} style={rowStyle}>
        <OperandButton numberText={OperandKey.FOUR} />
      </Card.Grid>
      <Card.Grid hoverable={false} style={rowStyle}>
        <OperandButton numberText={OperandKey.FIVE} />
      </Card.Grid>
      <Card.Grid hoverable={false} style={rowStyle}>
        <OperandButton numberText={OperandKey.SIX} />
      </Card.Grid>
      <Card.Grid hoverable={false} style={rowStyle}>
        <SubtractButton />
      </Card.Grid>
      <Card.Grid hoverable={false} style={rowStyle}>
        <OperandButton numberText={OperandKey.ONE} />
      </Card.Grid>
      <Card.Grid hoverable={false} style={rowStyle}>
        <OperandButton numberText={OperandKey.TWO} />
      </Card.Grid>
      <Card.Grid hoverable={false} style={rowStyle}>
        <OperandButton numberText={OperandKey.THREE} />
      </Card.Grid>
      <Card.Grid hoverable={false} style={rowStyle}>
        <AddButton />
      </Card.Grid>
      <Card.Grid hoverable={false} style={bottomRowStyle}>
        <OperandButton numberText={OperandKey.ZERO} />
      </Card.Grid>
      <Card.Grid hoverable={false} style={bottomRowStyle}>
        <SolveButton />
      </Card.Grid>
    </Card>
  );
};

export default Calculator;
