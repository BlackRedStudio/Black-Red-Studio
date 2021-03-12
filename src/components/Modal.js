import React, { useState, useEffect } from 'react';

import Button from './Button';
import {
  ModalS,
  ModalCloseS,
  ModalContentS,
  ModalShadowS,
  ModalTitleS,
  ModalWrapperS,
  DividerS,
} from '../styles/ModalStyles';

const Modal = ({ modalName, modalHeader, modalDescription, modalButton }) => {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    const modal = document.querySelectorAll('.modal');
    const body = document.getElementsByTagName('body');
    modal.forEach((v) => {
      v.addEventListener('click', (e) => {
        e.preventDefault();
        if (e.target.getAttribute('modal') === modalName) {
          setOpen(true);
          body[0].classList.add('overflow');
        }
      });
    });
  }, []);

  const closeModal = () => {
    const body = document.getElementsByTagName('body');
    setOpen(false);
    body[0].classList.remove('overflow');
  };

  return (
    <>
      {isOpen && (
        <>
          <ModalS>
            <ModalWrapperS>
              <ModalCloseS onClick={() => closeModal()}>X</ModalCloseS>
              <ModalTitleS>{modalHeader}</ModalTitleS>
              <DividerS>
                <span>⛛</span>
              </DividerS>
              <ModalContentS
                dangerouslySetInnerHTML={{ __html: modalDescription }}
              />
              <Button
                elWidth="100%"
                elType="black"
                elMargin="10px 0 0 0"
                onClick={() => closeModal()}
              >
                {modalButton}
              </Button>
            </ModalWrapperS>
          </ModalS>
          <ModalShadowS />
        </>
      )}
    </>
  );
};

export default Modal;
