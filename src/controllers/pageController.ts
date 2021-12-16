import { Request, Response } from 'express';
import { Pet } from '../models/pat';
import { createMenuObject } from '../helpers/createMenuObject';


export const home = (req: Request, res: Response) => {
  let list = Pet.getAll();

  res.render('pages/page', {
    list,
    menu: createMenuObject('all'),
    bunner: {
      title: 'Todos os animais',
      background: 'allanimals.jpg',
    },
  });
};

export const dogs = (req: Request, res: Response) => {
  let list = Pet.getType('dog');

  res.render('pages/page', {
    menu: createMenuObject('dog'),
    bunner: {
      title: 'Cachorros',
      background: 'banner_dog.jpg',
    },
    list
  });
};

export const cats = (req: Request, res: Response) => {
  let list = Pet.getType('cat');
  
  res.render('pages/page', {
    menu: createMenuObject('cat'),
    bunner: {
      title: 'Gatos',
      background: 'banner_cat.jpg',
    },
    list
  });
};

export const fishes = (req: Request, res: Response) => {
  let list = Pet.getType('fish');

  res.render('pages/page', {
    menu: createMenuObject('fish'),
    bunner: {
      title: 'Peixes',
      background: 'banner_fish.jpg',
    },
    list
  });
};

