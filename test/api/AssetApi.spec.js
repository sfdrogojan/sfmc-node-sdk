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

const ApiSutFactory = require('./ApiSutFactory');

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

  let instance;
  let apiSutFactory;

  beforeEach(()=>{
    apiSutFactory = new ApiSutFactory();
    apiSutFactory.type = SalesforceMarketingCloud.AssetApi.prototype.constructor;
    instance = apiSutFactory.getApiSut();
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

  describe('AssetApi', function() {
    describe('createAsset', function() {
      it('should call createAsset successfully', function(done) {

        let opts = {
          'body' : new SalesforceMarketingCloud.Asset()
        }

        instance.createAsset(opts).then(function (data) {
          console.log('Returned data: ' + data);
        }, function (error) {
          console.log(error);
        });
        done();
      });
    });
    describe('deleteAssetById', function() {
      it('should call deleteAssetById successfully', function(done) {
        //uncomment below and update the code to test deleteAssetById
        //instance.deleteAssetById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAssetById', function() {
      it('should call getAssetById successfully', function(done) {
        //uncomment below and update the code to test getAssetById
        //instance.getAssetById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('partiallyUpdateAssetById', function() {
      it('should call partiallyUpdateAssetById successfully', function(done) {
        //uncomment below and update the code to test partiallyUpdateAssetById
        //instance.partiallyUpdateAssetById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
