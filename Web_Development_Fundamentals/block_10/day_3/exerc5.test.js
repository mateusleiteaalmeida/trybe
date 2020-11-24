const getFunc = require("./exerc4.test");

describe("testando implementações", () => {
  test("mockando função para receber um parâmetro e retornar em caixa baixa", () => {
    const upper = jest
      .spyOn(getFunc, "upperCase")
      .mockImplementation(string => string.toLowerCase());

    expect(upper("STRING")).toBe("string");
    expect(upper).toHaveBeenCalled();
    expect(upper).toHaveBeenCalledTimes(1);
    expect(upper).toHaveBeenCalledWith("STRING");

    getFunc.upperCase.mockRestore();

    expect(getFunc.upperCase("string")).toBe("STRING");
  });
});