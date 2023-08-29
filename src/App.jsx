import './App.css'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import Header from './components/Header'
import Hero from './components/Hero'
import Homepage from './components/Homepage'
import Revenue from './components/Revenue'
import Roadmap from './components/Roadmap'
import SignIn from './components/SignIn'
import SignUpPage from './components/SignUp'
import Tools from './components/Tools'
import ToolsPage from './components/ToolsPage'
import Use from './components/Use'
import { BrowserRouter, Switch, Route } from 'react-router-dom/cjs/react-router-dom.min'

function App() {
  return (
    <div className='flex flex-col w-screen min-h-screen bg-brandDarkBlue'>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/signup' component={SignUpPage} />
          <Route path='/login'  component={SignIn} />
          <Route path='/tools' component={ToolsPage} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
