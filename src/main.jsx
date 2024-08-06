import ReactDOM from 'react-dom/client'
import App from './Mortage Calculator/App'
import './index.css'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import { Provider } from 'react-redux'
import { persistor, store } from './Mortage Calculator/store'
import { PersistGate } from 'redux-persist/integration/react'
ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
        <ToastContainer position="top-center" />
      </PersistGate>
    </Provider>
  </>
)
