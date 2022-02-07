import styled from 'styled-components'

export const ModalContent = styled.div`
position: relative
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 800px;
  width: 100%;
  background-color: ${({ theme }) =>
    theme ? theme.colors.background : 'transparent'};
  color: ${({ theme }) => theme.colors.text};
  border-radius: 5px;
  padding: 3rem;
  border: 3px solid ${({ theme }) => theme.colors.primary};

  @media ${(props) => props.theme.breakpoints.md} {
    height: 100%;
    border: 0;
  }
`

export const FormModal = styled.form`
  width: 100%;
  padding: 4rem;
`

export const SectionModal = styled.section`
  display: flex;
  justify-content: space-between;
  margin: 3rem 0;

  @media ${(props) => props.theme.breakpoints.md} {
    flex-direction: column;
  }
`

export const SectionInputs = styled.div`
  width: 100%;
  margin: 0 2rem;

  @media ${(props) => props.theme.breakpoints.md} {
    margin: 0;
  }
`

export const LabelFile = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 4rem;
  margin: 1rem;
  font-weight: 600;
  border-radius: 3.0625rem;
  border: ${(props) => `2px solid ${props.theme.colors.text}`};
  outline: none;
  background-color: transparent;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
  }
`

export const ImageField = styled.img`
  border-radius: 5px;
  width: 100%;
`

export const InputFile = styled.input`
  display: none;
`

export const FooterModal = styled.footer`
  display: flex;
  justify-content: flex-end;

  button {
    margin-left: 2rem;
  }
`
