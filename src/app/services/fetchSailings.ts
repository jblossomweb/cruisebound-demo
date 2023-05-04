import * as constants from 'app/constants.json'

const fetchSailings = async () => {
  try {
    const response = await fetch(`${constants.API_BASE}/sailings`)
    const { results } = await response.json()

    return { sailings: results, error: null }
  } catch (error) {
    return { sailings: [], error: error as Error }
  }
}

export default fetchSailings
