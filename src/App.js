import React from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { LandingPage } from './components/LandingPage';
import NewContact from './components/NewContact';
import UpdateContact from './components/UpdateContact';



function App() {
  return (
    <Layout>
            <Route exact path='/' component={LandingPage} />    
            <Route exact path='/add' component={NewContact} />
            <Route exact path='/edit' component={UpdateContact} /> 
      </Layout>
  );
}

export default App;
