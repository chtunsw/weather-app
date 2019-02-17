import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


//=============redux================
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';

let initialStore = {};
const store = createStore(
    rootReducer,
    initialStore,
    // for redux devtools:
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    // <Provider store> 使组件层级中的 connect() 方法都能够获得 Redux store。
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
//=============redux================

//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
