import { ChangeEvent, Fragment } from 'react';
import { GenderNames } from '../../const';

type SignUpGenderBlockProps = {
  onChange: (evt: ChangeEvent<HTMLInputElement>) => void;
  genderValue: string;
}

function SignUpGenderBlock({ onChange, genderValue }: SignUpGenderBlockProps): JSX.Element {

  const genders = Object.values(GenderNames);
  return (
    <Fragment>
      {genders.map((item) => {
        const isChecked = genderValue === item;
        return (
          <div className="custom-toggle-radio__block" key={item}>
            <label>
              <input
                type="radio"
                name="sex"
                id={item}
                onChange={onChange}
                checked={isChecked}
                value={item}
              />
              <span className="custom-toggle-radio__icon">
              </span><span className="custom-toggle-radio__label">{item}</span>
            </label>
          </div>
        );
      })}

    </Fragment>

  );
}


export default SignUpGenderBlock;
