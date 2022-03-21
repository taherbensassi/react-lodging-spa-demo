import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/header/header";
import Home from "./layouts/home/home";
import About from "./layouts/about/about";

const App = () => (
    <Router>
        <Header />
        <main>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
        </main>
    </Router>
);

export default App;
