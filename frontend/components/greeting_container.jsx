import { connect } from 'react-redux';
import { logout } from '../actions/session_actions';
import Greeting from './greeting_container';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  logout: dispatch(logout())
});

const GreetingContainer = connect(
  mapStateToProps,
   mapDispatchToProps
 )(Greeting);

 export default GreetingContainer;
