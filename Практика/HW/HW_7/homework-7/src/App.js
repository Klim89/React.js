import "./App.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "./tasksSlice";
import {
  Container,
  List,
  ListItem,
  ListItemText,
  CircularProgress,
  Typography,
  AppBar,
  Toolbar,
} from "@mui/material";

function App() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);
  const taskStatus = useSelector((state) => state.tasks.status);
  const error = useSelector((state) => state.tasks.error);

  useEffect(() => {
    if (taskStatus === "idle") {
      dispatch(fetchTasks());
    }
  }, [taskStatus, dispatch]);

  return (
    <Container>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Task Manager</Typography>
        </Toolbar>
      </AppBar>
      <Typography variant="h4" component="h1" gutterBottom>
        Task List
      </Typography>
      {taskStatus === "loading" && <CircularProgress />}
      {taskStatus === "failed" && (
        <Typography color="error">Error: {error}</Typography>
      )}
      {taskStatus === "succeeded" && (
        <List>
          {tasks.map((task) => (
            <ListItem key={task.id}>
              <ListItemText
                primary={task.title}
                secondary={task.completed ? "Completed" : "Incomplete"}
              />
            </ListItem>
          ))}
        </List>
      )}
    </Container>
  );
}

export default App;
