import { Request, Response } from 'express';
import { createMenuObject } from '../helpers/createMenuObject';

import { Pet } from '../models/pat';

export const search = (req: Request, res: Response) => {
  let name: string = req.query.name as string;
  let list = Pet.getFromName(name);

  if (!name) {
    res.redirect('/');
    return;
  }

  res.render('pages/page', {
    menu: createMenuObject(''),
    list,
    name
  });
  console.log('foi')
};