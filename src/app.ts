// src/app.ts
import express, { Request, Response, NextFunction } from "express";
import morgan from "morgan";
import { employeeRouter } from "./routes/employee.routes";
import { branchRouter } from "./routes/branch.routes";

const app = express();

app.use(express.json());
app.use(morgan("dev"));

// Mount on root, since tests expect `/employees`
app.use("/employees", employeeRouter());

// Health route for sanity check
app.get("/health", (_req, res) => res.status(200).send("Server is healthy"));


// 404 Handler
app.use((_req: Request, res: Response) => {
  res.status(404).json({ message: "Not Found" });
});

// Error Handler
app.use((err: unknown, _req: Request, res: Response, _next: NextFunction) => {
  console.error(err);
  res.status(500).json({ message: "Internal Server Error" });
});

export default app;









