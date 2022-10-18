import Options from "./Options";
import Clock from "./Clock";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import PomodoroFooter from "./PomodoroFooter";
import { useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import logoutIcon from "bootstrap-icons/icons/box-arrow-right.svg";

function App() {
  const selectedLayout = useSelector((state) => state.layout.selectedLayout);
  const navigate = useNavigate();

  return (
    <>
      <Container className="fill-area centered">
        <Card
          className="semi-area app-card centered"
          style={{
            background: "rgba(255, 255, 255, 0.05)",
            borderRadius: 16,
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(5px)",
            webkitBackdropFilter: "blur(5px)",
            border: "0px solid rgba(255, 255, 255, 0.3)",
          }}
        >
          <Card.Body className="app-card-body">
            <Row className="centered">
              <Options />
            </Row>
            <Row className="clock-row">
              <Clock />
            </Row>
          </Card.Body>
          {selectedLayout === "pomodoro" ? (
            <Card.Footer className="fill-area">
              <PomodoroFooter />
            </Card.Footer>
          ) : null}
        </Card>
      </Container>
      <Button
        onClick={() => navigate("/logout")}
        variant="danger"
        className="pomodoro-btn logout-btn"
      >
        {<img src={logoutIcon}></img>} Logout
      </Button>
    </>
  );
}

export default App;
