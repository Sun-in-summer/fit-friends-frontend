import { State } from '../../types/state';
import { NameSpace } from '../store-const';


export const getActiveLocationOption = (state: State): string => state[NameSpace.SelectedLocationOption].activeLocationOption;
