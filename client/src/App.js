import { Switch, Route} from 'react-router-dom'
import './App.css'
import { Landing, Home} from './pages/'
import NavBar from 'components/NavBar'

function App() {
    return (
        <div className="App">
            
                <NavBar/>
            <Switch>
                <Route exact path="/" component={Landing} />
                <Route exact path="/home" component={Home} />
            </Switch>
            
        </div>
    )
}

export default App
