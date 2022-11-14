import { Location } from 'react-router-dom';

const getUserNameFromUrl = (location: Location): string | undefined => {
  const { pathname } = location;
  const pathnameArr = pathname.split('@');
  pathnameArr.shift();
  const userName = pathnameArr.join('');
  return userName;
};

export { getUserNameFromUrl };
