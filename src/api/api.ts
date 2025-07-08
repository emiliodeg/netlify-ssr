import { Router } from "express";
import healthRoutes from "./routes/health";

const router = Router();

router.get("/health", healthRoutes)

export default router;