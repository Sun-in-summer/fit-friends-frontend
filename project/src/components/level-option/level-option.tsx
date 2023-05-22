import { memo } from 'react';

type LevelOptionProps = {
  levelOption: string;
  activeLevelOption: string | undefined;
  onLevelOptionClick: (option: string) => void;
}

function LevelOption({ levelOption, activeLevelOption, onLevelOptionClick }: LevelOptionProps): JSX.Element {


  return (
    <li
      className={'custom-select__item'}
      tabIndex={-1}
      id={levelOption}
      onClick={() => onLevelOptionClick(levelOption)}
      role="option"
      aria-selected={levelOption === activeLevelOption}
    >
      {levelOption}
    </li>
  );
}

export default memo(LevelOption);
