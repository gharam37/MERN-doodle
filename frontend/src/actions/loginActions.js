export const SET_LOGIN_STATE = "SET_LOGIN_STATE";

const setLoginState = (loginData) => {
  return {
    type: SET_LOGIN_STATE,
    payload: loginData,
  };
};

export const login = (loginInput) => { //Take username from SignIn.js
  const [userName, password] = loginInput;
  return (dispatch) => {
    // don't forget to use dispatch here!
    return fetch("http://localhost:3001/login", { 
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userName, password }),
    })
      .then((response) => response.json())
      .then((json) => {
        alert.show('Oh look, an alert!')

        dispatch(setLoginState({ ...json, token: json.token })); // dispatch token
      })

      .catch((err) => {

        console.log(err);
      });
  };
};
