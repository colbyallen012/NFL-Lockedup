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