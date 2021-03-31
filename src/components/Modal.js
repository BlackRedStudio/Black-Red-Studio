import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

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
  const modalRef = useRef(null);
  const modalShadowRef = useRef(null);
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    const modal = document.querySelectorAll('.modal');
    const body = document.getElementsByTagName('body');
    modal.forEach(v => {
      v.addEventListener('click', e => {
        e.preventDefault();
        if (e.target.getAttribute('modal') === modalName) {
          setOpen(true);
          body[0].classList.add('overflow');
        }
      });
    });
  }, []);
  useEffect(() => {
    gsap.from(modalRef.current, { duration: 1, y: '-100vh' });
    gsap.from(modalShadowRef.current, { duration: 1, opacity: 0 });
  });

  const closeModal = () => {
    gsap.to(modalRef.current, { duration: 0.5, y: '-100vh' });
    gsap.to(modalShadowRef.current, {
      duration: 0.5,
      opacity: 0,
      onComplete: () => {
        const body = document.getElementsByTagName('body');
        setOpen(false);
        body[0].classList.remove('overflow');
      },
    });
  };

  return (
    <>
      {isOpen && (
        <>
          <ModalS ref={modalRef}>
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
                isLink={false}
                click={() => closeModal()}
              >
                {modalButton}
              </Button>
            </ModalWrapperS>
          </ModalS>
          <ModalShadowS ref={modalShadowRef} />
        </>
      )}
    </>
  );
};

export default Modal;
