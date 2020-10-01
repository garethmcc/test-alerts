'use strict';
const uuid = require('uuid')

module.exports.hello = async event => {
  const timestamp = Date.now()
  if (timestamp % 2 === 0) {
    return new Error(uuid.v4())
  }
  
  return true

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
