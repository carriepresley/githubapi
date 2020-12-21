import './App.css';
import React, {useEffect, useState} from 'react';
import List from './Components/List';
import WishListLoading from './Components/WishListLoading';
import axios from "axios";

function App (){
  const ListLoading = WishListLoading(List);
  const [appState, setAppState]= useState({
    loading: false,
    repos: null,
  });

  useEffect(()=>{
    setAppState({loading: true});
    const apiUrl = `https://api.github.com/users/carriepresley/repos`;
    axios.get(apiUrl).then((repos)=>{
      const allRepos = repos.data;
      setAppState({loading: false, repos:allRepos});
    });
  }, [setAppState]);

  return(
    <div className = "App">
      <div className = "container">
        <h1>GitHub API with Axios</h1>
      </div>
      <div className = "repo-container">
        <ListLoading isLoading = {appState.loading} repos ={appState.repos}/>
      </div>
      <footer>
      
        <div className='footer'>
          Made with{' '}
          <span role='img' aria-label='love'>
            💚
          </span>{' '}
          in TX
        </div>
      </footer>
     
    </div>
  );

};

export default App;