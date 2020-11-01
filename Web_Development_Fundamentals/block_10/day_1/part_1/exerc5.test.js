const { obj1, obj2, obj3 } = require('./exerc5.js');

test("compare objects", () => {
    expect(obj1).toEqual(obj2);
    expect(obj1).not.toEqual(obj3);
    expect(obj2).not.toEqual(obj3);
});
