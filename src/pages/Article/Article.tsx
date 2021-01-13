import React, {Component} from "react";
import {Link} from "react-router-dom";

export default class StoryPage extends Component {
  render() {
    return (
      <div>
        <Link to={"/timeline"}>back</Link>
      </div>
    )
  }
}