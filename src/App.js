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
            <Route exact path='/Min' render={() => 
              <div>
                <h2 className='team-name'>Vikings</h2>
                <TeamsContainer arrests={this.props.teamArrests}/> 
              </div>
            }/>
            <Route exact path='/Cin' render={() => 
              <div>
                <h2 className='team-name'>Bengals</h2>
                <TeamsContainer arrests={this.props.teamArrests}/> 
              </div>
            }/>
            <Route exact path='/Jac' render={() => 
              <div>
                <h2 className='team-name'>Jaguars</h2>
                <TeamsContainer arrests={this.props.teamArrests}/> 
              </div>
            }/>
            <Route exact path='/Tb' render={() => 
              <div>
                <h2 className='team-name'>Bucaneers</h2>
                <TeamsContainer arrests={this.props.teamArrests}/> 
              </div>
            }/>
            <Route exact path='/Ten' render={() => 
              <div>
                <h2 className='team-name'>Titans</h2>
                <TeamsContainer arrests={this.props.teamArrests}/> 
              </div>
            }/>
            <Route exact path='/Cle' render={() => 
              <div>
                <h2 className='team-name'>Browns</h2>
                <TeamsContainer arrests={this.props.teamArrests}/> 
              </div>
            }/>
            <Route exact path='/Ind' render={() => 
              <div>
                <h2 className='team-name'>Colts</h2>
                <TeamsContainer arrests={this.props.teamArrests}/> 
              </div>
            }/>
            <Route exact path='/Kc' render={() => 
              <div>
                <h2 className='team-name'>Chiefs</h2>
                <TeamsContainer arrests={this.props.teamArrests}/> 
              </div>
            }/>
            <Route exact path='/Chi' render={() => 
              <div>
                <h2 className='team-name'>Bears</h2>
                <TeamsContainer arrests={this.props.teamArrests}/> 
              </div>
            }/>
            <Route exact path='/Mia' render={() => 
              <div>
                <h2 className='team-name'>Dolphins</h2>
                <TeamsContainer arrests={this.props.teamArrests}/> 
              </div>
            }/>
            <Route exact path='/Sea' render={() => 
              <div>
                <h2 className='team-name'>Seahawks</h2>
                <TeamsContainer arrests={this.props.teamArrests}/> 
              </div>
            }/>
            <Route exact path='/Sf' render={() => 
              <div>
                <h2 className='team-name'>49ers</h2>
                <TeamsContainer arrests={this.props.teamArrests}/> 
              </div>
            }/>
            <Route exact path='/Bal' render={() => 
              <div>
                <h2 className='team-name'>Ravens</h2>
                <TeamsContainer arrests={this.props.teamArrests}/> 
              </div>
            }/>
            <Route exact path='/Lac' render={() => 
              <div>
                <h2 className='team-name'>Chargers</h2>
                <TeamsContainer arrests={this.props.teamArrests}/> 
              </div>
            }/>
            <Route exact path='/No' render={() => 
              <div>
                <h2 className='team-name'>Saints</h2>
                <TeamsContainer arrests={this.props.teamArrests}/> 
              </div>
            }/>
            <Route exact path='/Gb' render={() => 
              <div>
                <h2 className='team-name'>Packers</h2>
                <TeamsContainer arrests={this.props.teamArrests}/> 
              </div>
            }/>
            <Route exact path='/Pit' render={() => 
              <div>
                <h2 className='team-name'>Steelers</h2>
                <TeamsContainer arrests={this.props.teamArrests}/> 
              </div>
            }/>
            <Route exact path='/Nyj' render={() => 
              <div>
                <h2 className='team-name'>Jets</h2>
                <TeamsContainer arrests={this.props.teamArrests}/> 
              </div>
            }/>
            <Route exact path='/Ari' render={() => 
              <div>
                <h2 className='team-name'>Cardinals</h2>
                <TeamsContainer arrests={this.props.teamArrests}/> 
              </div>
            }/>
            <Route exact path='/Oak' render={() => 
              <div>
                <h2 className='team-name'>Raiders</h2>
                <TeamsContainer arrests={this.props.teamArrests}/> 
              </div>
            }/>
            <Route exact path='/Was' render={() => 
              <div>
                <h2 className='team-name'>Redskins</h2>
                <TeamsContainer arrests={this.props.teamArrests}/> 
              </div>
            }/>
            <Route exact path='/Dal' render={() => 
              <div>
                <h2 className='team-name'>Cowboys</h2>
                <TeamsContainer arrests={this.props.teamArrests}/> 
              </div>
            }/>
            <Route exact path='/Car' render={() => 
              <div>
                <h2 className='team-name'>Panthers</h2>
                <TeamsContainer arrests={this.props.teamArrests}/> 
              </div>
            }/>
            <Route exact path='/Buf' render={() => 
              <div>
                <h2 className='team-name'>Bills</h2>
                <TeamsContainer arrests={this.props.teamArrests}/> 
              </div>
            }/>
            <Route exact path='/Ne' render={() => 
              <div>
                <h2 className='team-name'>Patriots</h2>
                <TeamsContainer arrests={this.props.teamArrests}/> 
              </div>
            }/>
            <Route exact path='/Atl' render={() => 
              <div>
               <h2 className='team-name'>Falcons</h2>
               <TeamsContainer arrests={this.props.teamArrests}/> 
              </div>
            }/>
            <Route exact path='/Phi' render={() => 
              <div>
               <h2 className='team-name'>Eagles</h2>
               <TeamsContainer arrests={this.props.teamArrests}/> 
              </div>
            }/>
            <Route exact path='/Nyg' render={() => 
              <div>
                <h2 className='team-name'>Giants</h2>
                <TeamsContainer arrests={this.props.teamArrests}/> 
              </div>
            }/>
            <Route exact path='/La' render={() => 
              <div>
                <h2 className='team-name'>Rams</h2>
                <TeamsContainer arrests={this.props.teamArrests}/> 
             </div>
            }/>
            <Route exact path='/Det' render={() => 
              <div>
                <h2 className='team-name'>Lions</h2>
                <TeamsContainer arrests={this.props.teamArrests}/> 
              </div>
            }/>
             <Route exact path='/Hou' render={() => 
              <div>
                <h2 className='team-name'>Texans</h2>
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

