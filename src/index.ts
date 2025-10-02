import express, { Request, Response, NextFunction } from "express";
import { employeeRouter } from "./routes/employee.routes";

const app = express();
const port = 3000;

app.use(express.json());

// Health check endpoint
app.get("/health", (_req: Request, res: Response) => {
  res.status(200).send("Server is healthy");
});

// Mount employee routes at /api/v1/employees
app.use("/api/v1/employees", employeeRouter());

// Root endpoint
app.get("/", (_req: Request, res: Response) => {
  res.send("Server is working!");
});

// 404 handler
app.use((req: Request, res: Response) => {
  res.status(404).json({ message: "Not Found" });
});

// Global error handler
app.use((err: unknown, _req: Request, res: Response, _next: NextFunction) => {
  console.error(err);
  res.status(500).json({ message: "Internal Server Error" });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

export default app;

