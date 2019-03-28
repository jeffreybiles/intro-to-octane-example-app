import Route from '@ember/routing/route';

export default class BooksRoute extends Route {
  model(){
    return [{
      id: 1,
      name: 'Brave New World',
      author: 'Aldous Huxley',
      publicationYear: 1932,
      pages: 248,
      imgUrl: '/imgs/brave-new-world-cover.jpg'
    }, {
      id: 2,
      name: 'Way of Kings',
      author: 'Brandon Sanderson',
      publicationYear: 2010,
      pages: 1007,
      imgUrl: '/imgs/way-of-kings.jpg'
    }, {
      id: 3,
      name: 'Gulag Archipelago',
      author: 'Aleksandr Solzhenitsyn',
      publicationYear: 1973,
      pages: 2032,
      imgUrl: '/imgs/gulag-archipelago.jpg'
    }, {
      id: 4,
      name: 'Fire Upon the Deep',
      author: 'Vernor Vinge',
      publicationYear: 1992,
      pages: 391,
      imgUrl: '/imgs/fire-upon-the-deep.jpg'
    }, {
      id: 5,
      name: 'Speaker for the Dead',
      author: 'Orson Scott Card',
      publicationYear: 1986,
      pages: 415,
      imgUrl: '/imgs/speaker-for-the-dead.jpg'
    }, {
      id: 6,
      name: 'My Hero Academia volume 1',
      author: 'Kohei Horikoshi',
      publicationYear: 2014,
      pages: 192,
      imgUrl: '/imgs/boku-no-hero-academia-vol-1.jpg'
    }, {
      id: 7,
      name: 'Eye of the World',
      author: 'Robert Jordan',
      publicationYear: 1990,
      pages: 685,
      imgUrl: '/imgs/eye-of-the-world.jpg'
    }, {
      id: 8,
      name: 'Dune',
      author: 'Frank Herbert',
      publicationYear: 1965,
      pages: 412,
      imgUrl: '/imgs/dune.jpg'
    }, {
      id: 9,
      name: 'Anathem',
      author: 'Neal Stephenson',
      publicationYear: 2008,
      pages: 937,
      imgUrl: '/imgs/anathem.jpg'
    }, {
      id: 10,
      name: 'Wrinkle in Time',
      author: 'Madeleine L\'Engle',
      publicationYear: 1962,
      pages: 228,
      imgUrl: '/imgs/wrinkle-in-time.jpg'
    }]
  }
}
