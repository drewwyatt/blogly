import { node } from 'fluture';
import { readFile as rf, readdir as rd } from 'fs';

export const readFile = (path: string) => node<{}, string>(done => rf(path, 'utf8', done));
export const readdir = (path: string) => node<{}, string[]>(done => rd(path, done))
