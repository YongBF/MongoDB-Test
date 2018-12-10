# 这是我学习完MongoDB总结出的命令
MongoDB 命令

服务启动：mongod

链接命令：mongo

查看存在数据库命令：show dbs

查看数据库版本命令：db.version()

使用或建立数据库：use admin(数据库名称)

显示数据库中的集合：show collections

显示当前位置：db

新建数据集合和插入数据：db.集合.insert( )

查询所有数据：db.集合.find( )

查询第一个文件数据：db.集合.findOne( )

修改文件数据：db.集合.update({查询},{修改})

删除文件数据：db.集合.remove({条件})

删除整个集合：db.集合.drop( )

删除整个数据库：db.dropDatabase( )

$set修改指定属性：
db.workmate.update({"name":"MinJie"},{"$set":{"skill.skillThree":'word'}})

$unset删除一个key值和键：
db.workmate.update({"name":"MinJie"},{$unset:{"age":''}})

$inc对数字进行计算：db.workmate.update({"name":"MinJie"},{$inc:{"age":-2}})

multi设置匹配属性全部修改：
db.workmate.update({},{$set:{interset:[]}},{multi:true})

upsert无数据则直接插入：
db.workmate.update({name:'xiaoWang'},{$set:{age:20}},{upsert:true})

$push追加数组/内嵌数据：
db.workmate.update({name:'xiaoWang'},{$push:{interest:'draw'}})

$ne查找是否存在，没有则修改有则不变：
db.workmate.update({name:'xiaoWang',"interest":{$ne:'playGame'}},{$push:{interest:'Game'}})

$addToSet 升级版的$ne：
db.workmate.update({name:"xiaoWang"},{$addToSet:{interest:"readBook"}})

$each 批量追加：
newInterset=["Sing","Dance","Code"];

db.workmate.update({name:"xiaoW"},{$addToSet:{interest:{$each:newInterset}}})

$pop 删除数组值，1->从数组末端进行删，-1->从数组开端进行删：
db.workmate.update({name:'xiaoWang'},{$pop:{interest:1}})

数组定位修改：db.workmate.update({name:'xiaoWang'},{$set:{"interest.2":"Code"}})

数据库运行命令的执行器：db.runCommand()

db.workmate.update({sex:1},{$set:{money:1000}},false,true)

var resultMessage=db.runCommand({getLastError:1})

printjson(resultMessage);

查找并修改: findAndModify

var myModify={

findAndModify:"workmate",

query:{name:'JSPang'},

update:{$set:{age:18}},

new:true //更新完成，需要查看结果，如果为false不进行查看结果

}

var ResultMessage=db.runCommand(myModify);

不等查询：

小于($lt):英文全称less-than

小于等于($lte)：英文全称less-than-equal

大于($gt):英文全称greater-than

大于等于($gte):英文全称greater-than-equal

不等于($ne):英文全称not-equal

多条件查询：

$in修饰符：{age:{$in:[25,33]}}

$or修饰符：{$or:[{age:{$gte:30}}, {"skill.skillThree":'PHP'}]}

$and修饰符：{$and:[{age:{$gte:30}}, {"skill.skillThree":'PHP'}]}

$not修饰符：{ age:{ $not:{ $lte:30, $gte:20 } } }

$all-数组多项查询：{interest:{$all:["看电影","看书"]}}又看电影又看书

$in-数组的或者查询：{interest:{$in:["看电影","看书"]}}

$size-数组个数查询：{interest:{$size:5}}兴趣数量为5

$slice-显示选项：interest:{$slice:2}兴趣前两项

分页查询：dbd .workmate.find({},{name:true,age:true}).limit(5).skip(2).sort({age:1})

跳过5条，显示两条，并且按照年龄从小到大的顺序排列

hasNext循环结果：while(result.hasNext()){ printjson(result.next()) }

forEach循环：result.forEach(function(result){ printjson(result) })

建立索引：db.randomInfo.ensureIndex({username:1})

查看现有索引：db.randomInfo.getIndexes()

索引注意点：

数据不超万条时，不需要使用索引。性能的提升并不明显，而大大增加了内	存和硬盘的消耗。

查询数据超过表数据量30%时，不要使用索引字段查询。实际证明会比不使	用索引更慢，因为它大量检索了索引表和我们原表。

数字索引，要比字符串索引快的多，在百万级甚至千万级数据量面前，使用	数字索引是个明确的选择。

把你经常查询的数据做成一个内嵌数据(对象型的数据)，然后集体进行索引

指定索引查询hint：
db.randomInfo.find({username:'7xwb8y3',randNum0:565509}).hint({randNum0:1});

删除索引：db.randomInfo.dropIndex('randNum0_1');//索引的name而不是key

全文索引：db.info.ensureIndex({contextInfo:'text'});//text标识为全文索引

全文索引查找：db.info.find({$text:{$search:"programmer"}})

$text:表示要在全文索引中查东西。$search:后边跟查找的内容。

全文查找多个词：db.info.find({$text:{$search:"programmer family diary -drink"}});	空格为或，非则加-

全文查找连着的词：db.info.find({$text:{$search:"\"love PlayGame\" drink"}});
使用转义符\

创建用户：db.createUser({

user:"jspang",

pwd:"123456",

customData:{

name:'技术胖',

email:'web0432@126.com',

age:18,

},

roles:[

{

role:"readWrite",

db:"company"

},

'read'

]

})

内置角色：

数据库用户角色：read、readWrite；

数据库管理角色：dbAdmin、dbOwner、userAdmin;

集群管理角色：clusterAdmin、clusterManager、clusterMonitor、hostManage；

备份恢复角色：backup、restore；

所有数据库角色：readAnyDatabase、readWriteAnyDatabase、	userAdminAnyDatabase、dbAdminAnyDatabase

超级用户角色：root

内部角色：__system

具体角色职能：

Read：允许用户读取指定数据库

readWrite：允许用户读写指定数据库

dbAdmin：允许用户在指定数据库中执行管理函数，如索引创建、删除，查	看统计或访问system.profile

userAdmin：允许用户向system.users集合写入，可以找指定数据库里创建、	删除和管理用户

clusterAdmin：只在admin数据库中可用，赋予用户所有分片和复制集相关	函数的管理权限。

readAnyDatabase：只在admin数据库中可用，赋予用户所有数据库的读权限

readWriteAnyDatabase：只在admin数据库中可用，赋予用户所有数据库的	读写权限

userAdminAnyDatabase：只在admin数据库中可用，赋予用户所有数据库的	userAdmin权限

dbAdminAnyDatabase：只在admin数据库中可用，赋予用户所有数据库的	dbAdmin权限。

root：只在admin数据库中可用。超级账号，超级权限

查询用户信息：db.system.users.find()

删除用户：db.system.users.remove({user:"jspang"})

启动登录认证：mongod --auth

登录：mongo -u user -p psw 127.0.0.1:27017/admin或db.auth("user","psw")

数据备份：mongodump

--host 127.0.0.1

--port 27017

--out D:/databack/backup

--collection myCollections

--db test

--username username

--password password

数据恢复：mongorestore

--host 127.0.0.1

--port 27017

--username username

--password password
