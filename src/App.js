import { BrowserRouter, Route, Routes } from 'react-router-dom'

import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetup';
import FavoritesPage from './pages/Favorites';

function App() {
  //localhost: 3000
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={ <AllMeetupsPage /> }/>
          <Route exact path="/new-meetup" element={ <NewMeetupPage /> } />
          <Route exact path="/favorite" element={ <FavoritesPage /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
