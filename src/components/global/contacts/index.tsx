import { useMemo, useState } from "react";
import { useSelector } from "react-redux";

import { RootState } from "@/store";
import {
  useGetContactByGroupQuery 
} from "@/store/reducers/contact";

import { Contact } from "@/types/contacts.types";
import { LineDivider } from "@/components/ui/line-divider";
import { ViewContactModal } from "@/components/shared/modal/contact/view";

import { getFirstCharacter } from "@/helper/getFirstCharacter";

import * as styles from './styles';

export type ContactsProps = {
  contacts: Contact[];
}

export function Contacts({ contacts }: ContactsProps) {
  const [id, setId] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const searchContact = useSelector<RootState, string>((state) => state.search.value);
  const group = useSelector<RootState, Contact['group']>((state) => state.search.group);

  const { data } = useGetContactByGroupQuery(group ?? 'Todos');

  const renderContact = useMemo(() => {
    if (group === 'Familia') {
      return data ?? [];
    }

    return contacts;
  }, [contacts, data, group])
  .filter(contact => contact.name.toLowerCase().includes(searchContact));

  function emptyContact() {
    if (!renderContact.length) {
      return <p>Nenhum Contato encontrado</p>;
    }
  }

  return (
    <>    
      <styles.Container>
        {emptyContact()}
        {renderContact.map(contact => (
          <styles.Contact key={contact.id}>
            <styles.Info>
              <styles.Initials>{getFirstCharacter({ value: contact.name })}</styles.Initials>
              <styles.Name>{contact.name}</styles.Name>
            </styles.Info>
            <styles.Actions>
              <styles.ButtonAction variant="outline" onClick={() => {
                setId(contact.id as string);
                setOpenModal(true);
              }}>Ver Detalhes</styles.ButtonAction>
            </styles.Actions>
          </styles.Contact>
        ))}
      </styles.Container>
      <LineDivider />
      <ViewContactModal id={id} setIsOpen={setOpenModal} isOpen={openModal}  />
    </>
  );
}