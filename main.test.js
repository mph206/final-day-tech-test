const filterArrayByValue = require('./main');

test("Should return an array of numbers for each array item that contains the search value", () => {
  expect(filterArrayByValue([123, 4556, 127, 415, 8, 42, 88, 888, 13], 1)).toEqual([ 123, 127, 415, 13 ]);
});

test("Should return entire array if value is in each array item", () => {
  expect(filterArrayByValue([11, 1], 1)).toEqual([ 11, 1 ]);
});

test("Should return numbers even if the array contains string values", () => {
  expect(filterArrayByValue(['bla', 1], 1)).toEqual([ 1 ]);
});

test("Should find letters in array items", () => {
    expect(filterArrayByValue(['12B3', 'BB127', 415, '8B', 42, 'BOB', 88, 888, 13], 'B')).toEqual([ '12B3', 'BB127', '8B', 'BOB' ]);
  });

test("Should find letters in array items regardless of case", () => {
  expect(filterArrayByValue(['12b3', 'Bb127', 415, '8b', 42, 'BoB', 88, 888, 13], 'B')).toEqual([ '12b3', 'Bb127', '8b', 'BoB' ]);
});

test("Should find values in nested array items", () => {
    expect(filterArrayByValue(['12b3', 'Bb127', 415, '8b', [42, 'b'], 'BoB', 88, 888, 13], 'B')).toEqual([ '12b3', 'Bb127', '8b', [42, 'b'], 'BoB' ]);
  });