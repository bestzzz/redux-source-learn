export default function compose (...funcs) {
  return funcs.reduce((a, b) => (...arg) => a(b(...arg)));
};

const a = (value) => `fna(${value})`;

const b = (value) => `fnb(${value})`;

console.log(compose(a, b)('finnal'));
