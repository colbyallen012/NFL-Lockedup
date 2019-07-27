import React, {Component} from 'react';
import { getOneTeamData } from '../apiCalls/apiCalls'
import { connect } from 'react-redux';
import { showTeamArrests, showCrimes, showPlayers } from '../Actions/index';
import {Route, NavLink} from 'react-router-dom'
import './TeamNavBar.css'
import TeamsContainer from '../Containers/TeamsContainer'
import CrimesContainer from '../Containers/CrimesContainer'

class TeamNavBar extends Component {

  singleTeamArrests = (team) => {
    getOneTeamData(team)
      .then(team => this.props.showTeamArrests(team))
  }

  render () {
    return (
      <div>
        <CrimesContainer crimes={this.props.crimes} players={this.props.players}/>
      <div className='nav-bar-container'>
        <NavLink to='/den' className='nav' onClick={() => this.singleTeamArrests('DEN')}>Denver Broncos</NavLink>
        <NavLink to='/min' className='nav' onClick={() => this.singleTeamArrests('MIN')}>Minnesota Vikings</NavLink>
        <NavLink to='/cin' className='nav' onClick={() => this.singleTeamArrests('CIN')}>Cincinati Bengals</NavLink>   
        <NavLink to='/jac' className='nav' onClick={() => this.singleTeamArrests('JAC')}>Jacksonville Jaguars</NavLink>   
        <NavLink to='/tb' className='nav' onClick={() => this.singleTeamArrests('TB')}>Tampa Bay Buccaneers</NavLink>   
        <NavLink to='/ten' className='nav' onClick={() => this.singleTeamArrests('TEN')}>Tennessee Titans</NavLink>   
        <NavLink to='/cle' className='nav' onClick={() => this.singleTeamArrests('CLE')}>Cleveland Browns</NavLink>   
        <NavLink to='/ind' className='nav' onClick={() => this.singleTeamArrests('IND')}>Indianapolis Colts</NavLink>   
        <NavLink to='/kc' className='nav' onClick={() => this.singleTeamArrests('KC')}>Kansas City Chiefs</NavLink>   
        <NavLink to='/chi' className='nav' onClick={() => this.singleTeamArrests('CHI')}>Chicago Bears</NavLink>   
        <NavLink to='/mia' className='nav' onClick={() => this.singleTeamArrests('MIA')}>Miami Dolphins</NavLink>   
        <NavLink to='/sea' className='nav' onClick={() => this.singleTeamArrests('SEA')}>Seattle Seahawks</NavLink>   
        <NavLink to='/sf' className='nav' onClick={() => this.singleTeamArrests('SF')}>San Francisco 49ers</NavLink>   
        <NavLink to='/bal' className='nav' onClick={() => this.singleTeamArrests('BAL')}>Baltimore Ravens</NavLink>   
        <NavLink to='/lac' className='nav' onClick={() => this.singleTeamArrests('LAC')}>Los Angeles Chargers</NavLink>   
        <NavLink to='/no' className='nav' onClick={() => this.singleTeamArrests('NO')}>New Orleans Saints</NavLink>   
        <NavLink to='/gb' className='nav' onClick={() => this.singleTeamArrests('GB')}>Green Bay Packers</NavLink>   
        <NavLink to='/pit' className='nav' onClick={() => this.singleTeamArrests('PIT')}>Pittsburgh Steelers</NavLink>   
        <NavLink to='/nyj' className='nav' onClick={() => this.singleTeamArrests('NYJ')}>New York Jets</NavLink>   
        <NavLink to='/ari' className='nav' onClick={() => this.singleTeamArrests('ARI')}>Arizona Cardinals</NavLink>   
        <NavLink to='/oak' className='nav' onClick={() => this.singleTeamArrests('OAK')}>Oakland Raiders</NavLink>   
        <NavLink to='/was' className='nav' onClick={() => this.singleTeamArrests('WAS')}>Washington Redskins</NavLink>   
        <NavLink to='/dal' className='nav' onClick={() => this.singleTeamArrests('DAL')}>Dallas Cowboys</NavLink>   
        <NavLink to='/car' className='nav' onClick={() => this.singleTeamArrests('CAR')}>Carolina Panthers</NavLink>   
        <NavLink to='/buf' className='nav' onClick={() => this.singleTeamArrests('BUF')}>Buffalo Bills</NavLink>   
        <NavLink to='/ne' className='nav' onClick={() => this.singleTeamArrests('NE')}>New England Patriots</NavLink>   
        <NavLink to='/atl' className='nav' onClick={() => this.singleTeamArrests('ATL')}>Atlanta Falcons</NavLink>   
        <NavLink to='/phi' className='nav' onClick={() => this.singleTeamArrests('PHI')}>Pjiladelphia Eagles</NavLink>   
        <NavLink to='/nyg' className='nav' onClick={() => this.singleTeamArrests('NYG')}>New York Giants</NavLink>   
        <NavLink to='/la' className='nav' onClick={() => this.singleTeamArrests('LA')}>Los Angeles Rams</NavLink>   
        <NavLink to='/det' className='nav' onClick={() => this.singleTeamArrests('DET')}>Detroit Lions</NavLink> 
        <NavLink to='/hou' className='nav' onClick={() => this.singleTeamArrests('HOU')}>Houston Texans</NavLink>
        </div>
        <Route exact path='/Den' render={() => 
            <TeamsContainer arrests={this.props.teamArrests}/> 
        }/>
        <Route exact path='/Min' render={() => 
            <TeamsContainer arrests={this.props.teamArrests}/> 
        }/>
        <Route exact path='/Cin' render={() => 
            <TeamsContainer arrests={this.props.teamArrests}/> 
        }/>
        <Route exact path='/Jac' render={() => 
            <TeamsContainer arrests={this.props.teamArrests}/> 
        }/>
        <Route exact path='/Tb' render={() => 
            <TeamsContainer arrests={this.props.teamArrests}/> 
        }/>
        <Route exact path='/Ten' render={() => 
            <TeamsContainer arrests={this.props.teamArrests}/> 
        }/>
        <Route exact path='/Cle' render={() => 
            <TeamsContainer arrests={this.props.teamArrests}/> 
        }/>
        <Route exact path='/Ind' render={() => 
            <TeamsContainer arrests={this.props.teamArrests}/> 
        }/>
        <Route exact path='/Kc' render={() => 
            <TeamsContainer arrests={this.props.teamArrests}/> 
        }/>
        <Route exact path='/Chi' render={() => 
            <TeamsContainer arrests={this.props.teamArrests}/> 
        }/>
        <Route exact path='/Mia' render={() => 
            <TeamsContainer arrests={this.props.teamArrests}/> 
        }/>
        <Route exact path='/Sea' render={() => 
            <TeamsContainer arrests={this.props.teamArrests}/> 
        }/>
        <Route exact path='/Sf' render={() => 
            <TeamsContainer arrests={this.props.teamArrests}/> 
        }/>
        <Route exact path='/Bal' render={() => 
            <TeamsContainer arrests={this.props.teamArrests}/> 
        }/>
        <Route exact path='/Lac' render={() => 
            <TeamsContainer arrests={this.props.teamArrests}/> 
        }/>
        <Route exact path='/No' render={() => 
            <TeamsContainer arrests={this.props.teamArrests}/> 
        }/>
        <Route exact path='/Gb' render={() => 
            <TeamsContainer arrests={this.props.teamArrests}/> 
        }/>
        <Route exact path='/Pit' render={() => 
            <TeamsContainer arrests={this.props.teamArrests}/> 
        }/>
        <Route exact path='/Nyj' render={() => 
            <TeamsContainer arrests={this.props.teamArrests}/> 
        }/>
        <Route exact path='/Ari' render={() => 
            <TeamsContainer arrests={this.props.teamArrests}/> 
        }/>
        <Route exact path='/Oak' render={() => 
            <TeamsContainer arrests={this.props.teamArrests}/> 
        }/>
        <Route exact path='/Was' render={() => 
            <TeamsContainer arrests={this.props.teamArrests}/> 
        }/>
        <Route exact path='/Dal' render={() => 
            <TeamsContainer arrests={this.props.teamArrests}/> 
        }/>
        <Route exact path='/Car' render={() => 
            <TeamsContainer arrests={this.props.teamArrests}/> 
        }/>
        <Route exact path='/Buf' render={() => 
            <TeamsContainer arrests={this.props.teamArrests}/> 
        }/>
        <Route exact path='/Ne' render={() => 
            <TeamsContainer arrests={this.props.teamArrests}/> 
        }/>
        <Route exact path='/Atl' render={() => 
            <TeamsContainer arrests={this.props.teamArrests}/> 
        }/>
        <Route exact path='/Phi' render={() => 
            <TeamsContainer arrests={this.props.teamArrests}/> 
        }/>
        <Route exact path='/Nyg' render={() => 
            <TeamsContainer arrests={this.props.teamArrests}/> 
        }/>
        <Route exact path='/La' render={() => 
            <TeamsContainer arrests={this.props.teamArrests}/> 
        }/>
        <Route exact path='/Det' render={() => 
            <TeamsContainer arrests={this.props.teamArrests}/> 
        }/>
         <Route exact path='/Hou' render={() => 
            <TeamsContainer arrests={this.props.teamArrests}/> 
        }/>            
      </div>
    )
  }
}

const mapStateToProps = (store) => ({
  crimes: store.crimes,
  players: store.players,
  teamArrests: store.teamArrests
})

const mapDispatchToProps = dispatch => ({
  showCrimes: (crimes) => dispatch(showCrimes(crimes)),
  showPlayers: (players) => dispatch(showPlayers(players)),
  showTeamArrests: (team) => dispatch(showTeamArrests(team))
})

export default connect(mapStateToProps, mapDispatchToProps)(TeamNavBar);