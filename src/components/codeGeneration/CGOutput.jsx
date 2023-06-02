function outPut(layer){

    return{imports:["\nimport pickle\n"],code:["\npickle.dump(model,open('"+layer.fileName+"','wb'))"]}
}
export default outPut