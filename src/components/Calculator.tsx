import { useEffect, useState } from 'react';
import Screen from './common/Screen';
import { Card } from 'antd';
import { isNil } from 'lodash';
import { FunctionKeys, NumberKeys, OperatorKeys } from '../consts/KeypadConsts';
import BlockButton from './common/BlockButton';

const Calculator: React.FC = () => {
  const [expression, setExpression] = useState<string>();
  const [result, setResult] = useState<string>();
  const [screenText, setScreenText] = useState<string>('no input ...');

  useEffect(() => {
    if (isNil(expression) && isNil(result)) return;
    if (!isNil(expression) && isNil(result)) {
      setScreenText(expression);
      return;
    }
    setScreenText(expression + ' = ' + result)
  }, [expression, result]);

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
      title={<Screen text={screenText} />}
      bordered={false}
    >
      <Card.Grid hoverable={false} style={rowStyle}>
        <BlockButton text={FunctionKeys.BACKSPACE} />
      </Card.Grid>
      <Card.Grid hoverable={false} style={rowStyle}>
        <BlockButton text={FunctionKeys.CLEAR} />
      </Card.Grid>
      <Card.Grid hoverable={false} style={rowStyle}>
        <BlockButton text={FunctionKeys.DECIMAL} />
      </Card.Grid>
      <Card.Grid hoverable={false} style={rowStyle}>
        <BlockButton text={OperatorKeys.DIVIDE} />
      </Card.Grid>
      <Card.Grid hoverable={false} style={rowStyle}>
        <BlockButton text={NumberKeys.SEVEN} />
      </Card.Grid>
      <Card.Grid hoverable={false} style={rowStyle}>
        <BlockButton text={NumberKeys.EIGHT} />
      </Card.Grid>
      <Card.Grid hoverable={false} style={rowStyle}>
        <BlockButton text={NumberKeys.NINE} />
      </Card.Grid>
      <Card.Grid hoverable={false} style={rowStyle}>
        <BlockButton text={OperatorKeys.MULTIPLY} />
      </Card.Grid>
      <Card.Grid hoverable={false} style={rowStyle}>
        <BlockButton text={NumberKeys.FOUR} />
      </Card.Grid>
      <Card.Grid hoverable={false} style={rowStyle}>
        <BlockButton text={NumberKeys.FIVE} />
      </Card.Grid>
      <Card.Grid hoverable={false} style={rowStyle}>
        <BlockButton text={NumberKeys.SIX} />
      </Card.Grid>
      <Card.Grid hoverable={false} style={rowStyle}>
        <BlockButton text={OperatorKeys.MINUS} />
      </Card.Grid>
      <Card.Grid hoverable={false} style={rowStyle}>
        <BlockButton text={NumberKeys.ONE} />
      </Card.Grid>
      <Card.Grid hoverable={false} style={rowStyle}>
        <BlockButton text={NumberKeys.TWO} />
      </Card.Grid>
      <Card.Grid hoverable={false} style={rowStyle}>
        <BlockButton text={NumberKeys.THREE} />
      </Card.Grid>
      <Card.Grid hoverable={false} style={rowStyle}>
        <BlockButton text={OperatorKeys.PLUS} />
      </Card.Grid>
      <Card.Grid hoverable={false} style={bottomRowStyle}>
        <BlockButton text={NumberKeys.ZERO} />
      </Card.Grid>
      <Card.Grid hoverable={false} style={bottomRowStyle}>
        <BlockButton text={FunctionKeys.EQUALS} />
      </Card.Grid>
    </Card>
  );
};

export default Calculator;
