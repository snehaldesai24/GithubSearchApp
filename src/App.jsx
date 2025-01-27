import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import SearchBar from './components/SearchBar';
import ProfileCard from './components/ProfileCard';
import UserDetails from './components/UserDetails';

const App = () => {
  return (
    <Provider store={store}>
      <div className="container shadow mt-3 p-3 w-75 mx-auto">
        <div className="row">
          <h1 className="text-primary text-center my-4">GitHub Search Application</h1>
          <SearchBar />
        </div>
        <div className="row ">
          <div className="col-4 ">
            <ProfileCard />
          </div>
          <div className="col-8">
            <UserDetails />
          </div>
        </div>
      </div>
    </Provider>
  );
};

export default App;
