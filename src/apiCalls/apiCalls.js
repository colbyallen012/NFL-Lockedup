export const getCrimesData = () => {
  return fetch('http://nflarrest.com/api/v1/crime')
    .then(response => response.json())   
    .catch(error => error)
    .catch(error => {
      throw new Error(error.message)
    }) 
}

export const getOneTeamData = (team) => {
  return fetch(`http://nflArrest.com/api/v1/team/arrests/${team}`)
    .then(response => response.json()) 
    .catch(error => error)
    .catch(error => {
      throw new Error(error.message)
    }) 
}

export const getPlayerData = () => {
  return fetch('http://nflarrest.com/api/v1/player')
    .then(response => response.json())  
    .catch(error => error)
    .catch(error => {
      throw new Error(error.message)
    })   
}

export const getPositionData = () => {
  return fetch('http://nflarrest.com/api/v1/position')
    .then(response => response.json()) 
    .catch(error => error)
    .catch(error => {
      throw new Error(error.message)
    })     
}
