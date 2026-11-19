import express from "express";
import morgan from "morgan";
import loanRoutes from "./api/v1/routes/loan.routes";

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

// Loan application routes
app.use("/api/v1/loans", loanRoutes);

export default app;