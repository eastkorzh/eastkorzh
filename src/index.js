import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'

import storeAPI from './store';

import App from './App';

ReactDOM.render(
	<Provider store={storeAPI.store}>
		<PersistGate loading={null} persistor={storeAPI.persistor}>
			<App />
		</PersistGate>
	</Provider>,
	document.getElementById('root')
);
