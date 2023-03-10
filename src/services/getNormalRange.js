// GET FIXED AND NORMAL CASE FROM: (http://demo3373948.mockable.io/)
import { API_URL_MOCK_DATA } from "../constants/Constants";

const getNormalRange = async () => {
  try {
    const response = await fetch(
      `${API_URL_MOCK_DATA || "http://demo3373948.mockable.io/"}/normalRanges`
    );
    return await response.json();
  } catch (error) {
    return error;
  }
};

export default getNormalRange;
