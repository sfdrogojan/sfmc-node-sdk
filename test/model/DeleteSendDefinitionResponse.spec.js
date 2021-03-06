/**
 * Marketing Cloud REST API
 * Marketing Cloud's REST API is our newest API. It supports multi-channel use cases, is much more lightweight and easy to use than our SOAP API, and is getting more comprehensive with every release.
 *
 * OpenAPI spec version: 1.0.0
 * Contact: mc_sdk@salesforce.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SalesforceMarketingCloud);
  }
}(this, function(expect, SalesforceMarketingCloud) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SalesforceMarketingCloud.DeleteSendDefinitionResponse();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('DeleteSendDefinitionResponse', function() {
    it('should create an instance of DeleteSendDefinitionResponse', function() {
      // uncomment below and update the code to test DeleteSendDefinitionResponse
      //var instane = new SalesforceMarketingCloud.DeleteSendDefinitionResponse();
      //expect(instance).to.be.a(SalesforceMarketingCloud.DeleteSendDefinitionResponse);
    });

    it('should have the property message (base name: "message")', function() {
      // uncomment below and update the code to test the property message
      //var instane = new SalesforceMarketingCloud.DeleteSendDefinitionResponse();
      //expect(instance).to.be();
    });

    it('should have the property requestId (base name: "requestId")', function() {
      // uncomment below and update the code to test the property requestId
      //var instane = new SalesforceMarketingCloud.DeleteSendDefinitionResponse();
      //expect(instance).to.be();
    });

    it('should have the property deletedDefinitionKey (base name: "deletedDefinitionKey")', function() {
      // uncomment below and update the code to test the property deletedDefinitionKey
      //var instane = new SalesforceMarketingCloud.DeleteSendDefinitionResponse();
      //expect(instance).to.be();
    });

  });

}));
