import { memo } from 'react';

type GenderOptionProps = {
  genderOption: string;
  activeGenderOption: string | undefined;
  onGenderOptionClick: (option: string) => void;
}

function GenderOption({ genderOption, activeGenderOption, onGenderOptionClick }: GenderOptionProps): JSX.Element {

  return (
    <li
      className={'custom-select__item'}
      tabIndex={-1}
      id={genderOption}
      onClick={() => onGenderOptionClick(genderOption)}
      role="option"
      aria-selected={genderOption === activeGenderOption}
    >
      {genderOption}
    </li>
  );
}

export default memo(GenderOption);
