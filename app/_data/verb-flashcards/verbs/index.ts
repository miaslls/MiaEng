import { base } from "./base";
import { pastParticiple } from "./past-participle";
import { presentParticiple } from "./present-participle";
import { simplePast } from "./simple-past";

export const verbs: Record<VerbForm, VerbFlashcards> = {
  base,
  presentParticiple,
  simplePast,
  pastParticiple,
}

export type VerbForm =
  | 'base'
  | 'presentParticiple'
  | 'simplePast'
  | 'pastParticiple';


export type VerbFlashcards = {
  run: string
  eat: string
  drink: string
  jump: string
  sleep: string
  play: string
  sing: string
  dance: string
  laugh: string
  cry: string
  brush: string
  wash: string
  study: string
  read: string
  write: string
  draw: string
  cook: string
  clean: string
  watch: string
  listen: string
  swim: string
  make: string
  bake: string
  take: string
  sit: string
  get: string
  put: string
  cut: string
  tie: string
  hug: string
}