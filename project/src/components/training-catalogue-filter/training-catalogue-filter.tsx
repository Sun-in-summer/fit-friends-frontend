
import { getTrainingsData } from '../../store/training-data/selector';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { FILTER_QUERY_DELAY, SortOptions, SortOptionsEn, TrainingCaloriesQty, TrainingPrice } from '../../const';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { TrainingType } from '../../types/training-type.enum';
import { fetchFilteredTrainingsAction } from '../../store/api-actions';
import { debounce } from '../../utils/utils';
import FilterSortBlock from '../filter-sort-block/filter-sort-block';
import FilterSpecializationBlock from '../filter-specialization-block/filter-specialization-block';

function TrainingCatalogueFilter(): JSX.Element {

  const dispatch = useAppDispatch();
  const trainings = useAppSelector(getTrainingsData);

  const currentTrainingsPrices = trainings.length !== 0
    ? trainings.map((training) => training.price)
    : [TrainingPrice.Min, TrainingPrice.Max];
  const minCurrentPrice = Math.min(...currentTrainingsPrices);
  const maxCurrentPrice = Math.max(...currentTrainingsPrices);

  const currentTrainingsCaloriesQtys = trainings.length !== 0
    ? trainings.map((training) => training.calories)
    : [TrainingCaloriesQty.Min, TrainingCaloriesQty.Max];
  const minCurrentCaloriesQty = Math.min(...currentTrainingsCaloriesQtys);
  const maxCurrentCaloriesQty = Math.max(...currentTrainingsCaloriesQtys);

  const [price, setPrice] = useState<number[]>([]);
  const [caloriesQty, setCaloriesQty] = useState<number[]>([]);
  const [trainingTypes, setTrainingType] = useState<string[]>([]);

  const [priceFilter, setPriceFilter] = useState<number[]>([]);
  const [caloriesQtyFilter, setCaloriesQtyFilter] = useState<number[]>([]);
  const [ratingFilter, setRatingFilter] = useState<number[]>([]);
  const [trainingTypeFilter, setTrainingTypeFilter] = useState<TrainingType[]>([]);
  const [activeSortOption, setActiveSortOption] = useState<string>(SortOptionsEn.Cheaper);


  useEffect(() => {
    dispatch(fetchFilteredTrainingsAction({
      minPrice: priceFilter[0],
      maxPrice: priceFilter[1],
      minCaloriesQty: caloriesQtyFilter[0],
      maxCaloriesQty: caloriesQtyFilter[1],
      minRating: ratingFilter[0],
      maxRating: ratingFilter[1],
      trainingTypes: trainingTypeFilter.join(','),
      sortOption: activeSortOption
    }));
  }, [activeSortOption, caloriesQtyFilter, dispatch, priceFilter, ratingFilter, trainingTypeFilter]);


  const setPriceFilterDebounced = debounce<number[]>((arg) => setPriceFilter(arg), FILTER_QUERY_DELAY);
  const setCaloriesQtyFilterDebounced = debounce<number[]>((arg) => setCaloriesQtyFilter(arg), FILTER_QUERY_DELAY);
  const setTrainingTypeFilterDebounced = debounce<(prevState: TrainingType[]) => TrainingType[]>((arg) => setTrainingTypeFilter(arg), FILTER_QUERY_DELAY);
  const setRaitingFilterDebounced = debounce<number[]>((arg) => setRatingFilter(arg), FILTER_QUERY_DELAY);


  const handlePriceInputChange = (evt: FormEvent<HTMLInputElement>) => {
    const value = Number(evt.currentTarget.value);
    const name = evt.currentTarget.name;
    switch (name) {
      case 'text-min':
        setPrice([value, priceFilter[1]]);
        setPriceFilterDebounced([value, priceFilter[1]]);
        break;
      case 'text-max':
        setPrice([priceFilter[0], value]);
        setPriceFilterDebounced([priceFilter[0], value]);
        break;
    }
  };

  const handleCaloriesQtyInputChange = (evt: FormEvent<HTMLInputElement>) => {
    const value = Number(evt.currentTarget.value);
    const name = evt.currentTarget.name;
    switch (name) {
      case 'text-min-cal':
        setCaloriesQty([value, caloriesQtyFilter[1]]);
        setCaloriesQtyFilterDebounced([value, caloriesQtyFilter[1]]);
        break;
      case 'text-max-cal':
        setCaloriesQty([caloriesQtyFilter[0], value]);
        setCaloriesQtyFilterDebounced([caloriesQtyFilter[0], value]);
        break;
    }
  };


  const handleSortInputChange = (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>): void => {

    const { target } = event;
    const { value } = target;
    setActiveSortOption(SortOptionsEn[value]);
    if (value === SortOptions.FreeOfCharge) {
      setPriceFilterDebounced([0, 0]);
    } else {
      setPriceFilterDebounced(price);
    }
  };

  const manyCheckboxesChangeHandle = (event: ChangeEvent<HTMLInputElement>): void => {
    const { target } = event;
    const { value } = target;
    if (trainingTypes.includes(value)) {
      const indexOfTypeToRemove = trainingTypes.indexOf(value);
      if (indexOfTypeToRemove !== 0) {
        const indexToRemove = indexOfTypeToRemove - 1;
        const newTrainingTypes = trainingTypes.splice(indexToRemove, 1);
        setTrainingType([...newTrainingTypes]);
      }
      else {
        trainingTypes.splice(indexOfTypeToRemove, 1);
        setTrainingType([...trainingTypes]);
      }
    }
    else {
      trainingTypes.push(value);
      setTrainingType([...trainingTypes]);
    }
  };


  return (
    <form className="gym-catalog-form__form">
      <div className="gym-catalog-form__block gym-catalog-form__block--price">
        <h4 className="gym-catalog-form__block-title">Цена, ₽</h4>
        <div className="filter-price">
          <div className="filter-price__input-text filter-price__input-text--min">
            <input
              type="number"
              id="text-min"
              name="text-min"
              value={price[0]}
              onChange={handlePriceInputChange}
              placeholder={minCurrentPrice.toString()}
            />
            <label htmlFor="text-min">от</label>
          </div>
          <div className="filter-price__input-text filter-price__input-text--max">
            <input
              type="number"
              id="text-max"
              name="text-max"
              onChange={handlePriceInputChange}
              value={price[1]}
              placeholder={maxCurrentPrice.toString()}
            />
            <label htmlFor="text-max">до</label>
          </div>
        </div>
        {/* <div className="filter-range">
          <div className="filter-range__scale">
            <div className="filter-range__bar">
              <span className="visually-hidden">Полоса прокрутки</span>
            </div>
          </div>

          <div className="filter-range__control">
            <button className="filter-range__min-toggle"><span className="visually-hidden">Минимальное значение</span></button>
            <button className="filter-range__max-toggle"><span className="visually-hidden">Максимальное значение</span></button>
          </div>
        </div> */}
        <RangeSlider
          minRangeValue={minCurrentPrice}
          maxRangeValue={maxCurrentPrice}
          setExternalValues={[setPriceFilterDebounced, setPrice]}
        />
      </div>
      <div className="gym-catalog-form__block gym-catalog-form__block--calories">
        <h4 className="gym-catalog-form__block-title">Калории</h4>
        <div className="filter-calories">
          <div className="filter-calories__input-text filter-calories__input-text--min">
            <input
              type="number"
              id="text-min-cal"
              name="text-min-cal"
              onChange={handleCaloriesQtyInputChange}
              placeholder={minCurrentCaloriesQty.toString()}
              value={caloriesQty[0]}
            />
            <label htmlFor="text-min-cal">от</label>
          </div>
          <div className="filter-calories__input-text filter-calories__input-text--max">
            <input
              type="number"
              id="text-max-cal"
              name="text-max-cal"
              onChange={handleCaloriesQtyInputChange}
              placeholder={maxCurrentCaloriesQty.toString()}
              value={caloriesQty[1]}
            />
            <label htmlFor="text-max-cal">до</label>
          </div>
        </div>
        {/* <div className="filter-range">
          <div className="filter-range__scale">
            <div className="filter-range__bar"><span className="visually-hidden">Полоса прокрутки</span></div>
          </div>
          <div className="filter-range__control">
            <button className="filter-range__min-toggle"><span className="visually-hidden">Минимальное значение</span></button>
            <button className="filter-range__max-toggle"><span className="visually-hidden">Максимальное значение</span></button>
          </div>
        </div> */}
        <RangeSlider
          minRangeValue={minCurrentPrice}
          maxRangeValue={maxCurrentPrice}
          setExternalValues={[setPriceFilterDebounced, setPrice]}
        />
      </div>
      <div className="gym-catalog-form__block gym-catalog-form__block--rating">
        <h4 className="gym-catalog-form__block-title">Рейтинг</h4>
        {/* <div className="filter-raiting">
          <div className="filter-raiting__scale">
            <div className="filter-raiting__bar"><span className="visually-hidden">Полоса прокрутки</span></div>
          </div>
          <div className="filter-raiting__control">
            <button className="filter-raiting__min-toggle"><span className="visually-hidden">Минимальное значение</span></button><span>1</span>
            <button className="filter-raiting__max-toggle"><span className="visually-hidden">Максимальное значение</span></button><span>5</span>
          </div>
        </div> */}
        <RangeSlider
          minRangeValue={minCurrentPrice}
          maxRangeValue={maxCurrentPrice}
          setExternalValues={[setPriceFilterDebounced, setPrice]}
        />
      </div>
      <FilterSpecializationBlock onChange={manyCheckboxesChangeHandle} trainingTypes={trainingTypes} />
      <div className="gym-catalog-form__block gym-catalog-form__block--sort">
        <h4 className="gym-catalog-form__title gym-catalog-form__title--sort">Сортировка</h4>
        <div className="btn-radio-sort gym-catalog-form__radio">
          <FilterSortBlock sortOptionValue={activeSortOption} onChange={handleSortInputChange} />
        </div>
      </div>
    </form>

  );
}

export default TrainingCatalogueFilter;
