import React, {Component} from "react";
import {Link} from "react-router-dom";

export default class HomePage extends Component {
    render() {
        return (
            <div>
                HomePage!
                <br/>
                <br/>
                <Link to={"/timeline"}>Перейти к приложению</Link>
            </div>
        )
    }
}