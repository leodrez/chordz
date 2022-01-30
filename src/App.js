import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Saved from './pages/Saved';
import Scales from './pages/Scales';
import Chords from './pages/Chords';
import Chord from './pages/Chord';

function App() {

  return (
    <Routes>

      <Route
        path="/"
        exact
        element={<Home />}
      />

      <Route
        path="/chords"
        exact
        element={<Chords />}
      />

      <Route
        exact
        path="/chords/:chordId"
        element={<Chord />}
      />
      <Route
        path="/scales"
        exact
        element={<Scales />}
      />

      <Route
        path="/saved"
        exact
        element={<Saved />}
      />

    </Routes>

  )

}

export default App;
