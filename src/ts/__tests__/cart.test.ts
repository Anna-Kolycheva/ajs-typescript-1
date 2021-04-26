import Movie from '../domain/movie';
import Cart from '../service/Cart';

const film1 = new Movie(1012, 'Мстители', 'The Avengers', true, 2012, ['США'], 'Avengers Assemble!', ['фантастика', 'боевик', 'фэнтези'] , 137, 300);
const film2 = new Movie(1011, 'Не мстители', 'Not the Avengers', true, 2011, ['Канада'], 'Avengers Assemble!', ['фантастика', 'боевик'] , 100, 200);

let cart = new Cart;
cart.add(film1);
cart.add(film2);



test('movies added', () => {
  expect(cart.items).toEqual([{
    id: 1012,
    name: 'Мстители',
    originalName: 'The Avengers',
    isIMAX: true,
    year: 2012,
    country: ['США'],
    slogan: 'Avengers Assemble!',
    genre: ['фантастика', 'боевик', 'фэнтези'],
    duration: 137,
    price: 300,
  }, {
    id: 1011,
    name: 'Не мстители',
    originalName: 'Not the Avengers',
    isIMAX: true,
    year: 2011,
    country: ['Канада'],
    slogan: 'Avengers Assemble!',
    genre: ['фантастика', 'боевик'],
    duration: 100,
    price: 200,
  }]);
});

test('totalPrice calculated', () => {
  expect(cart.totalPrice()).toBe(500);
});

test('discountPrice calculated', () => {
  expect(cart.discountPrice(50)).toBe(250);
});

test('movie not deleted', () => {
  cart.delete(1111);
  expect(cart.items).toEqual([{
    id: 1012,
    name: 'Мстители',
    originalName: 'The Avengers',
    isIMAX: true,
    year: 2012,
    country: ['США'],
    slogan: 'Avengers Assemble!',
    genre: ['фантастика', 'боевик', 'фэнтези'],
    duration: 137,
    price: 300,
  }, {
    id: 1011,
    name: 'Не мстители',
    originalName: 'Not the Avengers',
    isIMAX: true,
    year: 2011,
    country: ['Канада'],
    slogan: 'Avengers Assemble!',
    genre: ['фантастика', 'боевик'],
    duration: 100,
    price: 200,
  }]);
});

test('movie deleted', () => {
  cart.delete(1011);
  expect(cart.items).toEqual([{
    id: 1012,
    name: 'Мстители',
    originalName: 'The Avengers',
    isIMAX: true,
    year: 2012,
    country: ['США'],
    slogan: 'Avengers Assemble!',
    genre: ['фантастика', 'боевик', 'фэнтези'],
    duration: 137,
    price: 300,
  }])
});