function randomNumber() {
  Math.floor(Math.random() * 101);
};

test('if function is called, its return and how many times it is called', () => {
  randomNumber = jest.fn().mockReturnValue(10);
  expect(randomNumber()).toBe(10);
  expect(randomNumber).toHaveBeenCalled();
  expect(randomNumber).toHaveBeenCalledTimes(1);
});