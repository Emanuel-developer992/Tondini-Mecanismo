function resolve(process, colleague) {

    var userList = new java.util.ArrayList();

    var cGrupo = DatasetFactory.createConstraint("mgroupID", "grupo_1","grupo_1", ConstraintType.SHOULD);

    var arrayconstraints = new Array(cGrupo);

    var arreyGroup = DatasetFactory.getDataset("dsCliente_Mecanismo", null, arrayconstraints, null);


	for(var g = 0; g < arreyGroup.values.length; g++){
        userList.add(arreyGroup.getValue(g.toString(),"mcolleagueID"));


    }
    
    return userList;
}