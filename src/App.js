import React, {Component} from 'react';
import { getCrimesData, getPlayerData, getOneTeamData } from './apiCalls/apiCalls'
import { connect } from 'react-redux';
import { showCrimes, showTeamArrests, showPlayers } from './Actions';
import {Route, NavLink} from 'react-router-dom'
// import TeamsContainer from './Containers/TeamsContainer'
import CrimesContainer from './Containers/CrimesContainer'
import './App.css';

class App extends Component {

  async componentDidMount() {
    getCrimesData()
      .then(crimes => this.props.showCrimes(crimes))

    getPlayerData()
      .then(players => this.props.showPlayers(players))
  }

  singleTeamArrests = (team) => {
    getOneTeamData(team)
      .then(team => this.props.showTeamArrests(team))
  }

  render () {
    return (
      <main>
        <header>
          <h1>NFL LockedUp</h1>
        </header>
        <CrimesContainer crimes={this.props.crimes} players={this.props.players}/>
        <NavLink to='/den' className='nav' onClick={() => this.singleTeamArrests('DEN')}>Denver Broncos</NavLink>
        <NavLink to='/min' className='nav' onClick={() => this.singleTeamArrests('MIN')}>Minnesota Vikings</NavLink>
        {/* <Route exact path='/Den' render={() => <Creatures data={unicornData}/>} /> */}
      </main>
    )
  }
}

const mapStateToProps = (store) => ({
  crimes: store.crimes,
  teamArrests: store.teamArrests,
  players: store.players
})

const mapDispatchToProps = dispatch => ({
  showCrimes: (crimes) => dispatch(showCrimes(crimes)),
  showTeamArrests: (team) => dispatch(showTeamArrests(team)),
  showPlayers: (players) => dispatch(showPlayers(players))
})

export default connect (mapStateToProps, mapDispatchToProps)(App);

