export const SET_LOGIN_STATE = "SET_LOGIN_STATE"

const setLoginState = (loginData) => {
    return {
      type: SET_LOGIN_STATE,
      payload: loginData,
    };
  };


export const login = (loginInput) => {
    console.log("Here");
    console.log(loginInput)
    const [userName,password]=loginInput
    return (dispatch) => {  // don't forget to use dispatch here!
      return fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({userName,password}),
      })
      .then((response) => response.json())
      .then((json) => {
        dispatch(setLoginState({ ...json, token: json.token })); // our action is called here

       
      })

        .catch((err) => {
          console.log(err);
        });
    };
  };