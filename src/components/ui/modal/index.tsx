import React from 'react';
import { IoMdClose } from 'react-icons/io';
import ReactModal from 'react-modal';

import * as styles from './styles';
import { LineDivider } from '../line-divider';
import { Button } from '../button';

export type ModalProps = {
  isOpen: boolean;
  setIsOpen: (active: boolean) => void;
  title: string;
  children: React.ReactNode;
};

ReactModal.setAppElement('#root');

export function Modal({ isOpen, setIsOpen, title, children }: ModalProps) {
  return (
    <styles.Modal
      isOpen={isOpen && isOpen}
      onRequestClose={() => setIsOpen(false)}
    >
      <styles.Wrapper>
        <styles.Header>
          <h4>
            {title}
          </h4>

        <styles.Close>
          <Button variant='none' onClick={() => {
            setIsOpen(false);
          }}>
            <IoMdClose size={24} color='#EAECF0' />
          </Button>
        </styles.Close>
        </styles.Header>
        <LineDivider />

        <styles.Content>
          {children}
        </styles.Content>
      </styles.Wrapper>
    </styles.Modal>
  )
}