
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




function App() {


  <SideBar/>
  
  return (

    <div className="App">
        <Switch>   
        
        <Route exact path="/"><Commonpage/></Route> 
      
      <Route  path="/tables"><Tablespage/></Route>

      <Route  path="/colors"><Colorspage/></Route>

      <Route path="/animation"><Animationpage/></Route>

      <Route path="/borders"><Borderspage/></Route>

      <Route  path="/others"><Otherspage/></Route>
     
      <Route  path="/cards" ><Cardspage/></Route>

      <Route  path="/buttonspage"><Buttonspage/></Route>
    

         <Route  path="/logpage">  <Loginpage/></Route>

      <Route  path="/blankpage"><Blankpage/></Route>

      <Route  path="/forgetpage"><Forgetpassword/></Route>

      <Route  path="/register">  <NewAccount/></Route>


     <Route  path="**"><Errorpage/></Route>
     


     
      
    
 </Switch>

 

   
   

  
    
    </div>
  );
}

export default App;
