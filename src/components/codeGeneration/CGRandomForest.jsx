function randomForest(layer) {
    if(layer.choice=='Classifier')
        return {imports:["from sklearn import ensemble"],code:["model=ensemble.RandomForestClassifier((n_esitmators="+layer.n_estimators+",criterion="+layer.criterion+",min_sample_split="+layer.min_sample_split+",max_features="+layer.max_features+" )"]}
    else
        return {imports:["from sklearn import ensemble"],code:["model=ensemble.RandomForestRegressor((n_esitmators="+layer.n_estimators+",criterion="+layer.criterion+",min_sample_split="+layer.min_sample_split+",max_features="+layer.max_features+" )"]}
 
}

export default randomForest;