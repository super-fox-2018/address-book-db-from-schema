class Parser {
  static parse(inputs) {
    const option = inputs[2];
    const props = {};
    const prefix = {};
    for (let i = 3; i < inputs.length; i += 2) {
      const input = inputs[i].slice(2);
      if (input === 'byId') {
        prefix.id = inputs[i + 1];
      } else if (input === 'byUsername') {
        prefix.username === inputs[i+1];
      } else {
        if (option === 'assign' && i === 3) {
          props[input] = inputs[i+1].split(',');
        } else {
          props[input] = inputs[i + 1];
        }
      }
    }

    return { option, prefix, props }
  }
}

module.exports = Parser;