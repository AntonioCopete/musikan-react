import { Table } from './TrackTable.styles'

function TrackTable({ button, children }) {
  return (
    <Table>
      <thead>
        <tr>
          <td>{button}</td>
          <td>COVER</td>
          <td>TRACK</td>
          <td>ARTIST</td>
          <td>GENRE</td>
          <td>{'action'}</td>
        </tr>
      </thead>

      <tbody>{children}</tbody>
    </Table>
  )
}

export default TrackTable
