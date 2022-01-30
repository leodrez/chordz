
import Chord from '@tombatossals/react-chords/lib/Chord'

import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <Routes>
      <Route
        path="/"
        exact
        element={<Home />}
      />
    </Routes>

  )

}

export default App;
