import bakeImg from '@images/verb-flashcards/bake.jpg';
import brushImg from '@images/verb-flashcards/brush.jpg';
import cleanImg from '@images/verb-flashcards/clean.jpg';
import cookImg from '@images/verb-flashcards/cook.jpg';
import cryImg from '@images/verb-flashcards/cry.jpg';
import cutImg from '@images/verb-flashcards/cut.jpg';
import danceImg from '@images/verb-flashcards/dance.jpg';
import drawImg from '@images/verb-flashcards/draw.jpg';
import drinkImg from '@images/verb-flashcards/drink.jpg';
import eatImg from '@images/verb-flashcards/eat.jpg';
import getImg from '@images/verb-flashcards/get.jpg';
import hugImg from '@images/verb-flashcards/hug.jpg';
import jumpImg from '@images/verb-flashcards/jump.jpg';
import laughImg from '@images/verb-flashcards/laugh.jpg';
import listenImg from '@images/verb-flashcards/listen.jpg';
import makeImg from '@images/verb-flashcards/make.jpg';
import playImg from '@images/verb-flashcards/play.jpg';
import putImg from '@images/verb-flashcards/put.jpg';
import readImg from '@images/verb-flashcards/read.jpg';
import referenceImg from '@images/verb-flashcards/reference.jpg';
import runImg from '@images/verb-flashcards/run.jpg';
import singImg from '@images/verb-flashcards/sing.jpg';
import sitImg from '@images/verb-flashcards/sit.jpg';
import sleepImg from '@images/verb-flashcards/sleep.jpg';
import studyImg from '@images/verb-flashcards/study.jpg';
import swimImg from '@images/verb-flashcards/swim.jpg';
import takeImg from '@images/verb-flashcards/take.jpg';
import tieImg from '@images/verb-flashcards/tie.jpg';
import washImg from '@images/verb-flashcards/wash.jpg';
import watchImg from '@images/verb-flashcards/watch.jpg';
import writeImg from '@images/verb-flashcards/write.jpg';
import { type StaticImageData } from 'next/image';
import { type VerbFlashcards } from './verbs';

export const verbImages: ImageFlashcards = {
  reference: referenceImg,
  run: runImg,
  eat: eatImg,
  drink: drinkImg,
  jump: jumpImg,
  sleep: sleepImg,
  play: playImg,
  sing: singImg,
  dance: danceImg,
  laugh: laughImg,
  cry: cryImg,
  brush: brushImg,
  wash: washImg,
  study: studyImg,
  read: readImg,
  write: writeImg,
  draw: drawImg,
  cook: cookImg,
  clean: cleanImg,
  watch: watchImg,
  listen: listenImg,
  swim: swimImg,
  make: makeImg,
  bake: bakeImg,
  take: takeImg,
  sit: sitImg,
  get: getImg,
  put: putImg,
  cut: cutImg,
  tie: tieImg,
  hug: hugImg,
};

export type ImageFlashcards = Record<keyof VerbFlashcards, StaticImageData> & {
  reference: StaticImageData;
};
