import React from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import App from "./App";
import rootReducer from "./reducers";

import "./index.css";

//Keep Login token on refresh with redux
const persistConfig = {
  key: "login",
  storage: storage,
  whitelist: ["login"],
};

const pReducer = persistReducer(persistConfig, rootReducer);
const middleware = applyMiddleware(thunk, logger);
const store = createStore(pReducer, middleware);
const persistor = persistStore(store);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
