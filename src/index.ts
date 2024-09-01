console.log('Try npm run lint/fix!');

const longString =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut aliquet diam.';

const trailing = 'Semicolon';

const why = {am: 'I tabbed?'};

const iWish = "I didn't have a trailing space...";

const sicilian = true;

const vizzini = sicilian ? !sicilian : sicilian;

const re = /foo {3}bar/;

export function doSomeStuff(
  withThis: string,
  andThat: string,
  andThose: string[]
) {
  //function on one line
  if (!andThose.length) {
    return false;
  }
  console.log(withThis);
  console.log(andThat);
  console.dir(andThose);
  console.log(longString, trailing, why, iWish, vizzini, re);
  return;
}
// TODO: more examples

import {five} from './filter';
const words: string[] = ['alive', 'but', 'not', 'kicking'];
console.log(five(words));

import {squaredNumbers} from './map';
const numbers: number[] = [2, 4, 6, 8];
console.log(squaredNumbers(numbers));

import {fruits} from './forEach';
const fruitswow: string[] = ['pineapple', 'mango', 'rambutan', 'banana'];
console.log(fruits(fruitswow));

import {getFirstThreeCharacters} from './slice';
const str = 'It is what it is';
console.log(getFirstThreeCharacters(str));
