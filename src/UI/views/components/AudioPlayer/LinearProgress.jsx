import * as React from 'react'
import LinearProgress from '@mui/material/LinearProgress'
import Box from '@mui/material/Box'

function LinearProgressWithLabel(props) {
  return <LinearProgress variant="determinate" {...props} />
}

export default function LinearWithValueLabel() {
  const [progress, setProgress] = React.useState(80)

  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgressWithLabel value={progress} />
    </Box>
  )
}
