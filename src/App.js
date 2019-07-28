import React, {Component} from 'react';
import { getCrimesData, getPlayerData, getPositionData } from './apiCalls/apiCalls'
import { connect } from 'react-redux';
import { showCrimes, showPlayers, showPositions, showTeamArrests } from './Actions';
import {Route} from 'react-router-dom'
import CrimesContainer from './Containers/CrimesContainer/CrimesContainer'
import TeamsContainer from './Containers/TeamsContainer/TeamsContainer'
import TeamNavBar from './Containers/TeamNavBar/TeamNavBar'
import Home from './Components/Home/Home'
import './App.css';

export class App extends Component {

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
          <section className='teams'>
            <TeamNavBar crimes={this.props.crimes} players={this.props.players} />
          </section>
          <section className='arrests'>
            <Route exact path='/' component={Home}/>
            <Route exact path='/Den' render={() =>
              <div>
                <h2 className='team-name'>Broncos</h2>
              <TeamsContainer arrests={this.props.teamArrests}/> 
              </div>
            }/>
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

