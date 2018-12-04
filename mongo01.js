var user = 'Tom';
var loginTime = (new Date()).getTime();
var db = connect('admin');
db.test.insert({'user': user, 'loginTime': loginTime});
print('insert success');