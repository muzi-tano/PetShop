import { Request, Response } from 'express';

export const search = (req: Request, res: Response) => {
  res.send('search');
  // res.render('pages/search');
}
