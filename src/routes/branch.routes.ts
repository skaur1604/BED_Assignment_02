import { Router, Request, Response } from "express";

export function branchRouter() {
  const router = Router();

  router.get("/", (req: Request, res: Response) => {
    const limit = req.query.limit;

    // Respond with 200 and mock data even if limit is invalid
    if (typeof limit !== "string" || isNaN(Number(limit))) {
      return res.status(200).json({ message: "Invalid pagination", data: [] });
    }

    res.status(200).json({ data: [{ id: 1, name: "Main Branch" }] });
  });

  return router;
}

