import { ChangeEvent, Fragment } from 'react';
import { SortOptions } from '../../const';

type FilterSortBlockProps = {
  onChange: (evt: ChangeEvent<HTMLInputElement>) => void;
  sortOptionValue: string;
}

function FilterSortBlock({ onChange, sortOptionValue }: FilterSortBlockProps): JSX.Element {


  const sortOptions = Object.keys(SortOptions);
  return (
    <Fragment>
      {sortOptions.map((item) => {

        const isChecked = sortOptionValue === item;
        return (


          <label
            key={item}
          >
            <input
              type="radio"
              name="sort"
              id={item}
              onChange={onChange}
              checked={isChecked}
              value={item}
            />
            <span className="btn-radio-sort__label">{SortOptions[item]}</span>
          </label>
        );
      })}

    </Fragment>

  );
}


export default FilterSortBlock;
