
import NavBar from 'components/NavBar'
import Home from 'pages/Home/Home'
import Tienda from 'pages/Tienda/Tienda'
import Soporte from 'pages/Soporte/Soporte'
import { Switch, Route } from 'react-router-dom'

import './App.css'


function App() {
    return (
        <div className="App">
            
            <Route exact path={['/', '/tienda', '/soporte']} component={NavBar} />
            <Switch>

    
                <Route exact path="/" component={Home} />
                <Route path="/tienda" component={Tienda} />
                <Route path="/soporte" component={Soporte} />
            </Switch>
            
        </div>
    )
}

export default App
