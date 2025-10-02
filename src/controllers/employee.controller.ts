// src/controllers/employee.controller.ts
import { Request, Response } from "express";

let idCounter = 1;
let employees: any[] = [];

export function list(req: Request, res: Response) {
  res.status(200).json({ data: employees });
}

export function get(req: Request, res: Response) {
  const id = parseInt(req.params.id);
  if (isNaN(id)) return res.status(400).json({ message: "Invalid ID" });

  const emp = employees.find((e) => e.id === id);
  if (!emp) return res.status(404).json({ message: "Not found" });

  res.status(200).json({ data: emp });
}

export function create(req: Request, res: Response) {
  const { name, department, phone, branchId } = req.body;

  if (!name || !department || !phone || !branchId) {
    return res.status(400).json({ message: "Missing fields" });
  }

  const newEmp = { id: idCounter++, name, department, phone, branchId };
  employees.push(newEmp);
  res.status(201).json({ data: newEmp });
}

export function update(req: Request, res: Response) {
  const id = parseInt(req.params.id);
  if (isNaN(id)) return res.status(400).json({ message: "Invalid ID" });

  const emp = employees.find((e) => e.id === id);
  if (!emp) return res.status(404).json({ message: "Not found" });

  Object.assign(emp, req.body);
  res.status(200).json({ data: emp });
}

export function remove(req: Request, res: Response) {
  const id = parseInt(req.params.id);
  if (isNaN(id)) return res.status(400).json({ message: "Invalid ID" });

  employees = employees.filter((e) => e.id !== id);
  res.status(204).send();
}

export function listByBranch(req: Request, res: Response) {
  const branchId = parseInt(req.params.branchId);
  if (isNaN(branchId)) return res.status(400).json({ message: "Invalid branchId" });

  const filtered = employees.filter((e) => e.branchId === branchId);
  res.status(200).json({ data: filtered });
}

export function getByDepartment(req: Request, res: Response) {
  const { department } = req.params;
  if (!department) return res.status(400).json({ message: "Missing department" });

  const filtered = employees.filter((e) => e.department === department);
  res.status(200).json({ data: filtered });
}




