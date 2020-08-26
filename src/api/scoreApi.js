const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
const gameId = 'XFEg8of4rdnqIVzbT4p3';

export const postScore = async (name, score) => {
  const response = await fetch(`${baseUrl}/games/${gameId}/scores`, {
    method: 'POST',
      mode: 'cors',
      headers: {
      Accept: 'Application/json',
               'Content-Type': 'application/json',
      },
      body: JSON.stringify({user: name, score: score})
  })
  if (response.ok) {
    return response.json()
  } else {
    throw new Error("Something went wrong!")
  }
}

export const getScores = async () => {
  const response = await fetch(`${baseUrl}/games/${gameId}/scores`)
  if (response.ok) {
    return response.json()
  } else {
    throw new Error("Something went wrong!")
  }
}