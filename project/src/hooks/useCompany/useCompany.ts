import { useAppSelector } from '..';
import { UserRole } from '../../const';

import { getCompany, getUser } from '../../store/user-process/selector';
import { ExtendedUser } from '../../types/user.interface';


function useCompany (): ExtendedUser[] {


  const usersForCompany = useAppSelector(getCompany);
  const user = useAppSelector(getUser);
  const selectedTypes = user?.trainingType;
  const filteredUsersForCompany = usersForCompany.filter((userForCompany) => userForCompany.role !== UserRole.Coach);
  const selectedUsersForCompany = filteredUsersForCompany.filter((userForCompany) =>selectedTypes?.includes(userForCompany.trainingType[0]));

  return selectedUsersForCompany;

}

export default useCompany;
