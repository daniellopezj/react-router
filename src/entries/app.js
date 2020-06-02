import React, { Fragment } from "react";
import { render } from "react-dom";
import Videos from "../pages/containers/videos";
import Home from "../pages/components/home";
import Contact from "../pages/components/contact";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducer from "../reducers/index";
import { Map as map } from "immutable";
import logger from "redux-logger";
import thunk from "redux-thunk";
import PagenotFound from "../pages/components/not-found";
import { composeWithDevTools } from "redux-devtools-extension";
import { BrowserRouter, Route, Switch,Redirect } from "react-router-dom";
import Header from "../pages/components/header.js";
// function logger({ getState, dispatch}) {
//   return (next) => {
//     return (action) => {
//       console.log('este es mi viejo estado', getState().toJS())
//       console.log('vamos a enviar está acción', action);
//       const value = next(action)
//       console.log('este es mi nuevo estado', getState().toJS())
//       return value
//     }
//   }
// }

const logger_ = ({ getState, dispatch }) => (next) => (action) => {
  console.log("este es mi viejo estado", getState().toJS());
  console.log("vamos a enviar está acción", action);
  const value = next(action);
  console.log("este es mi nuevo estado", getState().toJS());
  return value;
};

const store = createStore(
  reducer,
  map(),
  composeWithDevTools(applyMiddleware(logger, thunk))
);

const homeContainer = document.getElementById("home-container");

render(
  <BrowserRouter>
    <Provider store={store}>
      <Fragment>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/videos" exact component={Videos} />
          <Route path="/contacto" exact component={Contact} />
          <Redirect from="/v" to="/videos" />
          <Route component={PagenotFound} />
        </Switch>
      </Fragment>
    </Provider>
  </BrowserRouter>,
  homeContainer
);
