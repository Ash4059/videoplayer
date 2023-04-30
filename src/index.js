import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import { createStore, applyMiddleware } from 'redux';

import './index.css';
import App from './components/App';
import rootReducer from './reducers';

const root = ReactDOM.createRoot(document.getElementById('root'));

const logger = ({dispatch,getState}) => (next) => (action) => {
  if(typeof action !== 'function'){
    console.log("ACTION TYPE = ", action.type);
  }
  next(action);
}

const thunk = ({dispatch,getState}) => (next) => (action) => {
  if(typeof(action) === 'function'){
    action(dispatch);
    return;
  }
  next(action);
}

const store = createStore(rootReducer, applyMiddleware(logger,thunk));

export const StoreContext = createContext(store);

export function connect(callback) { 
  return function(Components){
    class ConnectedComponent extends React.Component{
      constructor(props){
        super(props);
        this.unsubscribe = this.props.store.subscribe(() => this.forceUpdate());
      }
      
      componentWillUnmount(){
        this.unsubscribe();
      }

      render(){
        const { store } = this.props;
        const state = store.getState();
        const dataToBePassedAsProps = callback(state);
        return <Components {...dataToBePassedAsProps} dispatch = {store.dispatch} />
      }
    }
    return class ConnectedComponentWrapper extends React.Component{
      render(){
        return(
          <StoreContext.Consumer>
            {store => { return <ConnectedComponent store={store} />}}
          </StoreContext.Consumer>
        );
      }
    }
  }
 }

root.render(
  <React.StrictMode>
    <StoreContext.Provider value={store}>
      <App />
    </StoreContext.Provider>
  </React.StrictMode>
);
