import express from "express";
import todosRouter from "./routes/todos";
import { json } from "body-parser";
const app = express();
app.use(json());
app.use("/todos", todosRouter);
app.use(
  // Automatic handle error
  (
    err: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    res.status(500).json({ message: err.message });
  }
);
app.listen(3000, () => {
  console.log("Server is listenning on port 3000...");
});
