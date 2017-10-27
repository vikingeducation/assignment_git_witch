# assignment_git_witch
A command line natural language-ish GitHub querying machine, written test-first with modularity in mind.

## Maddie Rajavasireddy    

### Assignment Description:    The GitWitch app   

1. CLI    
The CLI module should take any arguments passed to the node process (process.env), concatenate them into a string, and then pass them along to gitWitch.process(). It should then console.log() the string returned by the instance of GitWitch you've just called process on. One should be able to call $ ./src/CLI.js how many repos does griselda have? to run the application    
2. GitWitch    
This is the main module of your application code. However, it won't be very complex. GitWitch exists to compose smaller modules together in the correct order. GitWitch will take the input question string and pass it to an instance of QuestionParser, which should then return a command object that will be fed into an instance of CommandRunner, which will itself return a response object which will be fed into an instance of ResponseFormatter, which will finally return the formatted response string which can be returned. A test file for GitWitch will be included in the assignment    

3. QuestionParser    
As seen above, this module will process the question string and return a properly formatted command object. The nice thing about this module is that it's independent of the rest of the system. Because there are no collaborators or dependencies and we take a simple data structure (a string) as input, it will be a breeze to test. A test file for QuestionParser will be included in the assignment    

4. CommandRunner
This module should take a command input—those objects returned by the QuestionParser with a username, subject, and query—and return a response object. The response object should share the username, subject, and query properties, but it should also contain a results property. If the query is "details", then the results property should be a list of objects of the given subject for the given user. So, if the subject is "repos", then it should contain a list of simple repo objects (perhaps with a name and description) property     

5. GitHub
The CommandRunner should not deal with calls to the GitHub API, itself. Instead, it should depend on this GitHub module. This means that the CommandRunner should be tested using a mock GitHub object    

6. ReponseFormatter
This module should take a response object—like those returned by the CommandRunner—and return a string output. This string should be the response that will be output to the command line. See the example output above, right beneath the Your Task header. Just like the QuestionParser, this module has no collaborators and should be quite simple to test   


### Commands: 
to run app, in root directory:    
`node ./src/GitWitchCli.js what repos does maddie have?`    
for running IntegrationSpec:   
`jasmine-node ./spec/IntegrationSpec.js`    

