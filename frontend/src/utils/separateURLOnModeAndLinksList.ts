import { Location } from 'react-router-dom';

const separateURLOnModeAndLinksList = (location: Location) => location.search?.split('?');

export { separateURLOnModeAndLinksList };
