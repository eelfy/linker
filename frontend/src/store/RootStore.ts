import { createContext, useContext } from 'react';
import { LinksStore } from './stores/LinksStore';
import { MainStore } from './stores/MainStore';

const store = {
  MainStore: new MainStore(),
  LinksStore: new LinksStore(),
};

const RootStore = createContext(store);

const useStore = () => useContext(RootStore);

export { store, RootStore, useStore };
