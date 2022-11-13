import { createRoot } from "react-dom/client";
import { Alert } from "react-bootstrap";
import { API_URL } from "../config";

class API {
  constructor() {
    this.url = API_URL;
    this.createPomodoro = this.createPomodoro.bind(this);
    this.loginRequest = this.loginRequest.bind(this);
    this.alertContainer = createRoot(document.getElementById("alert-root"));
    this.getMyTeam = this.getMyTeam.bind(this);
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
      if (response.status === 200) {
        const result = await response.json();
        return result;
      } else {
        const errorMsg = await response.text();
        throw errorMsg;
      }
    } catch (error) {
      this.alertContainer.render(<Alert variant="danger">{error}</Alert>);
      setTimeout(() => this.alertContainer.unmount(), 5000);
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
      if (response.status === 200) {
        const result = await response.json();
        return result;
      } else {
        const errorMsg = await response.text();
        throw errorMsg;
      }
    } catch (error) {
      this.alertContainer.render(<Alert variant="danger">{error}</Alert>);
      setTimeout(() => this.alertContainer.unmount(), 5000);
    }
  }

  async signupRequest(body) {
    try {
      const response = await fetch(`${this.url}/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      if (response.status === 200) {
        const result = await response.json();
        return result;
      } else {
        const errorMsg = await response.text();
        throw errorMsg;
      }
    } catch (error) {
      console.log(error);
      this.alertContainer.render(<Alert variant="danger">{`${error}`}</Alert>);
      setTimeout(() => this.alertContainer.unmount(), 5000);
    }
  }

  async getUserPomodoros() {
    try {
      const response = await fetch(`${this.url}/user/pomodoros`, {
        headers: {
          Authorization: localStorage.getItem("access_token"),
          "Content-Type": "application/json",
        },
      });
      if (response.status === 200) {
        const result = await response.json();
        return result;
      } else {
        const errorMsg = await response.text();
        throw errorMsg;
      }
    } catch (error) {
      this.alertContainer.render(<Alert variant="danger">{error}</Alert>);
      setTimeout(() => this.alertContainer.unmount(), 5000);
    }
  }

  async getMyTeam() {
    try {
      const response = await fetch(`${this.url}/myTeam`, {
        headers: {
          Authorization: localStorage.getItem("access_token"),
          "Content-Type": "application/json",
        },
      });
      if (response.status === 200) {
        const result = await response.json();
        return result;
      } else {
        const errorMsg = await response.text();
        throw errorMsg;
      }
    } catch (error) {
      this.alertContainer.render(<Alert variant="danger">{error}</Alert>);
      setTimeout(() => this.alertContainer.unmount(), 5000);
    }
  }
}

export default API;
