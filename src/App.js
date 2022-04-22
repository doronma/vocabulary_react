import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import './App.css';
import AppBarComp from './components/AppBarComp';
import DisplayWords from './components/DisplayWords';
function App() {
  return (
    <div className="App">
      <AppBarComp />
      <CssBaseline />
      <br />
      <Container >
        <Box sx={{ bgcolor: '#cfe8fc', height: '80vh' }} >
          <br />
          <DisplayWords />
        </Box>
      </Container>
    </div>
  );
}

export default App;
