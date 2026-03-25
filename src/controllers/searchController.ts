import { Request, Response } from 'express';
import { pet } from '../models/pet';
import { createMenuObject } from '../helpers/createMenuObject';
export const search = (req: Request, res: Response) => {
  let query = req.query.q as string;
  if (!query) {
    res.redirect('/');
    return;
  }
  res.send('search');
  let list = pet.getFromName(query);
  res.render('pages/pages', {
    menu: createMenuObject(''),
    list,
    query
  });
      
  // res.render('pages/search');
}
