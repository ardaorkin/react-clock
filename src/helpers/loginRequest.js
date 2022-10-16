import { API_URL } from "../config";

export default async function loginRequest() {
  try {
    const response = await fetch(`${API_URL}login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(arguments[0]),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}
