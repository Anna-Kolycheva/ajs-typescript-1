import Movie from '../domain/movie';

test('new card should be empty', () => {
  const film = new Movie(1012, 'Мстители', 'The Avengers', true, 2012, ['США'], 'Avengers Assemble!', ['фантастика', 'боевик', 'фэнтези'] , 137, 300);

  expect(film).toEqual({
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
  });
});
