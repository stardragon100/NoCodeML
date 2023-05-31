function kNN(layer) {
    if(layer.choice=='Classifier')
        return {imports:["from sklearn import neighbors"],code:["model=neighbors.KNeighborsClassifier(n_neighbors="+layer.number_negihbours+",algorithm="+layer.algorithm+",weights="+layer.weights+" )"]}
    else
        return {imports:["from sklearn import neighbors"],code:["model=neighbors.KNeighborsRegressor(n_neighbors="+layer.number_negihbours+",algorithm="+layer.algorithm+",weights="+layer.weights+" )"]}
 
}

export default kNN;