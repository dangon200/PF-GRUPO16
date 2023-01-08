import NavBar from 'components/NavBar';
import Home from 'pages/Home/Home';
import SobreNosotros from 'pages/SobreNosotros/SobreNosotros';
import Tienda from 'pages/Tienda/Tienda';
import { Switch, Route } from 'react-router-dom';

import './App.css';


function App() {
    return (
        <div className="App">
            
            <Route 
                exact path={['/', '/tienda', '/nosotros']} component={NavBar} 
            />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/tienda" component={Tienda} />
                <Route path="/nosotros" component={SobreNosotros} />
            </Switch>
            
        </div>
    )
}

export default App;
