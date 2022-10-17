import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { Button } from '@mui/material';

function SizePencil() {
  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Pencil Size
      </Typography>
      <div>
        <Button>Little</Button>
        <Button>Small</Button>
      </div>
      <div>
        <Button>Medium</Button>
        <Button>Big</Button>
      </div>
    </Box>
  )
}

export default SizePencil;