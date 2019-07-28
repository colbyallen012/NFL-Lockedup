import React, {Component} from 'react';
import { getOneTeamData } from '../../apiCalls/apiCalls'
import { connect } from 'react-redux';
import { showTeamArrests, showCrimes, showPlayers, emptyState } from '../../Actions/index';
import {Route, NavLink} from 'react-router-dom'
import './TeamNavBar.css'
import TeamsContainer from '../TeamsContainer/TeamsContainer'

export class TeamNavBar extends Component {

  singleTeamArrests = (team) => {
    getOneTeamData(team)
      .then(team => this.props.showTeamArrests(team))
  }

  emptyState = () => {
    this.props.emptyState()
  }

  render () {
    return (
      <div>
      <div className='nav-bar-container'>
        <NavLink to='/' className='nav' onClick={() => this.emptyState()}>Home</NavLink>
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
      <div>
        {/* <Route exact path='/' component={Home}/> */}
        {/* <Route exact path='/Den' render={() =>
          <div>
            <h2>Broncos</h2>
            <TeamsContainer arrests={this.props.teamArrests}/> 
          </div>
        }/> */}
        <Route exact path='/Min' render={() => 
          <div>
            <h2>Vikings</h2>
            <TeamsContainer arrests={this.props.teamArrests}/> 
          </div>
        }/>
        <Route exact path='/Cin' render={() => 
          <div>
            <h2>Bengals</h2>
            <TeamsContainer arrests={this.props.teamArrests}/> 
          </div>
        }/>
        <Route exact path='/Jac' render={() => 
          <div>
            <h2>Jaguars</h2>
            <TeamsContainer arrests={this.props.teamArrests}/> 
          </div>
        }/>
        <Route exact path='/Tb' render={() => 
          <div>
            <h2>Bucaneers</h2>
            <TeamsContainer arrests={this.props.teamArrests}/> 
          </div>
        }/>
        <Route exact path='/Ten' render={() => 
          <div>
            <h2>Titans</h2>
            <TeamsContainer arrests={this.props.teamArrests}/> 
          </div>
        }/>
        <Route exact path='/Cle' render={() => 
          <div>
            <h2>Browns</h2>
            <TeamsContainer arrests={this.props.teamArrests}/> 
          </div>
        }/>
        <Route exact path='/Ind' render={() => 
          <div>
            <h2>Colts</h2>
            <TeamsContainer arrests={this.props.teamArrests}/> 
          </div>
        }/>
        <Route exact path='/Kc' render={() => 
          <div>
            <h2>Chiefs</h2>
            <TeamsContainer arrests={this.props.teamArrests}/> 
          </div>
        }/>
        <Route exact path='/Chi' render={() => 
          <div>
            <h2>Bears</h2>
            <TeamsContainer arrests={this.props.teamArrests}/> 
          </div>
        }/>
        <Route exact path='/Mia' render={() => 
          <div>
            <h2>Dolphins</h2>
            <TeamsContainer arrests={this.props.teamArrests}/> 
          </div>
        }/>
        <Route exact path='/Sea' render={() => 
          <div>
            <h2>Seahawks</h2>
            <TeamsContainer arrests={this.props.teamArrests}/> 
          </div>
        }/>
        <Route exact path='/Sf' render={() => 
          <div>
            <h2>49ers</h2>
            <TeamsContainer arrests={this.props.teamArrests}/> 
          </div>
        }/>
        <Route exact path='/Bal' render={() => 
          <div>
            <h2>Ravens</h2>
            <TeamsContainer arrests={this.props.teamArrests}/> 
          </div>
        }/>
        <Route exact path='/Lac' render={() => 
          <div>
            <h2>Chargers</h2>
            <TeamsContainer arrests={this.props.teamArrests}/> 
          </div>
        }/>
        <Route exact path='/No' render={() => 
          <div>
            <h2>Saints</h2>
            <TeamsContainer arrests={this.props.teamArrests}/> 
          </div>
        }/>
        <Route exact path='/Gb' render={() => 
          <div>
            <h2>Packers</h2>
            <TeamsContainer arrests={this.props.teamArrests}/> 
          </div>
        }/>
        <Route exact path='/Pit' render={() => 
          <div>
            <h2>Steelers</h2>
            <TeamsContainer arrests={this.props.teamArrests}/> 
          </div>
        }/>
        <Route exact path='/Nyj' render={() => 
          <div>
            <h2>Jets</h2>
            <TeamsContainer arrests={this.props.teamArrests}/> 
          </div>
        }/>
        <Route exact path='/Ari' render={() => 
          <div>
            <h2>Cardinals</h2>
            <TeamsContainer arrests={this.props.teamArrests}/> 
          </div>
        }/>
        <Route exact path='/Oak' render={() => 
          <div>
            <h2>Raiders</h2>
            <TeamsContainer arrests={this.props.teamArrests}/> 
          </div>
        }/>
        <Route exact path='/Was' render={() => 
          <div>
            <h2>Redskins</h2>
            <TeamsContainer arrests={this.props.teamArrests}/> 
          </div>
        }/>
        <Route exact path='/Dal' render={() => 
          <div>
            <h2>Cowboys</h2>
            <TeamsContainer arrests={this.props.teamArrests}/> 
          </div>
        }/>
        <Route exact path='/Car' render={() => 
          <div>
            <h2>Panthers</h2>
            <TeamsContainer arrests={this.props.teamArrests}/> 
          </div>
        }/>
        <Route exact path='/Buf' render={() => 
          <div>
            <h2>Bills</h2>
            <TeamsContainer arrests={this.props.teamArrests}/> 
          </div>
        }/>
        <Route exact path='/Ne' render={() => 
          <div>
            <h2>Patriots</h2>
            <TeamsContainer arrests={this.props.teamArrests}/> 
          </div>
        }/>
        <Route exact path='/Atl' render={() => 
          <div>
           <h2>Falcons</h2>
           <TeamsContainer arrests={this.props.teamArrests}/> 
          </div>
        }/>
        <Route exact path='/Phi' render={() => 
          <div>
           <h2>Eagles</h2>
           <TeamsContainer arrests={this.props.teamArrests}/> 
          </div>
        }/>
        <Route exact path='/Nyg' render={() => 
          <div>
            <h2>Giants</h2>
            <TeamsContainer arrests={this.props.teamArrests}/> 
          </div>
        }/>
        <Route exact path='/La' render={() => 
          <div>
            <h2>Rams</h2>
            <TeamsContainer arrests={this.props.teamArrests}/> 
         </div>
        }/>
        <Route exact path='/Det' render={() => 
          <div>
            <h2>Lions</h2>
            <TeamsContainer arrests={this.props.teamArrests}/> 
          </div>
        }/>
         <Route exact path='/Hou' render={() => 
          <div>
            <h2>Texans</h2>
            <TeamsContainer arrests={this.props.teamArrests}/> 
          </div>
        }/> 
      </div>           
      </div>
    )
  }
}

export const mapStateToProps = (store) => ({
  crimes: store.crimes,
  players: store.players,
  teamArrests: store.teamArrests
})

export const mapDispatchToProps = dispatch => ({
  showCrimes: (crimes) => dispatch(showCrimes(crimes)),
  showPlayers: (players) => dispatch(showPlayers(players)),
  showTeamArrests: (team) => dispatch(showTeamArrests(team)),
  emptyState: () => dispatch(emptyState())
})

export default connect(mapStateToProps, mapDispatchToProps)(TeamNavBar);