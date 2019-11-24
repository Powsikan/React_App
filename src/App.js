import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Content from "./components/Content";
import About from "./components/About";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {

    return (
        <div>
            <Router>
                <div>
                    <NavBar></NavBar>
                    <hr />
                    <Switch>
                        <Route exact path='/' component={Home} />

                        <Route path='/contact' component={Content} />

                        <Route path='/about' component={About} />
                    </Switch>
                </div>
            </Router>

        </div>
    );




}

export default App;
