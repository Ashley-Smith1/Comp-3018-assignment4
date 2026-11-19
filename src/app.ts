import express from "express";
import morgan from "morgan";

const app = express();

// Middleware
app.use(express.json());
app.use(morgan("dev"));

// Public health check
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    message: "High-Risk Loan Monitoring API is running"
  });
});

export default app;