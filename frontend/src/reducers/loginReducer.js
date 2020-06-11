import * as actions from '../actions/loginActions'


export const initialState = {
    isLoggedIn: false,
    token: '',

  };


export default function loginReducer (state = initialState, action)  {
    switch (action.type) {
      case actions.SET_LOGIN_STATE:
        return {
          ...state,
          ...action.payload, // this is what we expect to get back from API call and login page input
          isLoggedIn: true, // we set this as true on login
        };
      default:
        return state;
    }
  };