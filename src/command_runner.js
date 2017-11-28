const GitHub = require('./src/GitHub')


const CommandRunner{
  constructor(){}
  run = (obj){
    let responseObj = obj;
    GitHub(obj.query, obj.subject, obj.userName)
    if(obj.query === 'detials'){
      responseObj.result = [] //list of objects returned from api
    }
    if(obj.subject === 'repos'){
      responseObj.result = [] //array of repo objects
    }
    return responseObj;
  }
}
