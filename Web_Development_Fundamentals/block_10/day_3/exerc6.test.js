function fetchDogPicture() {
    return fetch("https://dog.ceo/api/breeds/image/random").then(response =>
      response
        .json()
        .then(data =>
          response.ok ? Promise.resolve(data) : Promise.reject(data)
        )
    );
  }


describe("testing API", () => {
  fetchDogPicture = jest.fn();
  afterEach(fetchDogPicture.mockReset);

  test("testing when request succeed", async () => {
    fetchDogPicture.mockResolvedValue("request sucess");

    fetchDogPicture();
    expect(fetchDogPicture).toHaveBeenCalled();
    expect(fetchDogPicture).toHaveBeenCalledTimes(1);
    expect(fetchDogPicture()).resolves.toBe("request sucess");
    expect(fetchDogPicture).toHaveBeenCalledTimes(2);
  });

  test("testing when request fail", async () => {
    fetchDogPicture.mockRejectedValue("request failed");

    expect(fetchDogPicture).toHaveBeenCalledTimes(0);
    expect(fetchDogPicture()).rejects.toMatch("request failed");
    expect(fetchDogPicture).toHaveBeenCalledTimes(1);
  });
});