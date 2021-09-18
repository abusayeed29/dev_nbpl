import logo from './logo.svg';
import './App.css';
import routes from "./routes";
import {
    Route,
    Switch, BrowserRouter as Router
} from 'react-router-dom';

// Import Scss
import "./theme.scss";

//Import Icon Css
import "./assets/css/materialdesignicons.min.css";
import "./assets/css/pe-icon-7.css";

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    {routes.map((route, idx) => (
                        <Route path={route.path} component={route.component} key={idx} />
                    ))}
                </Switch>
            </Router>
        </div>
    );
}

export default App;
