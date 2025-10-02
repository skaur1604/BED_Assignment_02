// src/routes/employee.routes.ts
import { Router } from "express";
import * as ctrl from "../controllers/employee.controller";

export function employeeRouter() {
  const r = Router();

  r.get("/", ctrl.list);
  r.get("/:id", ctrl.get);
  r.post("/", ctrl.create);
  r.put("/:id", ctrl.update);
  r.delete("/:id", ctrl.remove);
  r.get("/by-branch/:branchId", ctrl.listByBranch);
  r.get("/by-department/:department", ctrl.getByDepartment);

  return r;
}



