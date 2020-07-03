var redis = require('redis')
var client = redis.createClient() //매개변수 없으면 127.0.0.1:6379

client.on('error', function(err) {
  console.log('Error' + err)
})

client.set('testKey', 'testValue', redis.print) //redis.print는 결과 출력함 (없어도됨)

client.get('testKey', function(err, value){
  if (err) throw err;
  console.log("value: "+value)
})
