import './Infostyle.css'
import axios from 'axios'
import { Link } from "react-router-dom"
import React, { Component } from 'react';


class Info extends Component{

  constructor(props){
      super(props);
      this.state={
          algorithm:"",
          details:"",
      }
  }
  
  getDetails = (e)=>{
    axios.defaults.withCredentials = true 
    const response= axios.post('http://localhost:8080/info', {
      data : {
          algorithm:e.target.value
      }})
      .then((response) => {
          console.log(response.data.details);
          this.setState({
            details: response.data.details.S
        });
        })
  }

render(){
  return (
    <div className='details'>
    <div className='info-content'>
    <div className='algorithm'>
    {/* <h1 className='name'>Linear Regression</h1> */}
        <button className='infobutton' value="Linear Regression" onClick={(e)=>{this.getDetails(e)}}>Linear Regression</button>
        {/* <a href="https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.LinearRegression.html"><button className='infobutton'>Parameters</button></a> */}
    </div>
    <div className='algorithm'>
    {/* <h1 className='name'>Logistic Regression</h1> */}
        <button className='infobutton' value="Logistic Regression" onClick={(e)=>{this.getDetails(e)}}>Logistic Regression</button>
        {/* <a href="https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.LogisticRegression.html"><button className='infobutton'>Parameters</button></a> */}
      </div>
    <div className='algorithm'>
    {/* <h1 className='name'>SVM</h1> */}
        <button className='infobutton' value="SVM" onClick={(e)=>{this.getDetails(e)}}>SVM</button>
        {/* <a href="https://scikit-learn.org/stable/modules/generated/sklearn.svm.SVC.html"><button className='infobutton'>Parameters</button></a> */}
      </div>
      <div className='algorithm'>
    {/* <h1 className='name'>Decision Tree</h1> */}
    <button className='infobutton' value="Decision Tree" onClick={(e)=>{this.getDetails(e)}}>Decision Tree</button>
        {/* <a href="https://scikit-learn.org/stable/modules/generated/sklearn.tree.DecisionTreeClassifier.html"><button className='infobutton'>Parameters</button></a> */}
      </div>

      <div className='algorithm'>
    {/* <h1 className='name'>Random Forest</h1>
    <h2 className='name1'>Classifier</h2> */}
        <button className='infobutton' value="Random Forest" onClick={(e)=>{this.getDetails(e)}}>Randon Forest</button>
        {/* <a href="https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.RandomForestClassifier.html"><button className='infobutton'>Parameters</button></a> */}
    {/* <h2 className='name1'>Regressor</h2>
        <a href="https://towardsdatascience.com/random-forest-regression-5f605132d19d"><button className='infobutton'>Algorithm</button></a>
        <a href="https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.RandomForestRegressor.html"><button className='infobutton'>Parameters</button></a>  */}
      </div>

      <div className='algorithm'>
    {/* <h1 className='name'>KMeans</h1> */}
        <button className='infobutton' value="KMeans" onClick={(e)=>{this.getDetails(e)}}>KMeans</button>
        {/* <a href="https://scikit-learn.org/stable/modules/generated/sklearn.cluster.KMeans.html"><button className='infobutton'>Parameters</button></a> */}
      </div>

      <div className='algorithm'>
      <button className='infobutton' value="KNN" onClick={(e)=>{this.getDetails(e)}}>KNN</button>
      </div>

      <div className='algorithm'>
    {/* <h1 className='name'>Naive Bayes</h1> */}
      <button className='infobutton' value="Naive Bayes" onClick={(e)=>{this.getDetails(e)}}>Naive Bayes</button>
      </div>
      </div>
      <div className='details'>
      <p className='info-details'>
          {this.state.details.split('\n').map(str => <p className='self-start'>{str}</p>)}
      </p>
      </div>
      </div>
  )
}
}

export default Info;