const a = Object.freeze({
  foo: { greeting: 'Hello' },
  bar: 'dian',
  baz: '?'
});

a.foo.greeting = 'kamu sehat';

console.log(`${ a.foo.greeting }, ${ a.bar }${a.baz}`);