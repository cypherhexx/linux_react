const routesp = {};

const requireCardp = require.context('..', true, /\.exp\.js$/);
const pathsp = requireCardp.keys();
pathsp.sort((a, b) => a.localeCompare(b));
pathsp.forEach(path => {
  const pathnamep = path.match(/\.\/(.+)\.exp\.js$/)[1];
  routesp[pathnamep] = requireCardp(path).default;
});

export default routesp;
