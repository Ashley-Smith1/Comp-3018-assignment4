import { Router } from "express";
import { getAllLoans, getLoanById } from "../controllers/loan.controller";

const router = Router();

router.get("/", getAllLoans);
router.get("/:id", getLoanById);

export default router;