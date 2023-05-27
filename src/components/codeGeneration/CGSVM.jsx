function SVM(layer) {
    if(layer.random_state!='')
    {
    return {import:["from sklearn import svm"],code:["model=svm.SVC(kernel='"+layer.kernel+"',C="+layer.c+",degree="+layer.degree+",gamma='"+layer.gamma+"',random_state="+layer.random_state+" )"]}
    }
    else
    return {import:["from sklearn import svm"],code:["model=svm.SVC(kernel='"+layer.kernel+"',C="+layer.c+",degree="+layer.degree+",gamma='"+layer.gamma+"' )"]}

}

export default SVM;