import React, { useState } from 'react';

import './App.css';
import {Route, BrowserRouter as Router, Switch,Link} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";

function App() {

    // We houden in de state bij of iemand is "ingelogd" (simpele versie)
    const [isAuthenticated, toggleIsAuthenticated ] = useState(false);
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li><Link to="/">       Home</Link></li>
                        <li><Link to="/Login">  Login</Link></li>
                        <li><Link to="/Blog">  Blog</Link></li>
                        <li><Link to="/Blog Posts">  Blog Posts</Link></li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/BlogPost"  component={BlogPost}/>
                    <Route path="/Blog"  component={Blog}/>
                    <Route path="/Login" component={Login}/>
                    <Route path="/"  component={Home}/>
                </Switch>
            </div>


        </Router>

)

}

export default App;
