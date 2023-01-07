
import NavBar from 'components/NavBar'
import Home from 'pages/Home/Home'
import Tienda from 'pages/Tienda/Tienda'
import { Switch, Route } from 'react-router-dom'

import './App.css'


function App() {
    return (
        <div className="App">
            
            <Route exact path={['/', '/tienda']} component={NavBar} />
            <Switch>

    
                <Route exact path="/" component={Home} />
                <Route path="/tienda" component={Tienda} />
            </Switch>
            
        </div>
    )
}

export default App
