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
    instance = new SalesforceMarketingCloud.Asset();
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

  describe('Asset', function() {
    it('should create an instance of Asset', function() {
      // uncomment below and update the code to test Asset
      //var instane = new SalesforceMarketingCloud.Asset();
      //expect(instance).to.be.a(SalesforceMarketingCloud.Asset);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new SalesforceMarketingCloud.Asset();
      //expect(instance).to.be();
    });

    it('should have the property customerKey (base name: "customerKey")', function() {
      // uncomment below and update the code to test the property customerKey
      //var instane = new SalesforceMarketingCloud.Asset();
      //expect(instance).to.be();
    });

    it('should have the property contentType (base name: "contentType")', function() {
      // uncomment below and update the code to test the property contentType
      //var instane = new SalesforceMarketingCloud.Asset();
      //expect(instance).to.be();
    });

    it('should have the property data (base name: "data")', function() {
      // uncomment below and update the code to test the property data
      //var instane = new SalesforceMarketingCloud.Asset();
      //expect(instance).to.be();
    });

    it('should have the property assetType (base name: "assetType")', function() {
      // uncomment below and update the code to test the property assetType
      //var instane = new SalesforceMarketingCloud.Asset();
      //expect(instance).to.be();
    });

    it('should have the property version (base name: "version")', function() {
      // uncomment below and update the code to test the property version
      //var instane = new SalesforceMarketingCloud.Asset();
      //expect(instance).to.be();
    });

    it('should have the property locked (base name: "locked")', function() {
      // uncomment below and update the code to test the property locked
      //var instane = new SalesforceMarketingCloud.Asset();
      //expect(instance).to.be();
    });

    it('should have the property fileProperties (base name: "fileProperties")', function() {
      // uncomment below and update the code to test the property fileProperties
      //var instane = new SalesforceMarketingCloud.Asset();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new SalesforceMarketingCloud.Asset();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new SalesforceMarketingCloud.Asset();
      //expect(instance).to.be();
    });

    it('should have the property category (base name: "category")', function() {
      // uncomment below and update the code to test the property category
      //var instane = new SalesforceMarketingCloud.Asset();
      //expect(instance).to.be();
    });

    it('should have the property tags (base name: "tags")', function() {
      // uncomment below and update the code to test the property tags
      //var instane = new SalesforceMarketingCloud.Asset();
      //expect(instance).to.be();
    });

    it('should have the property content (base name: "content")', function() {
      // uncomment below and update the code to test the property content
      //var instane = new SalesforceMarketingCloud.Asset();
      //expect(instance).to.be();
    });

    it('should have the property design (base name: "design")', function() {
      // uncomment below and update the code to test the property design
      //var instane = new SalesforceMarketingCloud.Asset();
      //expect(instance).to.be();
    });

    it('should have the property superContent (base name: "superContent")', function() {
      // uncomment below and update the code to test the property superContent
      //var instane = new SalesforceMarketingCloud.Asset();
      //expect(instance).to.be();
    });

    it('should have the property customFields (base name: "customFields")', function() {
      // uncomment below and update the code to test the property customFields
      //var instane = new SalesforceMarketingCloud.Asset();
      //expect(instance).to.be();
    });

    it('should have the property views (base name: "views")', function() {
      // uncomment below and update the code to test the property views
      //var instane = new SalesforceMarketingCloud.Asset();
      //expect(instance).to.be();
    });

    it('should have the property blocks (base name: "blocks")', function() {
      // uncomment below and update the code to test the property blocks
      //var instane = new SalesforceMarketingCloud.Asset();
      //expect(instance).to.be();
    });

    it('should have the property minBlocks (base name: "minBlocks")', function() {
      // uncomment below and update the code to test the property minBlocks
      //var instane = new SalesforceMarketingCloud.Asset();
      //expect(instance).to.be();
    });

    it('should have the property maxBlocks (base name: "maxBlocks")', function() {
      // uncomment below and update the code to test the property maxBlocks
      //var instane = new SalesforceMarketingCloud.Asset();
      //expect(instance).to.be();
    });

    it('should have the property channels (base name: "channels")', function() {
      // uncomment below and update the code to test the property channels
      //var instane = new SalesforceMarketingCloud.Asset();
      //expect(instance).to.be();
    });

    it('should have the property allowedBlocks (base name: "allowedBlocks")', function() {
      // uncomment below and update the code to test the property allowedBlocks
      //var instane = new SalesforceMarketingCloud.Asset();
      //expect(instance).to.be();
    });

    it('should have the property slots (base name: "slots")', function() {
      // uncomment below and update the code to test the property slots
      //var instane = new SalesforceMarketingCloud.Asset();
      //expect(instance).to.be();
    });

    it('should have the property businessUnitAvailability (base name: "businessUnitAvailability")', function() {
      // uncomment below and update the code to test the property businessUnitAvailability
      //var instane = new SalesforceMarketingCloud.Asset();
      //expect(instance).to.be();
    });

    it('should have the property sharingProperties (base name: "sharingProperties")', function() {
      // uncomment below and update the code to test the property sharingProperties
      //var instane = new SalesforceMarketingCloud.Asset();
      //expect(instance).to.be();
    });

    it('should have the property template (base name: "template")', function() {
      // uncomment below and update the code to test the property template
      //var instane = new SalesforceMarketingCloud.Asset();
      //expect(instance).to.be();
    });

    it('should have the property file (base name: "file")', function() {
      // uncomment below and update the code to test the property file
      //var instane = new SalesforceMarketingCloud.Asset();
      //expect(instance).to.be();
    });

    it('should have the property generateFrom (base name: "generateFrom")', function() {
      // uncomment below and update the code to test the property generateFrom
      //var instane = new SalesforceMarketingCloud.Asset();
      //expect(instance).to.be();
    });

  });

}));
