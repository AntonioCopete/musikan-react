import styled from 'styled-components'
import ListItemText from '@mui/material/ListItemText'

export const ItemText = styled(ListItemText)`
  color: ${({ theme }) => theme.colors.text};
`

export const Table = styled.table`
  display: grid;
  border-collapse: collapse;
  min-width: 100%;
  grid-template-columns:
    minmax(3rem, 7rem)
    minmax(6rem, 10rem)
    minmax(6rem, 1fr)
    minmax(6rem, 1fr)
    minmax(6rem, 1fr)
    minmax(3rem, 7rem);

  thead,
  tbody,
  tr {
    display: contents;
    cursor: pointer;
  }

  th,
  td {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 1rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  th {
    position: sticky;
    top: 0;
    text-align: left;
  }

  th:last-child {
    border: 0;
  }

  td {
    color: white;
  }

  tr:hover {
    background: ${({ theme }) => theme.colors.primaryDark};
  }
`
