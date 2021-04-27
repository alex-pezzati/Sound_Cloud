import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from 'react-redux';

import LandingPage from "./components/LandingPage";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import NavBar from "./components/upper_navbar/NavBar";
import SongPageRoute from "./components/songPage";
import SongNavBar from "./components/song_navbar";
import UploadPicture from "./services/AWS";
import UploadSong from "./components/song_upload_form/AWS_Song";
import User from "./components/user_profile/User";


import { restoreSession } from "./store/session";


function App() {
  const dispatch = useDispatch();

  const [isLoaded, setIsLoaded] = useState(false);


  // Try to restore the user
  useEffect(() => {
    (async() => {
      dispatch(restoreSession())
      setIsLoaded(true)
    })()
  }, [dispatch])


  return (
    isLoaded && (
      <BrowserRouter>
        <NavBar isLoaded={isLoaded} />
        <SongNavBar isLoaded={isLoaded} />
        <Switch>
          <Route path="/" exact={true}>
            <LandingPage />
          </Route>
          <Route path="/songs/:songId">
            <SongPageRoute/>
          </Route>
          <ProtectedRoute
            path="/users/:username"
            exact={true}
          >
            <User />
          </ProtectedRoute>
          <ProtectedRoute
            path="/upload"
          >
            <UploadSong />
            <UploadPicture />
          </ProtectedRoute>
        </Switch>
        <SongNavBar />
      </BrowserRouter>
    )

  );
}

export default App;
