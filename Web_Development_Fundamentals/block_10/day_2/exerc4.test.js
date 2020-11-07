const fetch = require('node-fetch');

const getRepos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      return data.map((repo) => repo.name)
    });
}

test('if repositories are in the list', () => {
    const url = 'https://api.github.com/users/tryber/repos';
    return getRepos(url).then(res => {
      expect(res).toContain('challenge-bug-hunting-youtrybe-squad-1');
      expect(res).toContain('challenge-bug-hunting-youtrybe-squad-2');
    })
});
  