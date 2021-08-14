import React from 'react';
import { bindActionCreators } from 'redux';
import { useStore, useSelector, useDispatch } from 'react-redux';
import Home from './Home';
import reducer from './redux/reducer'; 
import watchSearch from './redux/sagas/search';

const mapStateToProps = ({payments}) => payments;

function find(payload) {
  return {
    type: 'SEARCH',
    payload, 
    meta: {
      reducer,
    }
  }
}

function Container(props) {
  const store = useStore();
  const [task, setTask] = React.useState(null);
  const payments = useSelector(mapStateToProps);
  const dispatch = useDispatch();

  React.useEffect(() => {
    console.log('componentDidMount', store);
    setTask(store.runSaga(watchSearch));
    return () => {
      console.log('componentWillUnmount');
      if(task) {
        console.log('o que eh task', task)
        task.cancel();
      }
    };
  }, []);
  //debugger 
  console.log( store.getState().payments )
  return (
    <Home {...props} payments={payments} {...bindActionCreators({ find }, dispatch)} />
  )
}

export default Container;