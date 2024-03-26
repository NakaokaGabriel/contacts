import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { CreateContactModal } from '@/components/shared/modal/contact/create';

import * as styles from './styles';

export function Actions() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
    <styles.Action>
      <Button text='Novo Contato' onClick={() => setOpenModal(true)} />
    </styles.Action>
    <CreateContactModal setIsOpen={setOpenModal} isOpen={openModal} />
    </>
  )
}