const uppercase = (str, callback) => {
  callback(str.toUpperCase());
}

test('Converts a string to uppercase letters', (done) => {
  uppercase('trybe', (string) => {
    expect(string).toBe('TRYBE');
    done();
  })
});
