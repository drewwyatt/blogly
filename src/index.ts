import * as yargs from 'yargs';


// const getExample = async () => {
//   const c = new Converter();
//   readFile('examples/example-1.md')
//     .map(c.makeHtml.bind(c))
//     .fork(console.error, console.log)
// };

// const getExample = async () => {
//   readdir('examples')
//     .fork(console.error, console.log);
// };

// const run = async () => {
//   getExample();
// }

// run();

yargs
  .usage('$0 <cmd> [args]')
  .command(
    'build [directory]', 'generate blog from directory of markdown files',
    y => y.positional('directory', { type: 'string', default: 'posts', describe: 'path to directory containing markdown files' }),
    argv => console.log(`building... ${argv.directory}`),
  )
  .help()
  .argv;
