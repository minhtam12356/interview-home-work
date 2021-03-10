import "./index.css";
import { BrowserRouter as Route, Link } from "react-router-dom";
import React from "react";
import RouterUser from "../Route/Route";
import Header from "../Page/Header";

class Index extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Header/>
                <RouterUser/>
            </React.Fragment>
        )
    }
}

export default Index;