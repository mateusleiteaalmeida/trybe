const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' }
};
        
const findUserById = (id) => {
  return new Promise((resolve, reject) => {
      if (users[id]) {
        return resolve(users[id]);
      }
        
      return reject({ error: 'User with ' + id + ' not found.' });
  });
}
        
const getUserName = (userID) => {
  return findUserById(userID).then(user => user.name);
}
    
describe('getUserName', () => {
    test('if the user is found', async () => {
      expect.assertions(1);
      const res = await getUserName(4);
      expect(res).toEqual('Mark');
    });
  
    test('if the user is not found', async () => {
      expect.assertions(1);
      try {
        await getUserName(6);
      } catch (res) {
        expect(res).toEqual({ error: 'User with 6 not found.'});
      }
    });
});
