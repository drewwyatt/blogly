import * as yargs from 'yargs';
import { build } from './handlers';

yargs
  .usage('$0 <cmd> [args]')
  .command(
    'build [directory]', 'generate blog from directory of markdown files',
    y => y.positional('directory', { type: 'string', default: 'posts', describe: 'path to directory containing markdown files' }),
    // argv => console.log(`building... ${argv.directory}`),
    build as any,
  )
  .help()
  .argv;
