import { useDeleteContactMutation, useGetContactByIdQuery } from "@/store/reducers/contact";

import { Modal } from "@/components/ui/modal";

import * as styles from './styles';
import { getFirstCharacter } from "@/helper/getFirstCharacter";
import { LineDivider } from "@/components/ui/line-divider";
import { EditContactModal } from "../edit";
import { useState } from "react";

export type CreateContactModalProps = {
  setIsOpen: (active: boolean) => void;
  isOpen: boolean;
  id: string;
}

export function ViewContactModal({ isOpen, setIsOpen, id }: CreateContactModalProps) {
  const [editModal, setEditModal] = useState(false);

  const { data } = useGetContactByIdQuery(id);
  const [deleteContact] = useDeleteContactMutation()

  return (
    <>
      <Modal
        title="Detalhes do Contato"
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        children={
          <styles.Contact>
            <styles.Info>
              <styles.Initials>{getFirstCharacter({ value: data?.name ?? '' })}</styles.Initials>
              <styles.Name>{data?.name}</styles.Name>
            </styles.Info>

            <LineDivider />

            <styles.Content>
              <styles.Details>
                <styles.Tag>Telefone</styles.Tag>
                <styles.Value>{data?.telphone}</styles.Value>
              </styles.Details>

              <LineDivider />

              <styles.Details>
                <styles.Tag>Celular</styles.Tag>
                <styles.Value>{data?.cellphone}</styles.Value>
              </styles.Details>

              <LineDivider />

              <styles.Details>
                <styles.Tag>Celular do Trabalho</styles.Tag>
                <styles.Value>{data?.work_celphone}</styles.Value>
              </styles.Details>
            </styles.Content>

            <LineDivider />

            <styles.Actions>
              <styles.ButtonAction variant="outline" onClick={() => {
                deleteContact(id);
                setIsOpen(false);
              }}>
                Deletar
              </styles.ButtonAction>
              <styles.ButtonAction variant="primary" onClick={() => {
                setIsOpen(false);
                setEditModal(true);
              }}>
                Editar
              </styles.ButtonAction>
            </styles.Actions>
          </styles.Contact>
        }
      />
      <EditContactModal id={id} setIsOpen={setEditModal} isOpen={editModal} />
    </>
  )
}