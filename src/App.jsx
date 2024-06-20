import {Provider} from "react-redux"
import reactLogo from './assets/react.svg'
import './App.css'
import Body from './Components/Body'
import appStore from "./Utilities/AppStore"

function App() {

  return (
    <Provider store={appStore}>
    <Body />
    </Provider>
  )
}

export default App
