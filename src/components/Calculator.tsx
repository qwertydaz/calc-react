import DisplayScreen from './display/DisplayScreen';
import { Col, Divider, Row } from 'antd';
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
import NegateButton from './buttons/NegateButton';

const Calculator: React.FC = () => {
  return (
    <div
      data-testid='calculator'
      className='calculator'
    >
      <DisplayScreen />

      <Divider />

      <Row justify='center'>
        <Col>
          <BackspaceButton />
        </Col>
        <Col>
          <NegateButton />
        </Col>
        <Col>
          <ClearButton />
        </Col>
        <Col>
          <DivideButton />
        </Col>
      </Row>

      <Row justify='center'>
        <Col>
          <OperandButton numberText={OperandKey.SEVEN} />
        </Col>
        <Col>
          <OperandButton numberText={OperandKey.EIGHT} />
        </Col>
        <Col>
          <OperandButton numberText={OperandKey.NINE} />
        </Col>
        <Col>
          <MultiplyButton />
        </Col>
      </Row>

      <Row justify='center'>
        <Col>
          <OperandButton numberText={OperandKey.FOUR} />
        </Col>
        <Col>
          <OperandButton numberText={OperandKey.FIVE} />
        </Col>
        <Col>
          <OperandButton numberText={OperandKey.SIX} />
        </Col>
        <Col>
          <SubtractButton />
        </Col>
      </Row>

      <Row justify='center'>
        <Col>
          <OperandButton numberText={OperandKey.ONE} />
        </Col>
        <Col>
          <OperandButton numberText={OperandKey.TWO} />
        </Col>
        <Col>
          <OperandButton numberText={OperandKey.THREE} />
        </Col>
        <Col>
          <AddButton />
        </Col>
      </Row>

      <Row justify='center'>
        <Col className={'wide-block-button'}>
          <OperandButton numberText={OperandKey.ZERO} />
        </Col>
        <Col>
          <DecimalButton />
        </Col>
        <Col>
          <SolveButton />
        </Col>
      </Row>
    </div>
  );
};

export default Calculator;
