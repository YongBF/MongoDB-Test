var user = 'Tom';
var loginTime = (new Date()).toString();
var db = connect('mongoTest');
db.test01.insert({'user': user, 'loginTime': loginTime});
print('insert success');