import React, {Component} from "react";

import Header from "../../components/Header/Header";
import ApexChart from "../../components/TimeLine/ApexChart";

export class AppPage extends Component {
    render() {
        console.log("app")
        return (
            <div>
                <Header/>
                <ApexChart/>
            </div>
        )
    }
}
