import Navbar from './components/navbar/Navbar'
import Board from './components/board/Board'
import Toolbar from './components/toolbar/ToolBar';
import { Grid } from '@mui/material';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Grid container spacing={4} sx={{ p: 6 }}>
        <Grid item xs={2}>
          <Toolbar />
        </Grid>
        <Grid item xs={10}>
        <Board />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;