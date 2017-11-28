class ResponseFormatter {


//the user griselda has 2 public repos

  format(returnObj){
      if (returnObj.subject === 'count'){
        let responce = `the user ${returnObj.name} has ${returnObj.repos.length} ${returnObj.query}`
  } else if (returnObj.subject === 'details') {

  }


}
