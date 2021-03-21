function resolve(process, colleague) {

    var userList = new java.util.ArrayList();

    var cGrupo = DatasetFactory.createConstraint("group1Id", "grupo_1","grupo_1", ConstraintType.SHOULD);

    var arrayconstraints = new Array(cGrupo);

    var arreyGroup = DatasetFactory.getDataset("dsIndex", null, arrayconstraints, null);


	for(var g = 0; g < arreyGroup.values.length; g++){
        userList.add(arreyGroup.getValue(g.toString(),"colleague1Id"));


    }
    
    return userList;
}