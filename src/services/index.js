const {API_URL_MOCK_DATA} = process.env

export const getNormalRange = async () => {
  try {
    const response = await fetch(`${API_URL_MOCK_DATA}/normalRanges`)
    return await response.json()
  } catch (error) {
    return error
  }
}

export const getFixedRange = async () => {
  try {
    const response = await fetch(`${API_URL_MOCK_DATA}/fixedRanges`)
    return await response.json()
  } catch (error) {
    return error
  }
}