import { Request, Response } from 'express';
import { createMenuObject } from '../helpers/createMenuObject';

export const home = (req: Request, res: Response) => {
    res.render('pages/page', {
        menu: createMenuObject('all'),
        banner: {
            title: 'Todos os animais',
            background: 'allanimals.jpg'
        }
    });
};

export const dogs = (req: Request, res: Response) => {
    res.render('pages/page', {
        banner: {
            title: 'Cachorros',
            background: 'banner_dog.jpg'
        },
        menu: createMenuObject('all'),
    });
};

export const cats = (req: Request, res: Response) => {
    res.render('pages/page', {
        banner: {
            title: 'Gatos',
            background: 'banner_cat.jpg'
        },
        menu: createMenuObject('all'),
    });
};

export const fishes = (req: Request, res: Response) => {
    res.render('pages/page', {
        banner: {
            title: 'Peixes',
            background: 'banner_fish.jpg'
        },
        menu: createMenuObject('all'),
    });
};