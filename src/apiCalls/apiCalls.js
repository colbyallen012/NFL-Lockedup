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