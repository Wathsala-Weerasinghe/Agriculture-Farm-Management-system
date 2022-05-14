import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import createSalary from './components/createSalary';
import NavBar from './components/NavBar';
import salaryDetails from './components/salaryDetails';
import HomeSalary from './components/HomeSalary';
import editSalary from './components/editSalary';
import HomeBudget from './components/HomeBudget';
import createBudget from './components/createBudget';
import budgetDetails from './components/budgetDetails';
import editBudget from './components/editBudget';
import budgetForecast from './components/BudgetForecast';
import Header from './components/Header';
import Footer from './components/footer';
import AddConf from './components/AddConf';
import AllConfs from './components/AllConfs';
import Inventory from './components/Inventory';
import UI from './components/UI';
import Add from './components/Add';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
       <Header/>
       
      <div className="container">
      
        <Route path="/" exact component={HomeSalary}></Route>
        <Route path="/add" component={createSalary}></Route>
        <Route path="/update/:id" component={editSalary}></Route>
        <Route path="/post/:id" component={salaryDetails}></Route>
        <Route path="/i" component={HomeBudget}></Route>
        <Route path="/addCosts" component={createBudget}></Route>
        <Route path="/updateC/:id" component={editBudget}></Route>
        <Route path="/cost/:id" component={budgetDetails}></Route>
        <Route path="/budgetforecast" component={budgetForecast}></Route>
        <Route path="/c/" component={AllConfs}></Route>
        <Route path="/addconfirm" component={AddConf}></Route>
        <Route exact  path="/UI" component={UI}/>
        <Route path="/inventory" component={Inventory}/>
        <Route path="/addseed" component={Add}/>
      </div>
        
      <Footer/>

      </BrowserRouter>
     
    );
  }
}
export default App;