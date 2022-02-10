import styled from 'styled-components'
import ListItemText from '@mui/material/ListItemText'

export const ModalContent = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  height: 90vh;
  max-width: 800px;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 3rem;
  transform: translate(-50%, -50%);
  background-color: ${({ theme }) =>
    theme ? theme.colors.background : 'transparent'};
  color: ${({ theme }) => theme.colors.text};
  border-radius: 5px;
  border: 3px solid ${({ theme }) => theme.colors.primary};

  @media ${(props) => props.theme.breakpoints.md} {
    height: 100%;
    border: 0;
  }
`

export const FormModal = styled.form`
  width: 100%;
  padding: 4rem;
  overflow: auto;
`

export const SectionModal = styled.section`
  display: flex;
  justify-content: space-between;
  margin: 3rem 0;
  overflow: auto;

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

export const ItemText = styled(ListItemText)`
  color: ${({ theme }) => theme.colors.text};
`
