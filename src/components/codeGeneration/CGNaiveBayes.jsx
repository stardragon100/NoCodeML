function naiveBayes(layer)
{
    
    if(layer.estimator==='BernoulliNB')
    {
        return{imports:["from sklearn import naive_bayes"],code:["model=naive_bayes.BernoulliNB()"]}
    }
    else if(layer.estimator==='GaussianNB')
    {
        return{imports:["from sklearn import naive_bayes"],code:["model=naive_bayes.GaussianNB()"]}
    }
    else if(layer.estimator==='ComplementNB')
    {
        return{imports:["from sklearn import naive_bayes"],code:["model=naive_bayes.ComplementNB()"]}
    }
    else if(layer.estimator==='MultinomialNB')
    {
        return{imports:["from sklearn import naive_bayes"],code:["model=naive_bayes.MultinomialNB()"]}
    }
    
}

export default naiveBayes;