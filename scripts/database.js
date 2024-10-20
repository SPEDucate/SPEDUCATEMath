import axios from "axios";

const API_REF =
  "https://didstgoc28.execute-api.us-east-2.amazonaws.com/prod/data";

export async function executeQuery(input_query) {
  try {
    const response = await axios.post(API_REF, {
      query: input_query,
    });
    let stringifiedData = JSON.stringify(response.data);
    console.log("RECEIVED DATA FROM DATABASE: " + stringifiedData);
    return response.data;
  } catch (error) {
    console.error("ERROR FETCHING DATABASE: " + error.message);
  }
}
