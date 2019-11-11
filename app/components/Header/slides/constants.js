import bg1 from './bg.jpg';
import bg2 from './bg1.jpg';
import bg3 from './bg2.jpg';
import bg4 from './bg3.jpg';
import mv1 from '../movie/mv1.jpg';
import mv2 from '../movie/mv2.jpg';
import mv3 from '../movie/mv3.jpg';
import mv4 from '../movie/mv4.jpg';

const SLIDES = [
  {
    id: 1,
    bg: bg1,
    title_movie: 'Suicide Squad',
    kind_movie: ['Adventure', 'Thriller', 'Comedy'],
    bg_button: '#fe0000',
    isActive: true,
    movies: [
      {
        id: 'mv1',
        img: mv1,
        name: 'Zootopia',
      },
      {
        id: 'mv2',
        img: mv2,
        name: 'Ice age 3',
      },
      {
        id: 'mv3',
        img: mv3,
        name: 'Balleria',
      },
    ],
  },
  {
    id: 2,
    bg: bg2,
    title_movie: 'Zootopia',
    kind_movie: ['Adventure', 'Comedy', 'Cartoon'],
    bg_button: '#3498db',
    isActive: false,
    movies: [
      {
        id: 'mv2',
        img: mv2,
        name: 'Ice age 3',
      },
      {
        id: 'mv3',
        img: mv3,
        name: 'Balleria',
      },
      {
        id: 'mv4',
        img: mv4,
        name: 'Suicide Squad',
      },
    ],
  },
  {
    id: 3,
    bg: bg3,
    title_movie: 'Ice Age 3',
    kind_movie: ['Adventure', 'Cartoon', 'Comedy'],
    bg_button: '#fe0000',
    isActive: false,
    movies: [
      {
        id: 'mv3',
        img: mv3,
        name: 'Balleria',
      },
      {
        id: 'mv4',
        img: mv4,
        name: 'Suicide Squad',
      },
      {
        id: 'mv1',
        img: mv1,
        name: 'Zootopia',
      },
    ],
  },
  {
    id: 4,
    bg: bg4,
    title_movie: 'Balleria',
    kind_movie: ['Cartoon', 'Mucicals', 'Comedy'],
    bg_button: '#3498db',
    isActive: false,
    movies: [
      {
        id: 'mv4',
        img: mv4,
        name: 'Suicide Squad',
      },
      {
        id: 'mv1',
        img: mv1,
        name: 'Zootopia',
      },
      {
        id: 'mv2',
        img: mv2,
        name: 'Ice age 3',
      },
    ],
  },
];

export default SLIDES;
