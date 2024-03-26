import { useMemo } from "react";
import { useSelector } from "react-redux";

import { RootState } from "@/store";
import { 
  useDeleteContactMutation, 
  useGetContactByGroupQuery 
} from "@/store/reducers/contact";

import { Contact } from "@/types/contacts.types";
import { LineDivider } from "@/components/ui/line-divider";

import { getFirstCharacter } from "@/helper/getFirstCharacter";

import * as styles from './styles';

export type ContactsProps = {
  contacts: Contact[];
}

export function Contacts({ contacts }: ContactsProps) {
  const searchContact = useSelector<RootState, string>((state) => state.search.value);
  const group = useSelector<RootState, Contact['group']>((state) => state.search.group);

  const { data } = useGetContactByGroupQuery(group ?? 'Todos');
  const [deleteContact] = useDeleteContactMutation();

  const renderContact = useMemo(() => {
    if (group === 'Familia') {
      return data ?? [];
    }

    return contacts;
  }, [contacts, data, group])
  .filter(contact => contact.name.toLowerCase().includes(searchContact));

  return (
    <>    
      <styles.Container>
        {renderContact.map(contact => (
          <styles.Contact key={contact.id}>
            <styles.Info>
              <styles.Initials>{getFirstCharacter({ value: contact.name })}</styles.Initials>
              <styles.Name>{contact.name}</styles.Name>
            </styles.Info>
            <styles.Actions>
              <button onClick={() => {
                deleteContact(contact.id as string)
              }}>delete</button>
            </styles.Actions>
          </styles.Contact>
        ))}
      </styles.Container>
      <LineDivider />
    </>
  );
}