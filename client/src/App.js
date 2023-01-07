import { Switch, Route} from 'react-router-dom'
import './App.css'
import Home from 'components/Home'
import NavBar from 'components/NavBar'

function App() {
    return (
        <div className="App">
            
            <Route exact path={['/', '/home']} component={NavBar} />
            <Switch>
                <Route exact path="/home" component={Home} />
            </Switch>
            
        </div>
    )
}

export default App
