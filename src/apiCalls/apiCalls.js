export const getCrimesData = () => {
  return fetch('http://nflarrest.com/api/v1/crime')
    .then(response => {
      if(!response.ok){
        throw Error('Error getting crimes.')
      } else {
        return response.json()
      }
    })    
}

export const getTeamData = () => {
  return fetch('http://nflarrest.com/api/v1/team')
    .then(response => {
      if(!response.ok){
        throw Error('Error getting team data.')
      } else {
        return response.json()
      }
    })    
}

export const getOneTeamData = (team) => {
  return fetch(`http://nflArrest.com/api/v1/team/arrests/${team}`)
    .then(response => {
      if(!response.ok){
        throw Error('Error getting team data.')
      } else {
        console.log(response.json())
        // return response.json()
      }
  }) 
}

export const getPlayerData = () => {
  return fetch('http://nflarrest.com/api/v1/player')
    .then(response => {
      if(!response.ok){
        throw Error('Error getting player data.')
      } else {
        return response.json()
      }
    })    
}