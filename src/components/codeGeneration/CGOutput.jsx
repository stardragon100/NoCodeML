function outPut(layer){

    return{imports:["import pickle as pk\nfrom sklearn.externals import joblib"],code:["model.fit(X_train,Y_train)\njoblib.dump(model,'"+layer.fileName+"')"]}
}
export default outPut