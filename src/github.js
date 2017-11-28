const GitHub = {
  repos: {
    edwin:{
      repos:{
    '1': {
      name: 'Edwin',
      description: 'Hacker',
      starred: 'true'
    },
    '2': {
      name: 'Jeff',
      description: 'Hacker',
      starred: 'false'
    }
  }
},
jeff:{
  repos:{
    '1': {
      name: 'Edwin',
      description: 'Hacker',
      starred: 'true'
    },
    '2': {
      name: 'Jeff',
      description: 'Hacker',
      starred: 'false'
    }
  }
}
  }
  method(query, subject, username){
    let usernameRepos = (username) => {
      return repos.username.repos;
    }
    if(subject === 'starred'){
      repos.username.repos.filter(val => (val.starred))
    }
    let subject = (subject) => {}
    let details = (query) => {}
  }
};

module.exports = GitHub;
