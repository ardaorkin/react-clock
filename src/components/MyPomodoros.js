import React, { useEffect } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import API from "../api";
import { setUserPomodoros } from "../redux/pomodoroReducer";
const api = new API();
const MyPomodoros = () => {
  const dispatch = useDispatch();
  const pomodoros = useSelector((state) => state.user.pomodoros);
  useEffect(() => {
    api.getUserPomodoros().then((userPomodoros) => {
      dispatch(setUserPomodoros(userPomodoros));
    });
  }, []);
  return (
    <Table className="mypomodoros-table" striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Date</th>
          <th>Length</th>
        </tr>
      </thead>
      <tbody>
        {Object.values(pomodoros).map((pomodoro, idx) => (
          <tr>
            <td>{idx + 1}</td>
            <td>{new Date(pomodoro.date).toLocaleString("tr-TR")}</td>
            <td>{pomodoro.length}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default MyPomodoros;
