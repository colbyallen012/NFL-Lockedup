import React, {Component} from 'react';
import { getCrimesData, getPlayerData } from './apiCalls/apiCalls'
import { connect } from 'react-redux';
import { showCrimes, showPlayers } from './Actions';
import CrimesContainer from './Containers/CrimesContainer'
import TeamNavBar from './Containers/TeamNavBar'
import './App.css';

class App extends Component {

  async componentDidMount() {
    getCrimesData()
      .then(crimes => this.props.showCrimes(crimes))

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
        <TeamNavBar />
        {/* <Route exact path='/Den' render={() => <Creatures data={unicornData}/>} /> */}
      </main>
    )
  }
}

const mapStateToProps = (store) => ({
  crimes: store.crimes,
  players: store.players
})

const mapDispatchToProps = dispatch => ({
  showCrimes: (crimes) => dispatch(showCrimes(crimes)),
  showPlayers: (players) => dispatch(showPlayers(players))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);

