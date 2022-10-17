import Colors from './tools/Colors'
import SizePencil from './tools/SizePencil';
import { Box } from '@mui/system';

function Toolbar () {
  return (
    <Box>
      <Colors />
      <SizePencil />
    </Box>
  )
}

export default Toolbar;