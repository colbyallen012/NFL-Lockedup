import React, {Component} from 'react';
import { getCrimesData, getPlayerData, getPositionData } from './apiCalls/apiCalls'
import { connect } from 'react-redux';
import { showCrimes, showPlayers, showPositions, showTeamArrests } from './Actions';
import {Route} from 'react-router-dom'
import CrimesContainer from './Containers/CrimesContainer/CrimesContainer'
import TeamsContainer from './Containers/TeamsContainer/TeamsContainer'
import TeamNavBar from './Containers/TeamNavBar/TeamNavBar'
import Home from './Components/Home/Home'
import league from './Images/league.png'
import broncos from './Images/broncos.png'
import vikings from './Images/vikings.png'
import bengals from './Images/bengals.png'
import jaguars from './Images/jaguars.png'
import buccaneers from './Images/buccaneers.png'
import titans from './Images/titans.png'
import browns from './Images/browns.png'
import colts from './Images/colts.png'
import chiefs from './Images/chiefs.png'
import bears from './Images/bears.png'
import dolphins from './Images/dolphins.png'
import seahawks from './Images/seahawks.png'
import niners from './Images/49ers.png'
import ravens from './Images/ravens.png'
import chargers from './Images/chargers.png'
import saints from './Images/saints.png'
import packers from './Images/packers.png'
import steelers from './Images/steelers.png'
import jets from './Images/jets.png'
import cardinals from './Images/cardinals.png'
import raiders from './Images/raiders.png'
import redskins from './Images/redskins.png'
import cowboys from './Images/cowboys.png'
import panthers from './Images/panthers.png'
import bills from './Images/bills.png'
import patriots from './Images/patriots.png'
import falcons from './Images/falcons.png'
import eagles from './Images/eagles.png'
import giants from './Images/giants.png'
import rams from './Images/rams.png'
import lions from './Images/lions.png'
import texans from './Images/texans.png'
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
            <img className='logo' alt='NFL logo' src={league}/>  
            <h1 className='title'>NFL LockedUp</h1>
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
                <section className='team-header'>
                  <h2 className='team-name'>Denver Broncos</h2>
                  <img className='team-logo' alt='Broncos logo' src={broncos}/>
                </section>
                <TeamsContainer arrests={this.props.teamArrests}/> 
              </div>
            }/>
            <Route exact path='/Min' render={() => 
              <div>
                <section className='team-header'>
                  <h2 className='team-name'>Minnesota Vikings</h2>
                  <img className='team-logo' alt='Vikings logo' src={vikings}/>                  
                </section>
                <TeamsContainer arrests={this.props.teamArrests}/> 
              </div>
            }/>
            <Route exact path='/Cin' render={() => 
              <div>
                <section className='team-header'>
                  <h2 className='team-name'>Cincinnati Bengals</h2>
                  <img className='team-logo' alt='Bengals logo' src={bengals}/>                  
                </section>
                <TeamsContainer arrests={this.props.teamArrests}/> 
              </div>
            }/>
            <Route exact path='/Jac' render={() => 
              <div>
                <section className='team-header'>
                  <h2 className='team-name'>Jacksonville Jaguars</h2>
                  <img className='team-logo' alt='Jaguars logo' src={jaguars}/> 
                </section>
                <TeamsContainer arrests={this.props.teamArrests}/> 
              </div>
            }/>
            <Route exact path='/Tb' render={() => 
              <div>
                <section className='team-header'>
                  <h2 className='team-name'>Tampa Bay Buccaneers</h2>
                  <img className='team-logo' alt='Buccaneers logo' src={buccaneers}/> 
                </section>
                <TeamsContainer arrests={this.props.teamArrests}/> 
              </div>
            }/>
            <Route exact path='/Ten' render={() => 
              <div>
                <section className='team-header'>
                  <h2 className='team-name'>Tennessee Titans</h2>
                  <img className='team-logo' alt='Titans logo' src={titans}/> 
                </section>
                <TeamsContainer arrests={this.props.teamArrests}/> 
              </div>
            }/>
            <Route exact path='/Cle' render={() => 
              <div>
                <section className='team-header'>
                  <h2 className='team-name'>Cleveland Browns</h2>
                  <img className='team-logo' alt='Browns logo' src={browns}/> 
                </section>
                <TeamsContainer arrests={this.props.teamArrests}/> 
              </div>
            }/>
            <Route exact path='/Ind' render={() => 
              <div>
                <section className='team-header'>
                  <h2 className='team-name'>Indianapolis Colts</h2>
                  <img className='team-logo' alt='Colts logo' src={colts}/> 
                </section>
                <TeamsContainer arrests={this.props.teamArrests}/> 
              </div>
            }/>
            <Route exact path='/Kc' render={() => 
              <div>
                <section className='team-header'>
                  <h2 className='team-name'>Kansas City Chiefs</h2>
                  <img className='team-logo' alt='Chiefs logo' src={chiefs}/> 
                </section>                
                <TeamsContainer arrests={this.props.teamArrests}/> 
              </div>
            }/>
            <Route exact path='/Chi' render={() => 
              <div>
                <section className='team-header'>
                  <h2 className='team-name'>Chicago Bears</h2>
                  <img className='team-logo' alt='Bears logo' src={bears}/> 
                </section>                    
                <TeamsContainer arrests={this.props.teamArrests}/> 
              </div>
            }/>
            <Route exact path='/Mia' render={() => 
              <div>
                <section className='team-header'>
                  <h2 className='team-name'>Miami Dolphins</h2>
                  <img className='team-logo' alt='Dolphins logo' src={dolphins}/> 
                </section>                  
                <TeamsContainer arrests={this.props.teamArrests}/> 
              </div>
            }/>
            <Route exact path='/Sea' render={() => 
              <div>
                <section className='team-header'>
                  <h2 className='team-name'>Seattle Seahawks</h2>
                  <img className='team-logo' alt='Seahawks logo' src={seahawks}/> 
                </section>                    
                <TeamsContainer arrests={this.props.teamArrests}/> 
              </div>
            }/>
            <Route exact path='/Sf' render={() => 
              <div>
                <section className='team-header'>
                  <h2 className='team-name'>San Francisco 49ers</h2>
                  <img className='team-logo' alt='49ers logo' src={niners}/> 
                </section>   
                <TeamsContainer arrests={this.props.teamArrests}/> 
              </div>
            }/>
            <Route exact path='/Bal' render={() => 
              <div>
                <section className='team-header'>
                  <h2 className='team-name'>Baltimore Ravens</h2>
                  <img className='team-logo' alt='Ravens logo' src={ravens}/> 
                </section> 
                <TeamsContainer arrests={this.props.teamArrests}/> 
              </div>
            }/>
            <Route exact path='/Lac' render={() => 
              <div>
                <section className='team-header'>
                  <h2 className='team-name'>Los Angeles Chargers</h2>
                  <img className='team-logo' alt='Chargers logo' src={chargers}/> 
                </section>                 
                <TeamsContainer arrests={this.props.teamArrests}/> 
              </div>
            }/>
            <Route exact path='/No' render={() => 
              <div>
                <section className='team-header'>
                  <h2 className='team-name'>New Orleans Saints</h2>
                  <img className='team-logo' alt='Saints logo' src={saints}/> 
                </section>  
                <TeamsContainer arrests={this.props.teamArrests}/> 
              </div>
            }/>
            <Route exact path='/Gb' render={() => 
              <div>
                <section className='team-header'>
                  <h2 className='team-name'>Green Bay Packers</h2>
                  <img className='team-logo' alt='Packers logo' src={packers}/> 
                </section>
                <TeamsContainer arrests={this.props.teamArrests}/> 
              </div>
            }/>
            <Route exact path='/Pit' render={() => 
              <div>
                <section className='team-header'>
                  <h2 className='team-name'>Pittsburgh Steelers</h2>
                  <img className='team-logo' alt='Steelers logo' src={steelers}/> 
                </section>
                <TeamsContainer arrests={this.props.teamArrests}/> 
              </div>
            }/>
            <Route exact path='/Nyj' render={() => 
              <div>
                <section className='team-header'>
                  <h2 className='team-name'>New York Jets</h2>
                  <img className='team-logo' alt='Jets logo' src={jets}/> 
                </section>
                <TeamsContainer arrests={this.props.teamArrests}/> 
              </div>
            }/>
            <Route exact path='/Ari' render={() => 
              <div>
                <section className='team-header'>
                  <h2 className='team-name'>Arizona Cardinals</h2>
                  <img className='team-logo' alt='Cardinals logo' src={cardinals}/> 
                </section>
                <TeamsContainer arrests={this.props.teamArrests}/> 
              </div>
            }/>
            <Route exact path='/Oak' render={() => 
              <div>
                <section className='team-header'>
                  <h2 className='team-name'>Oakland Raiders</h2>
                  <img className='team-logo' alt='Raiders logo' src={raiders}/> 
                </section>
                <TeamsContainer arrests={this.props.teamArrests}/> 
              </div>
            }/>
            <Route exact path='/Was' render={() => 
              <div>
                <section className='team-header'>
                  <h2 className='team-name'>Washington Redskins</h2>
                  <img className='team-logo' alt='Redskins logo' src={redskins}/> 
                </section>
                <TeamsContainer arrests={this.props.teamArrests}/> 
              </div>
            }/>
            <Route exact path='/Dal' render={() => 
              <div>
                <section className='team-header'>
                  <h2 className='team-name'>Dallas Cowboys</h2>
                  <img className='team-logo' alt='Cowboys logo' src={cowboys}/> 
                </section>
                <TeamsContainer arrests={this.props.teamArrests}/> 
              </div>
            }/>
            <Route exact path='/Car' render={() => 
              <div>
                <section className='team-header'>
                  <h2 className='team-name'>Carolina Panthers</h2>
                  <img className='team-logo' alt='Panthers logo' src={panthers}/> 
                </section>
                <TeamsContainer arrests={this.props.teamArrests}/> 
              </div>
            }/>
            <Route exact path='/Buf' render={() => 
              <div>
                <section className='team-header'>
                  <h2 className='team-name'>Buffalo Bills</h2>
                  <img className='team-logo' alt='Bills logo' src={bills}/> 
                </section>
                <TeamsContainer arrests={this.props.teamArrests}/> 
              </div>
            }/>
            <Route exact path='/Ne' render={() => 
              <div>
                <section className='team-header'>
                  <h2 className='team-name'>New England Patriots</h2>
                  <img className='team-logo' alt='Patriots logo' src={patriots}/> 
                </section>
                <TeamsContainer arrests={this.props.teamArrests}/> 
              </div>
            }/>
            <Route exact path='/Atl' render={() => 
              <div>
                <section className='team-header'>
                  <h2 className='team-name'>Atlanta Flacons</h2>
                  <img className='team-logo' alt='Falcons logo' src={falcons}/> 
                </section>
               <TeamsContainer arrests={this.props.teamArrests}/> 
              </div>
            }/>
            <Route exact path='/Phi' render={() => 
              <div>
                <section className='team-header'>
                  <h2 className='team-name'>Philadelphia Eagles</h2>
                  <img className='team-logo' alt='Eagles logo' src={eagles}/> 
                </section>
               <TeamsContainer arrests={this.props.teamArrests}/> 
              </div>
            }/>
            <Route exact path='/Nyg' render={() => 
              <div>
                <section className='team-header'>
                  <h2 className='team-name'>New York Giants</h2>
                  <img className='team-logo' alt='Giants logo' src={giants}/> 
                </section>
                <TeamsContainer arrests={this.props.teamArrests}/> 
              </div>
            }/>
            <Route exact path='/La' render={() => 
              <div>
                <section className='team-header'>
                  <h2 className='team-name'>Los Angeles Rams</h2>
                  <img className='team-logo' alt='Rams logo' src={rams}/> 
                </section>
                <TeamsContainer arrests={this.props.teamArrests}/> 
             </div>
            }/>
            <Route exact path='/Det' render={() => 
              <div>
                <section className='team-header'>
                  <h2 className='team-name'>Detroit Lions</h2>
                  <img className='team-logo' alt='Lions logo' src={lions}/> 
                </section>
                <TeamsContainer arrests={this.props.teamArrests}/> 
              </div>
            }/>
             <Route exact path='/Hou' render={() => 
              <div>
                <section className='team-header'>
                  <h2 className='team-name'>Houston Texans</h2>
                  <img className='team-logo' alt='Texans logo' src={texans}/> 
                </section>
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

