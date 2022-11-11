import {
  Dispatch, MutableRefObject, SetStateAction, useEffect,
} from 'react';

/* method stolen from https://stackoverflow.com/a/42234988 */
const useClickOutside = (
  ref: MutableRefObject<null>,
  setVisible: Dispatch<SetStateAction<boolean>>,
) => {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      // @ts-expect-error
      if (ref.current && !ref.current.contains(event.target)) {
        setVisible(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);
};

export { useClickOutside };
