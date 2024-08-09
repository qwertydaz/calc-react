import { useSelector } from 'react-redux';
import { selectExpression } from '../../store/selectors/calculator.selectors';

const Expression: React.FC = () => {
  const expression = useSelector(selectExpression);

  return (
    <div className='expression'>
      {expression}
    </div>
  );
};

export default Expression;
