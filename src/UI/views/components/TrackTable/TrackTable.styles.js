import styled from 'styled-components'
import ListItemText from '@mui/material/ListItemText'

export const ItemText = styled(ListItemText)`
  color: ${({ theme }) => theme.colors.text};
`

export const Table = styled.table`
  /* margin: 0 0 40px 0 */
  width: 100%;
  box-shadow: 0 1px 3px rgba(0,0,0,0.2);
  display: table;
  @media screen and (max-width: 580px) {
    display: block;
  }
.row {
  display: table-row;
  background: #f6f6f6;
  
  &:nth-of-type(odd) {
    background: #e9e9e9;
  }
  &.header {
    font-weight: 900;
    color: #ffffff;
    background: #ea6153;
  }
  &.green {
    background: #27ae60;
  }
  &.blue {
    background: #2980b9;
  }
  @media screen and (max-width: 580px){
    padding: 14px 0 7px;
    display: block;
  }
    &.header {
      padding: 0;
      height: 6px;
      
      .cell {
        display: none;
      }
      }
    .cell {
      margin-bottom: 10px;
      
      &:before {
        margin-bottom: 3px;
        content: attr(data-title);
        min-width: 98px;
        font-size: 10px;
        line-height: 10px;
        font-weight: bold;
        text-transform: uppercase;
        color: #969696;
        display: block;
      }
    }
.cell{
  padding: 6px 12px;
  display: table-cell;
  @media screen and (max-width: 580px) {
    padding: 2px 16px;
    display: block;
  }
  }
`
