const hello = 'Hello, World!';
const helloLength = hello.length;
hello[0] = 'L'; // This has no effect, because strings are immutable
hello[0]; // This returns "H"