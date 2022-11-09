import { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';

const ModalLayout = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.4);
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1;
  margin: auto;
`

const ModalContent = styled.div`
  width: 500px;
  height: 700px;
  margin: 150px auto;
  background: #eee;
  border-radius: 5px;
  padding: 10px;
  position: relative;
`

const CloseBtn = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  border-radius: 50%;
`

const EditBtn = styled.button`
  display: flex;
  margin: 0 auto;
  padding: 5px 10px;
  cursor: pointer;
`

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 75%;
  margin: 25px auto;
  & > input {
    width: 100%;
    margin-top: 5px;
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
    box-shadow: 0px 1px 1px 1px rgba(0,0,0,0.2);
    &:disabled {
      cursor: not-allowed;
    }
  }
  & > textarea {
    width: 100%;
    margin-top: 5px;
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
    box-shadow: 0px 1px 1px 1px rgba(0,0,0,0.2);
    &:disabled {
      cursor: not-allowed;
    }
  }
`

type BookType = {
  title?: string;
  author?: string;
  description?: string;
  website?: string;
  category?: string;
  id: number;
}

export default function Modal({ id }: BookType) {
  const [book, setBook] = useState<BookType>();
  const [readyToEdit, setReadyToEdit] = useState(false);
  useEffect(() => {
    const getBookDetails = async () => {
      const res = await fetch(`https://deno-testing-api.deno.dev/api/books/${id}`);
      const data = await res.json();
      setBook(data.data.document);
    }
    getBookDetails();
  }, [id])
  return (
    <ModalLayout>
      <ModalContent>
        <h1>Book Details</h1>
        <CloseBtn>
          <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="25px" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </CloseBtn>
        <form>
          <InputWrapper>
            <label htmlFor="title">Title</label>
            <input disabled={!readyToEdit} type="text" value={book?.title} />
          </InputWrapper>
          <InputWrapper>
            <label htmlFor="author">Author</label>
            <input disabled={!readyToEdit} type="text" value={book?.author} />
          </InputWrapper>
          <InputWrapper>
            <label htmlFor="description">Description</label>
            <textarea disabled={!readyToEdit} value={book?.description} />
          </InputWrapper>
          <InputWrapper>
            <label htmlFor="website">website</label>
            <input disabled={!readyToEdit} type="text" value={book?.website} />
          </InputWrapper>
          <InputWrapper>
            <label htmlFor="category">category</label>
            <input disabled={!readyToEdit} type="text" value={book?.category} />
          </InputWrapper>
        </form>
        <EditBtn onClick={() => setReadyToEdit(true)}>
          Edit
        </EditBtn>
      </ModalContent>
    </ModalLayout>
  )
}