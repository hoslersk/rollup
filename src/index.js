import React from 'react'
import ReactDOM from 'react-dom'

import Hello from './components/Hello'

// import * as Redux from 'redux'
// import * as ReactRedux from 'react-redux'
// import { Provider } from 'react-redux'

// render(
// 	<Provider store={store}>
// 		<Router history={history} routes={routes(store)} onUpdate={onUpdate} />
// 	</Provider>,
// 	document.getElementById('app')
// )

ReactDOM.render(
  <Hello />,
  document.getElementById('app')
);
