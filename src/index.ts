import { readFile } from 'fs';

const rfPromise = (file: string) => new Promise((res, rej) => {
  readFile(file, 'utf8', (err, data) => err ? rej(err) : res(data));
});

const getExample = async () => {
  const foo = await rfPromise('examples/example-1.md')
  console.log(foo);
};

const run = async () => {
  getExample();
}

run();
