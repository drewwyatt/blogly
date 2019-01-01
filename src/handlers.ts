import { parallel } from 'fluture';
import { join } from 'path';
import { readdir, readFile } from './io';

type DirectoryProviding = { directory: string; };

export const build = async ({ directory }: DirectoryProviding): Promise<void> => {
  const filenames = await readdir(directory).promise();
  parallel(
    5,
    filenames.map(f => readFile(join(directory, f))),
  ).fork(
    console.error,
    console.log,
  );
};
