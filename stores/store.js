import { atom } from "jotai";
import {atomWithStorage} from 'jotai/utils'

export const theme = atom('bee')
export const darkModeAtom = atomWithStorage('darkMode', false) 
