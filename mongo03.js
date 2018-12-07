// var workmate1={ //数据初始化
//     name:'JSPang',
//     age:33,
//     sex:1,
//     job:'前端',
//     skill:{
//         skillOne:'HTML+CSS',
//         skillTwo:'JavaScript',
//         skillThree:'PHP'
//     },
//     regeditTime:new Date(),
//     interest:[]
// }
// var workmate2={
//     name:'ShengLei',
//     age:31,
//     sex:1,
//     job:'JAVA后端',
//     skill:{
//         skillOne:'HTML+CSS',
//         skillTwo:'J2EE',
//         skillThree:'PPT'
//     },
//     regeditTime:new Date(),
//     interest:[]
// }
// var workmate3={
//     name:'MinJie',
//     age:18,
//     sex:0,
//     job:'UI',
//     skill:{
//         skillOne:'PhotoShop',
//         skillTwo:'UI',
//         skillThree:'PPT'
//     },
//     regeditTime:new Date(),
//     interest:[]
// }
// var workmate4={
//     name:'XiaoWang',
//     age:25,
//     sex:1,
//     job:'UI',
//     skill:{
//         skillOne:'PhotoShop',
//         skillTwo:'UI',
//         skillThree:'PPT'
//     },
//     regeditTime:new Date(),
//     interest:[]
// }
// var workmate5={
//     name:'LiangPeng',
//     age:28,
//     sex:1,
//     job:'前端',
//     skill:{
//         skillOne:'HTML+CSS',
//         skillTwo:'JavaScript',
//     },
//     regeditTime:new Date(),
//     interest:[]
// }
// var workmate6={
//     name:'HouFei',
//     age:25,
//     sex:0,
//     job:'前端',
//     skill:{
//         skillOne:'HTML+CSS',
//         skillTwo:'JavaScript',
//     },
//     regeditTime:new Date(),
//     interest:[]
// }
// var workmate7={
//     name:'LiuYan',
//     age:35,
//     sex:0,
//     job:'美工',
//     skill:{
//         skillOne:'PhotoShop',
//         skillTwo:'CAD',
//     },
//     regeditTime:new Date(),
//     interest:[]
// }
// var workmate8={
//     name:'DingLu',
//     age:20,
//     sex:0,
//     job:'美工',
//     skill:{
//         skillOne:'PhotoShop',
//         skillTwo:'CAD',
//     },
//     regeditTime:new Date(),
//     interest:[]
// }
// var workmate9={
//     name:'JiaPeng',
//     age:29,
//     sex:1,
//     job:'前端',
//     skill:{
//         skillOne:'HTML+CSS',
//         skillTwo:'JavaScript',
//         skillThree:'PHP'
//     },
//     regeditTime:new Date(),
//     interest:[]
// }
// var workmate10={
//     name:'LiJia',
//     age:26,
//     sex:0,
//     job:'前端',
//     skill:{
//         skillOne:'HTML+CSS',
//         skillTwo:'JavaScript',
//         skillThree:'PHP'
//     },
//     regeditTime:new Date(),
//     interest:[]
// }
// var db=connect('mongoTest');
// var workmateArray=[workmate1,workmate2,workmate3,workmate4,workmate5,workmate6,workmate7,workmate8,workmate9,workmate10];
// db.workmate.insert(workmateArray);
// print('[SUCCESS]：The data was inserted successfully');

// var db = connect('mongoTest');
// db.workmate.update(
//     {sex: 1},
//     {$set: {money: 998}},
//     false,
//     true
// )
// const resultMessage = db.runCommand({getLastError: true})
// printjson(resultMessage);

// var db = connect('mongoTest');
// var Modify = {
//     findAndModify: "workmate",
//     query: {name: 'LiJia'},
//     update: {$set: {age: 1}},
//     new: true
// }
// const resultMessage = db.runCommand(Modify);
// printjson(resultMessage)

// var db = connect('mongoTest'); //findAndModify只对查询出的数据的第一条执行了update
// var Modify = {
//     findAndModify: "workmate",
//     query: {job: {$ne: '美工'}},
//     update: {$set: {money: 2000}},
//     upsert: false,
//     new: true
// }
// const resultMessage = db.runCommand(Modify);
// printjson(resultMessage)

var db = connect('mongoTest');
db.workmate.find(
    {job: {$ne:'前端'}},
    {name: true, _id: false}
)
const resultMessage = db.runCommand({getListError: 1});
printjson(resultMessage);