var for_start = (new Date()).getTime();
var db = connect('mongoTest');
for(var i = 0; i < 1000; i++) {
    db.test02.insert({for_id: i})
}
print('for耗时：' + ((new Date()).getTime() - for_start) + 'ms');
var batch_start = (new Date()).getTime();
var batch_array = [];
for(var i = 0; i < 1000; i++) {
    batch_array.push({batch_id: i});
}
db.test02.insert(batch_array);
print('batch耗时：' + ((new Date()).getTime() - batch_start) + 'ms');