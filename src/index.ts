import { Converter } from 'showdown';
import { readFile, readdir } from './io';



// const getExample = async () => {
//   const c = new Converter();
//   readFile('examples/example-1.md')
//     .map(c.makeHtml.bind(c))
//     .fork(console.error, console.log)
// };

const getExample = async () => {
  readdir('examples')
    .fork(console.error, console.log);
};

const run = async () => {
  getExample();
}

run();
