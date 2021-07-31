import { Request, Response, NextFunction, Router } from "express";

const router = Router();

router.get("/", async (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({ success: true });
});

router.get("/test", async (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({ success: true, msg: "test route works" });
});

export default router;
