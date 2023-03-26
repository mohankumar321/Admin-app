
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Loginpage from './compenent/loginpage';
import Forgetpassword from './compenent/forgetpassword';
import NewAccount from './compenent/Newacc';
import Errorpage from './compenent/Errorpage';
import { Route, Switch } from 'react-router-dom';
import Blankpage from './compenent/Blankpage';
import Buttonspage from './compenent/buttons';
import SideBar from './compenent/sidebar';
import Cardspage from './compenent/cards';
import Otherspage from './compenent/otherspage';
import Colorspage from './compenent/colors';
import Animationpage from './compenent/animation';
import Borderspage from './compenent/borders';
import Tablespage from './compenent/tables';
import Commonpage from './compenent/common';
import MyComponent from './compenent/redirect';













function App() {


  <SideBar/>
  
  return (

    <div className="App">
        <Switch>   
        
      <Route exact path="/dashboard"><Commonpage/></Route> 
      
      <Route exact path="/tables"><Tablespage/></Route>

      <Route exact path="/colors"><Colorspage/></Route>

      <Route path="/"><MyComponent /></Route>
        


      <Route exact path="/animation"><Animationpage/></Route>

      <Route exact path="/borders"><Borderspage/></Route>

      <Route exact path="/others"><Otherspage/></Route>
     
      <Route exact path="/cards" ><Cardspage/></Route>

      <Route exact path="/buttonspage"><Buttonspage/></Route>
    

         <Route exact path="/logpage">  <Loginpage/></Route>

      <Route exact path="/blankpage"><Blankpage/></Route>

      <Route exact path="/forgetpage"><Forgetpassword/></Route>

      <Route exact path="/register">  <NewAccount/></Route>

     <Route  path="**"><Commonpage/></Route>

     <Route  path="/**"><Errorpage/></Route>
     
     <Route exact path="/dashboard"><Commonpage/></Route> 

     
      
    
 </Switch>

 

   
   

  
    
    </div>
  );
}

export default App;
