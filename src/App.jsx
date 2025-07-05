import { Provider } from 'react-redux'
import './App.css'
import   Body from './components/Body.jsx'
import appStore from './utils/appStore.js'
import ErrorBoundary from './components/ErrorBoundary.jsx'
function App() {
  return (
     <Provider store={appStore} >
     <ErrorBoundary><Body /></ErrorBoundary>   
     
    </Provider>
  )
}

export default App
