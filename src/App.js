import React, {Component} from 'react';
import {getCrimesData} from './apiCalls/apiCalls'
import { connect } from 'react-redux';
import { showCrimes} from './Actions';
import './App.css';

class App extends Component {

  async componentDidMount() {
    getCrimesData()
      .then(crimes => this.props.showCrimes(crimes))
  }

  render () {
    return (
      <main>
        <header>
          <h1>NFL LockedUp</h1>
        </header>
      </main>
    )
  }
}

const mapStateToProps = (store) => ({
  crimes: store.crimes
})

const mapDispatchToProps = dispatch => ({
  showCrimes: (crimes) => dispatch(showCrimes(crimes))
})

export default connect (mapStateToProps, mapDispatchToProps)(App);

