// GET FIXED AND NORMAL CASE FROM: (http://demo3373948.mockable.io/)
const { API_URL_MOCK_DATA } = process.env

export const getNormalRange = async () => {
  try {
    const response = await fetch(`${API_URL_MOCK_DATA || 'http://demo3373948.mockable.io/'}/normalRanges`)
    return await response.json()
  } catch (error) {
    return error
  }
}

export const getFixedRange = async () => {
  try {
    const response = await fetch(`${API_URL_MOCK_DATA || 'http://demo3373948.mockable.io/'}/fixedRanges`)
    return await response.json()
  } catch (error) {
    return error
  }
}