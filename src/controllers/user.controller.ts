import { Request, Response } from "express";

export const mockUser = {
  accessToken: "accessToken-1",
  email: "user@mailinator.com",
  id: "user-1",
  name: "First Last",
};

export const getLoggedInUser = (req: Request, res: Response) => {
  res.status(200).json(mockUser);
};
