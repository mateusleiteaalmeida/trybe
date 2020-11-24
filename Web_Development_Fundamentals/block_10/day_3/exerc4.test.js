function upperCase(string) {
    string.toUpperCase();
};

function firstLetter(string) {
    string.charAt(0)
};

function concatenate(string1, string2) {
    string1.concat(string2)
};

describe("testing functions with strings", () => {
  test("mocking function to receive a string and return it in lower case", () => {
    upperCase = jest.fn().mockImplementation(string => string.toLowerCase());

    expect(upperCase("STRING")).toBe("string");
    expect(upperCase).toHaveBeenCalled();
    expect(upperCase).toHaveBeenCalledTimes(1);
    expect(upperCase).toHaveBeenCalledWith("STRING");
  });
  
  test("mocking function to receive a string and return it's first letter", () => {
    firstLetter = jest.fn().mockImplementation(string => string.charAt(string.length - 1));

    expect(firstLetter("string")).toBe("g");
    expect(firstLetter).toHaveBeenCalled();
    expect(firstLetter).toHaveBeenCalledTimes(1);
    expect(firstLetter).toHaveBeenCalledWith("string");
  });
 
  test("mocking function to receive three strings and concatenate them", () => {
    concatenate = jest.fn().mockImplementation((string1, string2, string3) => string1.concat(string2, string3));

    expect(concatenate("a", "b", "c")).toBe("abc");
    expect(concatenate).toHaveBeenCalled();
    expect(concatenate).toHaveBeenCalledTimes(1);
    expect(concatenate).toHaveBeenCalledWith("a", "b", "c");
  });
});

module.exports = { upperCase, firstLetter, concatenate };