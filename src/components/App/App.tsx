import React from "react";
import {Route, Router, Switch} from "react-router";

import {history} from "../../utils/history";
import HomePage from "../../pages/HomePage/HomePage";
import {AppPage} from "../../pages/AppPage/AppPage";
import StoryPage from "../../pages/StoryPage/StoryPage";

export default function App() {
    return (
        <Router history={history}>
            <div>
                <Switch>
                    <Route exact path={"/"} component={HomePage}/>
                    <Route exact path={"/timeline"} component={AppPage}/>
                    <Route exact path={"/article"} component={StoryPage}/>
                    <Route path={"/"} component={() => <div>page not found</div>}/>
                </Switch>
            </div>
        </Router>
    );
}
