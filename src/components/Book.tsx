import { useState } from 'react';
import styled from 'styled-components';
import Modal from './Modal';

const BookStyles = styled.button<{ active: boolean }>`
  display: flex;
  flex-direction: column;
  background: ${props => props.active ? '#eee' : '#fff'};
  border-radius: 5px;
  border: none;
  box-shadow: 0px 2px 4px 4px rgba(0,0,0,0.2);
  width: 150px;
  height: 200px;
  padding: 10px;
  &:hover {
    background: rgba(255,255,255,0.2);
    cursor: pointer;
  }
  h2 {
    font-size: 16px;
  }
  h3 {
    font-size: 12px;
  }
`

const DetailsBtn = styled.svg`
  margin: auto auto;
`;

type BookType = {
  title: string;
  author: string;
  id: number;
}

export default function Book({ id, title, author }: BookType) {
  const [showDetailsBtn, setShowDetailsBtn] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const showButtons = () => {
    setShowDetailsBtn(!showDetailsBtn);
  }

  return (
    <BookStyles active={showDetailsBtn} onClick={() => setShowModal(!showModal)} onMouseEnter={showButtons} onMouseLeave={showButtons}>
      <h2>{title}</h2>
      <h3>{author}</h3>
      {showDetailsBtn && (
        <DetailsBtn onClick={() => console.log('Clicked Details Button')} xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </DetailsBtn>
      )}
      {showModal && <Modal id={id} />}
    </BookStyles>
  )
}