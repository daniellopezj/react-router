import React, { Fragment, Component } from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducer from "../../reducers/index";
import { Map as map } from "immutable";
import logger from "redux-logger";
import thunk from "redux-thunk";
import PagenotFound from "../components/not-found";
import { composeWithDevTools } from "redux-devtools-extension";
import {  Route, Switch, Redirect } from "react-router-dom";


import Videos from "./videos";
import Video from "./video";
import Home from "../components/home";
import Contact from "../components/contact";
import Header from "../components/header.js";

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

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Fragment>
                    <Header />
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/videos" exact component={Videos} />
                        <Route path="/videos/:id" exact component={Video} />
                        <Route path="/contacto" exact component={Contact} />
                        <Redirect from="/v" to="/videos" />
                        <Redirect from="/v/:id" to="/videos/:id" />
                        <Route component={PagenotFound} />
                    </Switch>
                </Fragment>
            </Provider>
        )
    }
}

export default App