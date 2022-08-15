import React from 'react';
import {
     Router,
     Route,
     Switch
} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import Splashscreen from './components/splashScreen';
import Selectgame from './components/selectGame';
import Mathgames from './components/mathgames';
import Measurementgame from './components/measurementgame';
import Addition from './components/addition';
import Substraction from './components/substraction';
import Division from './components/division';
import Multiplication from './components/multiplication';
import Liters from './components/liters';
import Noneliter from './components/noneliter';
import music from './assets/music/music.mp3';

const custombrowserhistory = createBrowserHistory();
const url = music;
let audio = new Audio(url);

const Routes = () => (
     <Router history={custombrowserhistory}>
          <Switch>
               <Route exact path="/"  render={(props)=>
    <Splashscreen history={custombrowserhistory} audiodd={audio}  /> } />
               <Route exact path="/selectgame" render={(props)=>
    <Selectgame audiodd={audio} /> } />
               <Route exact path="/Mathgames" render={(props)=>
    <Mathgames audiodd={audio} /> } />
               <Route exact path="/Measurementgame" render={(props)=>
    <Measurementgame audiodd={audio} /> } />
               <Route exact path="/Addition" render={(props)=>
    <Addition history={custombrowserhistory} audiodd={audio} /> } />
               <Route exact path="/Substraction" render={(props)=>
    <Substraction history={custombrowserhistory} audiodd={audio} /> } />
               <Route exact path="/Division" render={(props)=>
    <Division history={custombrowserhistory} audiodd={audio} /> } />
               <Route exact path="/Multiplication" render={(props)=>
    <Multiplication history={custombrowserhistory} audiodd={audio} /> } />
               <Route exact path="/Liters" render={(props)=>
    <Liters history={custombrowserhistory} audiodd={audio} /> } />
               <Route exact path="/Noneliter" render={(props)=>
    <Noneliter history={custombrowserhistory} audiodd={audio} /> } />
          </Switch>
     </Router>
)

export default Routes;