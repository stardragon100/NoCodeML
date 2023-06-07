import React from 'react'
import './Infostyle.css'
const Info = () => {
  return (
    <div className='info-content'>
    <div className='algorithm'>
    <h1 className='name'>Linear Regression</h1>
        <a href="https://www.analyticsvidhya.com/blog/2021/10/everything-you-need-to-know-about-linear-regression/"><button className='infobutton'>Algorithm</button></a>
        <a href="https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.LinearRegression.html"><button className='infobutton'>Parameters</button></a>
    </div>
    <div className='algorithm'>
    <h1 className='name'>Logistic Regression</h1>
        <a href="https://www.analyticsvidhya.com/blog/2021/08/conceptual-understanding-of-logistic-regression-for-data-science-beginners/"><button className='infobutton'>Algorithm</button></a>
        <a href="https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.LogisticRegression.html"><button className='infobutton'>Parameters</button></a>
      </div>
    <div className='algorithm'>
    <h1 className='name'>SVM</h1>
        <a href="https://www.analyticsvidhya.com/blog/2021/10/support-vector-machinessvm-a-complete-guide-for-beginners/"><button className='infobutton'>Algorithm</button></a>
        <a href="https://scikit-learn.org/stable/modules/generated/sklearn.svm.SVC.html"><button className='infobutton'>Parameters</button></a>
      </div>
      <div className='algorithm'>
    <h1 className='name'>Decision Tree</h1>
        <a href="https://www.analyticsvidhya.com/blog/2021/08/decision-tree-algorithm/"><button className='infobutton'>Algorithm</button></a>
        <a href="https://scikit-learn.org/stable/modules/generated/sklearn.tree.DecisionTreeClassifier.html"><button className='infobutton'>Parameters</button></a>
      </div>
      <div className='algorithm'>
    <h1 className='name'>Random Forest</h1>
        <a href="https://www.analyticsvidhya.com/blog/2021/06/understanding-random-forest/"><button className='infobutton'>Algorithm</button></a>
        <a href="https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.RandomForestClassifier.html"><button className='infobutton'>Parameters</button></a>
      </div>
      <div className='algorithm'>
    <h1 className='name'>KMeans</h1>
        <a href="https://www.analyticsvidhya.com/blog/2021/11/understanding-k-means-clustering-in-machine-learningwith-examples/"><button className='infobutton'>Algorithm</button></a>
        <a href="https://scikit-learn.org/stable/modules/generated/sklearn.cluster.KMeans.html"><button className='infobutton'>Parameters</button></a>
      </div>
      <div className='algorithm'>
    <h1 className='name'>KNN</h1>
        <a href="https://www.analyticsvidhya.com/blog/2018/03/introduction-k-neighbours-algorithm-clustering/"><button className='infobutton'>Algorithm</button></a>
        <a href="https://scikit-learn.org/stable/modules/generated/sklearn.neighbors.KNeighborsClassifier.html"><button className='infobutton'>Parameters</button></a>
      </div>
      <div className='algorithm'>
    <h1 className='name'>Naive Bayes</h1>
        <a href="https://www.analyticsvidhya.com/blog/2017/09/naive-bayes-explained/"><button className='infobutton'>Algorithm</button></a>
        {/* <a href="https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.RandomForestClassifier.html"><button className='infobutton'>Parameters</button></a> */}
      </div>
    </div>
  )
}

export default Info