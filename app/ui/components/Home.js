// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styles from './Home.css';

export default class Home extends Component {

  constructor() {
    super();
    this.state = {
      textData: 'hello'
    };
    this.callMe = this.callMe.bind(this);
  }

  callMe() {
    const self = this;
    axios.get('http://localhost:5001/api/test')
      .then(res => {
        self.setState(() => ({
          textData: res.data
        }));
      })
      .catch((error) => {
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
        </div>
      </div>
    );
  }
}
