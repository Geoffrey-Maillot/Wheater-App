import { atom, selector } from "recoil";
import Search from '../components/Form/index';

// Search Component

export const searchIsOpen = atom({
  key: 'searchIsOpen',
  default: false,
})

