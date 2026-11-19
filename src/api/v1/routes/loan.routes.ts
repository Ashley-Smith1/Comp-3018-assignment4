import { Router } from "express";
import { getAllLoans, getLoanById, createLoan } from "../controllers/loan.controller";

const router = Router();

router.get("/", getAllLoans);
router.get("/:id", getLoanById);
router.post("/", createLoan);

export default router;