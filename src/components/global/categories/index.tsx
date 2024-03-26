import { useEffect, useMemo, useState } from 'react';
import queryString from 'query-string';
import { useDispatch } from 'react-redux';

import { group as groupReducer } from '@/store/reducers/search';
import { useGetContactsQuery } from '@/store/reducers/contact';

import { LineDivider } from "@/components/ui/line-divider";
import { CategoryType } from "@/types/categories";
import { Contact } from '@/types/contacts.types';

import * as styles from './styles';

export type CategoriesProps = {
  list: CategoryType[];
}

export function Categories({ list }: CategoriesProps) {
  const [searchGroup, setSearchGroup] = useState<Contact['group']>('Todos');
  const dispatch = useDispatch();
  const { group } = queryString.parse(document.location.search);

  const { data } = useGetContactsQuery();

  useEffect(() => {
    if (group) {
      dispatch(groupReducer(group as Contact['group']));
      setSearchGroup(group as Contact['group']);
    }
  }, [dispatch, group]);

  const getFamilyLength = useMemo(() => {
    return data?.filter(contact => contact.group === 'Familia').length ?? 0;
  }, [data]);

  return (
    <>
      <styles.Categories>
        {list.map(category => (
          <styles.Category key={category.title} $menuactive={searchGroup === category.title} onClick={() => {
            window.history.pushState({}, "", `?group=${category.title}`)
            setSearchGroup(category.title);
          }}>
            <styles.Label>{category.title}</styles.Label>
            <styles.Size>{category.title === 'Familia' ? getFamilyLength : data?.length}</styles.Size>
          </styles.Category>
        ))}

      </styles.Categories>
      <LineDivider />
    </>
  )
}