import { Request, Response } from "express";
import { loans } from "../models/loan.data";

// Get all loan applications
export const getAllLoans = (req: Request, res: Response) => {
    res.status(200).json(loans);

};

// Get one loan application by ID
export const getLoanById = (req: Request, res: Response) => {
  const id = Number(req.params.id);

  const loan = loans.find((loan) => loan.id === id);

  if (!loan) {
    return res.status(404).json({
      message: "Loan application not found"
    });
  }

  return res.status(200).json(loan);
};