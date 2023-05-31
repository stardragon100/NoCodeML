function decisionTree(layer) {
   
    return {imports:["from sklearn import trees"],code:["model=trees.DecisionTreeClassifier(splitter="+layer.splitter+",min_samples_split="+layer.min_samples_split+",random_state="+layer.random_state+" )"]}
   
}

export default decisionTree;