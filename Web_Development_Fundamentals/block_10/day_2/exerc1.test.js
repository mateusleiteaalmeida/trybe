const uppercase = (str, callback) => {
  callback(str.toUpperCase());
}

test('Retorne a lista de animais', (done) => {
  uppercase('trybe', (string) => {
    expect(string).toBe('TRYBE');
    done();
  })
});
