// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.css';
import axios from 'axios';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      textData: "hello"
    };
     this.callMe = this.callMe.bind(this);
  }

  callMe() {
    var self = this;
    axios.get('http://localhost:5001/api/test')
      .then(function(res) {
        self.setState(prevState => ({
          textData: res.data
        }));
      })
      .catch(function (error) {
        alert(error);
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <div className={styles.container} data-tid="container">
          <h2>Home</h2>
          <button onClick={this.callMe}>{this.state.textData}</button>
          <Link to="/counter">to Counter</Link>
        </div>
      </div>
    );
  }
}
