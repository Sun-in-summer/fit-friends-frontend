
import { useAppSelector } from '..';

import { getGymsData} from '../../store/gyms-data/selector';

import { getUser } from '../../store/user-process/selector';
import { Gym } from '../../types/gym.interface';


function useNearestGym (): Gym {

  const gyms = useAppSelector(getGymsData);
  const user = useAppSelector(getUser);
  const selectedGym = gyms.find((gym) =>gym.location === user?.place) as Gym;

  return selectedGym;
}

export default useNearestGym;
