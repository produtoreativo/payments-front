import { connect } from 'react-redux';
import Home from './Home';
import reducer from './redux/reducer';

const mapStateToProps = state => {
  return {
    data: state.payments,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    find: (payload) => {
      dispatch({
        type: 'SEARCH',
        payload, 
        meta: {
          reducer,
        }
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)