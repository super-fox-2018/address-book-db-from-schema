const viewHelp = require ('../View/viewHelp.js');


class ControllerHelp{
  constructor(){

  }

  static help(){
    viewHelp.displayHelp();
  }
}

module.exports = ControllerHelp;