import React, {Component} from 'react';
import { getCrimesData, getPlayerData, getPositionData } from './apiCalls/apiCalls'
import { connect } from 'react-redux';
import { showCrimes, showPlayers, showPositions, showTeamArrests } from './Actions';
import CrimesContainer from './Containers/CrimesContainer'
import TeamsContainer from './Containers/TeamsContainer'
import TeamNavBar from './Containers/TeamNavBar'
import './App.css';

class App extends Component {

  async componentDidMount() {
    getCrimesData()
      .then(crimes => this.props.showCrimes(crimes))

    getPlayerData()
      .then(players => this.props.showPlayers(players))

    getPositionData()
      .then(positions => this.props.showPositions(positions))
  }

  render () {
    return (
        <main className='main'>
          <header className='header'>
            <h1>NFL LockedUp</h1>
          </header>
          <section className='crimes'>
            <CrimesContainer crimes={this.props.crimes} players={this.props.players} positions={this.props.positions}/>
          </section>
          <section classname='teams'>
            <TeamNavBar crimes={this.props.crimes} players={this.props.players} />
          </section>
          <section>
            <TeamsContainer arrests={this.props.teamArrests}/>
          </section>
        </main>
    )
  }
}

const mapStateToProps = (store) => ({
  crimes: store.crimes,
  players: store.players,
  positions: store.positions,
  teamArrests: store.teamArrests
})

const mapDispatchToProps = dispatch => ({
  showCrimes: (crimes) => dispatch(showCrimes(crimes)),
  showPlayers: (players) => dispatch(showPlayers(players)),
  showPositions: (positions) => dispatch(showPositions(positions)),
  showTeamArrests: (team) => dispatch(showTeamArrests(team))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);

