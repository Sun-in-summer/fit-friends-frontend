// import { ChangeEvent } from 'react';
import { ChangeEvent } from 'react';
import { UserRoles } from '../../const';

type UserRoleBlockProps = {
  onSortOptionChange: (evt: ChangeEvent<HTMLInputElement>) => void;
  roleValue: string;
}

function UserRoleBlock({ onSortOptionChange, roleValue }: UserRoleBlockProps): JSX.Element {

  const roles = Object.values(UserRoles);

  return (
    <div className="btn-radio-sort">
      {roles.map((item) => {
        const isChecked = roleValue === item;
        return (
          <label key={item}>
            <input
              type="radio"
              name="role"
              id={item}
              onChange={onSortOptionChange}
              checked={isChecked}
              value={item}
            />
            <span className="btn-radio-sort__label">{item}</span>
          </label>
        );
      })}

    </div>


  );
}


export default UserRoleBlock;
