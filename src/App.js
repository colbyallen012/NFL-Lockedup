import React, {Component} from 'react';
import { getCrimesData, getPlayerData, getPositionData } from './apiCalls/apiCalls'
import { connect } from 'react-redux';
import { showCrimes, showPlayers, showPositions } from './Actions';
import CrimesContainer from './Containers/CrimesContainer'
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
        <main>
          <header>
            <h1>NFL LockedUp</h1>
          </header>
          <CrimesContainer crimes={this.props.crimes} players={this.props.players} positions={this.props.positions}/>
          <TeamNavBar crimes={this.props.crimes} players={this.props.players} />
        </main>
    )
  }
}

const mapStateToProps = (store) => ({
  crimes: store.crimes,
  players: store.players,
  positions: store.positions
})

const mapDispatchToProps = dispatch => ({
  showCrimes: (crimes) => dispatch(showCrimes(crimes)),
  showPlayers: (players) => dispatch(showPlayers(players)),
  showPositions: (positions) => dispatch(showPositions(positions))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);

