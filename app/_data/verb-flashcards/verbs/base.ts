import { VerbFlashcards } from "..";

export const base: VerbFlashcards = {
  run: 'run',
  eat: 'eat',
  drink: 'drink',
  jump: 'jump',
  sleep: 'sleep',
  play: 'play',
  sing: 'sing',
  dance: 'dance',
  laugh: 'laugh',
  cry: 'cry',
  brush: 'brush',
  wash: 'wash',
  study: 'study',
  read: 'read',
  write: 'write',
  draw: 'draw',
  cook: 'cook',
  clean: 'clean',
  watch: 'watch',
  listen: 'listen',
  swim: 'swim',
  make: 'make',
  bake: 'bake',
  take: 'take',
  sit: 'sit',
  get: 'get',
  put: 'put',
  cut: 'cut',
  tie: 'tie',
  hug: 'hug'
}

export const verbBaseArray = Object.keys(base) as (keyof VerbFlashcards)[];