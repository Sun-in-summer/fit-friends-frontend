import { useAppSelector } from '..';
import { getTrainingsData } from '../../store/training-data/selector';
import { Training } from '../../types/training.interface';


function useSpecialOffersTrainings (): Training[] {

  const trainings = useAppSelector(getTrainingsData);// можно добавить отбор ещё по  типам как у юзера
  const specialOffersTrainings = trainings.filter((training) => (training.isSpecialOffer));

  return specialOffersTrainings;
}

export default useSpecialOffersTrainings;
