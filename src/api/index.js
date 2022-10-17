import { API_URL } from "../config";

class API {
  constructor() {
    this.url = API_URL;
    this.createPomodoro = this.createPomodoro.bind(this);
    this.loginRequest = this.loginRequest.bind(this);
  }
  async createPomodoro(body) {
    try {
      const response = await fetch(`${this.url}/createPomodoro`, {
        method: "POST",
        headers: {
          Authorization: localStorage.getItem("access_token"),
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ date: new Date(), ...body }),
      });
      const result = await response.json();
      return result;
    } catch (error) {
      throw error;
    }
  }

  async loginRequest(body) {
    try {
      const response = await fetch(`${this.url}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      const result = await response.json();
      return result;
    } catch (error) {
      throw error;
    }
  }
}

export default API;
