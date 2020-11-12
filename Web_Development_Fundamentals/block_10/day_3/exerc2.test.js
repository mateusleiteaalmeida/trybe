function randomNumber() {
  Math.floor(Math.random() * 101);
};
  
test('if function is called, its return and how many times it is called', () => {
  randomNumber = jest.fn().mockImplementationOnce((a, b) => a / b);
  expect(randomNumber(4, 2)).toBe(2);
  expect(randomNumber).toHaveBeenCalled();
  expect(randomNumber).toHaveBeenCalledTimes(1);
  expect(randomNumber).toHaveBeenCalledWith(4, 2);
});