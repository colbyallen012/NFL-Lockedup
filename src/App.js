import React, {Component} from 'react';
import { getCrimesData, getTeamData, getPlayerData } from './apiCalls/apiCalls'
import { connect } from 'react-redux';
import { showCrimes, showTeams, showPlayers } from './Actions';
import TeamsContainer from './Containers/TeamsContainer'
import CrimesContainer from './Containers/CrimesContainer'
import './App.css';

class App extends Component {

  async componentDidMount() {
    getCrimesData()
      .then(crimes => this.props.showCrimes(crimes))

    getTeamData()
      .then(teams => this.props.showTeams(teams))

    getPlayerData()
      .then(players => this.props.showPlayers(players))
  }

  render () {
    return (
      <main>
        <header>
          <h1>NFL LockedUp</h1>
        </header>
        <CrimesContainer crimes={this.props.crimes} players={this.props.players}/>
        <TeamsContainer teams={this.props.teams} />
      </main>
    )
  }
}

const mapStateToProps = (store) => ({
  crimes: store.crimes,
  teams: store.teams,
  players: store.players
})

const mapDispatchToProps = dispatch => ({
  showCrimes: (crimes) => dispatch(showCrimes(crimes)),
  showTeams: (teams) => dispatch(showTeams(teams)),
  showPlayers: (players) => dispatch(showPlayers(players))
})

export default connect (mapStateToProps, mapDispatchToProps)(App);

