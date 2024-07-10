import Title from 'antd/es/typography/Title';

interface ScreenProps {
  text?: string;
}

const Display: React.FC<ScreenProps> = ({
  text=undefined
}) => {
  return (
    <Title
      test-id='screen'
      style={{
        width: '100%',
        height: '100%',
        backgroundColor:'black',
        color: 'white',
        borderRadius: '10px',
        padding: '10px',
        overflow: 'auto'
      }}
    >
      {text}
    </Title>
  )
}

export default Display;
