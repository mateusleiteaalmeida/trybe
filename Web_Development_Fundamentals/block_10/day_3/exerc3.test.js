function randomNumber() {
  Math.floor(Math.random() * 101);
};

describe("multiply numbers", () => {
  test("if given three parameters the result of their multiplication is returned ", () => {
    randomNumber = jest.fn().mockImplementation((a, b, c) => a * b * c);
    expect(randomNumber(2, 4, 6)).toBe(48);
    expect(randomNumber).toHaveBeenCalled();
    expect(randomNumber).toHaveBeenCalledTimes(1);
    expect(randomNumber).toHaveBeenCalledWith(2, 4, 6);
  });

  test("if given one parameter its double is returned", () => {
    randomNumber.mockReset();
    expect(randomNumber).toHaveBeenCalledTimes(0);
    randomNumber.mockImplementation(a => a * 2);
    expect(randomNumber(2)).toBe(4);
    expect(randomNumber).toHaveBeenCalled();
    expect(randomNumber).toHaveBeenCalledTimes(1);
    expect(randomNumber).toHaveBeenCalledWith(2);
  });
});
  