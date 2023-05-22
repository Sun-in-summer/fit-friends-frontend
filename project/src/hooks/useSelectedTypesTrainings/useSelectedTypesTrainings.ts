import { useAppSelector } from '..';
import { getTrainingsData } from '../../store/training-data/selector';
import { getUser } from '../../store/user-process/selector';

import { Training } from '../../types/training.interface';


function useSelectedTypesTrainings (): Training[] {

  const trainings = useAppSelector(getTrainingsData);
  const user = useAppSelector(getUser);
  const selectedTypes = user?.trainingType;
  const selectedTypesTrainings = trainings.filter((training) =>selectedTypes?.includes(training.trainingType));

  return selectedTypesTrainings;
}

export default useSelectedTypesTrainings;
