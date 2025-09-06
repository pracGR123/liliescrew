<<<<<<< HEAD
import styled from 'styled-components';
import { CustomerOrder as CustomerOrderType } from '../types/types';
import { motion } from 'framer-motion';

const OrderContainer = styled.div`
  width: 300px;
  height: 100vh;
  background-color: #f5f5f5;
  padding: 20px;
  border-left: 1px solid #ddd;
`;

const OrderCard = styled(motion.div)`
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const TimerBar = styled(motion.div)<{ progress: number }>`
  width: 100%;
  height: 8px;
  background-color: #e0e0e0;
  border-radius: 4px;
  margin: 10px 0;
  overflow: hidden;

  &::after {
    content: '';
    display: block;
    height: 100%;
    width: ${props => props.progress}%;
    background-color: ${props => 
      props.progress > 66 ? '#4caf50' :
      props.progress > 33 ? '#ff9800' :
      '#f44336'
    };
    transition: width 0.3s ease-in-out;
  }
`;

const ModificationsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 10px 0;

  li {
    padding: 5px 0;
    color: #666;
    
    &.remove {
      color: #f44336;
    }
    
    &.add {
      color: #4caf50;
    }
  }
`;

interface CustomerOrderProps {
  order: CustomerOrderType;
  timeProgress: number;
}

export const CustomerOrder = ({ order, timeProgress }: CustomerOrderProps) => {
  return (
    <OrderContainer>
      <h2>Customer Order</h2>
      <OrderCard
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h3>{order.baseRecipe.name}</h3>
        <TimerBar progress={timeProgress} />
        
        <ModificationsList>
          {order.modifications.remove.map((item) => (
            <li key={item} className="remove">
              ❌ No {item}
            </li>
          ))}
          {order.modifications.add.map((item) => (
            <li key={item} className="add">
              ✅ Extra {item}
            </li>
          ))}
        </ModificationsList>

        <p>Time Remaining: {Math.ceil(order.timeLimit * timeProgress / 100)} seconds</p>
      </OrderCard>
    </OrderContainer>
  );
};
=======
import styled from 'styled-components';
import { CustomerOrder as CustomerOrderType } from '../types/types';
import { motion } from 'framer-motion';

const OrderContainer = styled.div`
  width: 300px;
  height: 100vh;
  background-color: #f5f5f5;
  padding: 20px;
  border-left: 1px solid #ddd;
`;

const OrderCard = styled(motion.div)`
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const TimerBar = styled(motion.div)<{ progress: number }>`
  width: 100%;
  height: 8px;
  background-color: #e0e0e0;
  border-radius: 4px;
  margin: 10px 0;
  overflow: hidden;

  &::after {
    content: '';
    display: block;
    height: 100%;
    width: ${props => props.progress}%;
    background-color: ${props => 
      props.progress > 66 ? '#4caf50' :
      props.progress > 33 ? '#ff9800' :
      '#f44336'
    };
    transition: width 0.3s ease-in-out;
  }
`;

const ModificationsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 10px 0;

  li {
    padding: 5px 0;
    color: #666;
    
    &.remove {
      color: #f44336;
    }
    
    &.add {
      color: #4caf50;
    }
  }
`;

interface CustomerOrderProps {
  order: CustomerOrderType;
  timeProgress: number;
}

export const CustomerOrder = ({ order, timeProgress }: CustomerOrderProps) => {
  return (
    <OrderContainer>
      <h2>Customer Order</h2>
      <OrderCard
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h3>{order.baseRecipe.name}</h3>
        <TimerBar progress={timeProgress} />
        
        <ModificationsList>
          {order.modifications.remove.map((item) => (
            <li key={item} className="remove">
              ❌ No {item}
            </li>
          ))}
          {order.modifications.add.map((item) => (
            <li key={item} className="add">
              ✅ Extra {item}
            </li>
          ))}
        </ModificationsList>

        <p>Time Remaining: {Math.ceil(order.timeLimit * timeProgress / 100)} seconds</p>
      </OrderCard>
    </OrderContainer>
  );
};
>>>>>>> e507c67116ac7f1f06dd0e198964ada230c859e6
