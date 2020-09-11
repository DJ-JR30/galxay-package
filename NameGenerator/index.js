function FirstName() {
  var UseFirstName = require('./FirstNames.json');
  
  var FirstPickOne = UseFirstName(Math.random() * UseFirstName.length);
  
  return FirstPickOne;
}