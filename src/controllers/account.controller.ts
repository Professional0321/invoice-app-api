import { Request, Response } from "express";

export const mockAccounts = [
  {
    accountId: "account-1",
    accountName: "CAVA NY",
    parentAccountId: "account-4",
  },
  {
    accountId: "account-2",
    accountName: "CAVA MA",
    parentAccountId: "account-4",
  },
  {
    accountId: "account-3",
    accountName: "CAVA Brooklyn",
    parentAccountId: "account-1",
  },
  {
    accountId: "account-4",
    accountName: "CAVA",
    parentAccountId: null,
  },
];

export const getAllAccounts = (req: Request, res: Response) => {
  res.status(200).json(mockAccounts);
};
