const getFunc = require("./exerc4.test")

describe("testing upperCase and lowerCase", () => {
  test("mocking function to receive a string and return it in lower case", () => {
    const mockUpperCase = jest
      .spyOn(getFunc, "upperCase")
      .mockImplementation(string => string.toLowerCase());

    expect(mockUpperCase("STRING")).toBe("string");
    expect(mockUpperCase).toHaveBeenCalled();
    expect(mockUpperCase).toHaveBeenCalledTimes(1);
    expect(mockUpperCase).toHaveBeenCalledWith("STRING");

    getFunc.upperCase.mockRestore();

    expect(getFunc.upperCase("string")).toBe("STRING");
  });
});
