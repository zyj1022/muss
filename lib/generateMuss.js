var Promise = require("bluebird"),
    fs = Promise.promisifyAll(require('fs-extra'));

var root = __dirname.replace(/lib/,'')
function generateMuss(project){
  return fs.copyAsync(root + 'core', project)
    .then(function(err){
      return err ?  console.error(err) : console.log('Muss has been installed successfully!');
    })
}

module.exports = generateMuss;
