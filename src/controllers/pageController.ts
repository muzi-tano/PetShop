import { Request, Response } from 'express';
import { createMenuObject } from '../helpers/createMenuObject';
import { pet } from '../models/pet'

export const home = (req: Request, res: Response) => {
    res.render('pages/page', {
        menu: createMenuObject('all'),
        banner: {
            title: 'Todos os animais',
            background: 'allanimals.jpg'
        }
    });
};


export const Home = (req: Request, res: Response) => {
    let list = pet.getAll();
	res.render('pages/page', {
		menu: createMenuObject('all'),
		banner: {
			title: 'Todos os animais',
			background: 'allanimals.jpg'
		}
	});
};

export const dogs = (req: Request, res: Response) => {
    let list = pet.getFromType('dog');
	res.render('pages/page', {
		menu: createMenuObject('dogs'),
		banner: {
			title: 'Cachorros',
			background: 'banner_dog.jpg'
		}
	});
};

export const cats = (req: Request, res: Response) => {
    let list = pet.getFromType('cat');
	res.render('pages/page', {
		menu: {
			all: false,
			dogs: false,
			cats: true,
			fishes: false
		},
		banner: {
			title: 'Gatos',
			background: 'banner_cat.jpg'
		}
	});
};

export const fishes = (req: Request, res: Response) => {
    let list = pet.getFromType('fish');
	res.render('pages/page', {
		menu: {
			all: false,
			dogs: false,
			cats: false,
			fishes: true
		},
		banner: {
			title: 'Peixes',
			background: 'banner_fish.jpg'
		}
	});
};