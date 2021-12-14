import { Request, Response } from 'express';

import { createMenuObject } from '../helpers/createMenuObject';


export const home = (req: Request, res: Response) => {
  res.render('pages/page', {
    menu: createMenuObject('all'),
    bunner: {
      title: 'Todos os animais',
      background: 'allanimals.jpg',
    },
  });
};

export const dogs = (req: Request, res: Response) => {
  res.render('pages/page', {
    menu: createMenuObject('dog'),
    bunner: {
      title: 'Cachorros',
      background: 'banner_dog.jpg',
    },
  });
};

export const cats = (req: Request, res: Response) => {
  res.render('pages/page', {
    menu: createMenuObject('cat'),
    bunner: {
      title: 'Gatos',
      background: 'banner_cat.jpg',
    },
  });
};

export const fishes = (req: Request, res: Response) => {
  res.render('pages/page', {
    menu: createMenuObject('fish'),
    bunner: {
      title: 'Peixes',
      background: 'banner_fish.jpg',
    },
  });
};

