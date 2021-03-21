const test = [
    {colleagueGroupPKcompanyId: '1', colleagueGroupPKcolleagueId: '002', colleagueGroupPKgroupId: 'group_1'},
    {colleagueGroupPKcompanyId: '1', colleagueGroupPKcolleagueId: 'bode', colleagueGroupPKgroupId: 'group_1'}
]

//test.forEach(dados => {

    for(var g = 0; g < test.values.length; g++){
        console.log(test.values(g.toString(),"colleagueGroupPKcolleagueId") );
    }


//})