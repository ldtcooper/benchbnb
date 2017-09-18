import * as APIUtil from '../util/session_api_util';
// login(user) (thunk action creator)
// logout() (thunk action creator)
// signup(user) (thunk action creator)
// receiveCurrentUser(currentUser) (regular action creator)
// receiveErrors(errors) (regular action creator)

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

export const login = (user) => {
  return APIUtil.login(user)
    .then(() => dispatch => (currentUser => receiveCurrentUser(currentUser)));
};

export const signup = (user) => {
  return APIUtil.signup(user)
    .then(() => dispatch => (currentUser) => receiveCurrentUser(currentUser));
};

export const logout = () => {
  return APIUtil.logout()
    .then (() => dispatch => () => receiveCurrentUser(null));
};
