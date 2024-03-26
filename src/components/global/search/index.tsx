import { IoMdClose } from 'react-icons/io';
import { IoSearch } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';

import { LineDivider } from '@/components/ui/line-divider';
import { search } from '@/store/reducers/search';

import * as styles from './styled';
import { RootState } from '@/store';

export function Search() {
  const value = useSelector((state: RootState) => state.search.value);
  const dispatch = useDispatch();

  return (
    <styles.Search>
      <styles.Label htmlFor="search">
        <IoSearch color='#667085' size={20} />
        <styles.Input id="search" placeholder='Contatos' autoComplete='off' type='text' value={value} onChange={(event) => {
          dispatch(search(event.target.value))
        }} />
        <styles.Close type="button" onClick={() => {
          dispatch(search(''))
        }}>
          <IoMdClose size={24} color='#EAECF0' />
        </styles.Close>
      </styles.Label>

      <LineDivider />
    </styles.Search>
  );
}
