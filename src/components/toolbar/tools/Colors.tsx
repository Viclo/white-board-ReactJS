import { Fab } from "@mui/material";
import BorderColorIcon from '@mui/icons-material/BorderColor';
import PaletteIcon from '@mui/icons-material/Palette';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';

function Colors () {

  return (
    <Box  sx={{ mt: 2 }}>
      <Typography variant="h4" gutterBottom>
        Colors
      </Typography>
      <div>
        <Fab size="small" color="error" aria-label="edit">
          <BorderColorIcon />
        </Fab>
        <Fab size="small" color="primary" aria-label="edit">
          <BorderColorIcon />
        </Fab>
      </div>
      <div>
      <Fab size="small" color="warning" aria-label="edit">
          <BorderColorIcon />
        </Fab>
        <Fab size="small" color="default" aria-label="edit">
          <PaletteIcon />
        </Fab>
      </div>
    </Box>
  )
}

export default Colors;