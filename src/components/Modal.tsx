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
  background: #fff;
  border-radius: 5px;
`

export default function Modal() {
  return (
    <ModalLayout>
      <ModalContent>
        <button>&times;</button>
      </ModalContent>
    </ModalLayout>
  )
}