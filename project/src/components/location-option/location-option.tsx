import { memo } from 'react';

type LocationOptionProps = {
  locationOption: string;
  activeLocationOption: string;
  onLocationOptionClick: (option: string) => void;
}

function LocationOption({locationOption, activeLocationOption, onLocationOptionClick}: LocationOptionProps): JSX.Element {


  return (
    <li
      className={'custom-select__item'}
      tabIndex={-1}
      id= {locationOption}
      onClick = {()=> onLocationOptionClick(locationOption)}
      role= "option"
      aria-selected ={ locationOption === activeLocationOption}
    >
      {locationOption}
    </li>
  );
}

export default memo(LocationOption);
