
import { State } from '../../types/state';
import { NameSpace } from '../store-const';


export const getActiveSortOption = (state: State): string => state[NameSpace.SelectedUsersSortOption].activeSortOption;
