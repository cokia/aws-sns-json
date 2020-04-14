const aws = require('aws-sdk')
aws.config.update({accessKeyId: "", secretAccessKey: "" })
const data = JSON.parse(json);
// for(var i = 0; i<98; i++) {
    var count = 0;
    data.forEach(function(e){
    count ++
    e.name = e.name.replace('-','');
    const message = ""
    const PhoneNumber = "+82"+e.phone;
    const region = 'ap-northeast-1';
    aws.config.update({region: region});
    const params = {
    //   attributes: {
    //     'DefaultSMSType': 'Transactional'
    //   },
      Message: message,
      MessageStructure: 'string',
      PhoneNumber: PhoneNumber
    };
    const publishTextPromise = new aws.SNS({apiVersion: '2010-03-31'}).publish(params).promise();

    publishTextPromise.then(
      function(data1) {
        // console.log("MessageID is " + data1.MessageId + e.name);
                console.log(count + e.name + "MessageID is " + data1.MessageId );
      }).catch(
        function(err) {
        console.log("error")
        console.error(err, err.stack);

      })
      }  )