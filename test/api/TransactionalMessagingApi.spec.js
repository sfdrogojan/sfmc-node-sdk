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

  let JOHN_DOE_GMAIL_COM = "johnDoe@gmail.com";
  let JOHANNA_DOE_YAHOO_COM = "johannaDoe@yahoo.com";
  let HTML_EMAIL_ASSET_TYPE_ID = 208;

  let assetApiInstance;
  let transactionalMessagingApiInstance;

  before(()=>{
    transactionalMessagingApiInstance = new ApiSutFactory(SalesforceMarketingCloud.TransactionalMessagingApi.prototype.constructor).create();
    assetApiInstance = new ApiSutFactory(SalesforceMarketingCloud.AssetApi.prototype.constructor).create();
  });

  describe('TransactionalMessagingApi', function() {
    this.timeout(30000);

    describe('createEmailDefinition', function() {
      it('should call createEmailDefinition successfully', async ()=> {
        let emailDefinition = await createEmailDefinitionObject();
        let opts = {'body':emailDefinition};
        // let createEmailDefinitionResult = await transactionalMessagingApiInstance.createEmailDefinition(opts);

        try {
          let createEmailDefinitionResult = await  transactionalMessagingApiInstance.createEmailDefinition(opts);
        }
        catch (e) {
          console.error(e);
        }
        // expect(createEmailDefinitionResult.name).to.eql(emailDefinition.name);
        // expect(createEmailDefinitionResult.definitionKey).to.eql(emailDefinition.definitionKey);
        // expect(createEmailDefinitionResult.content.customerKey).to.eql(emailDefinition.content.customerKey);
      });
    });
    describe('createSmsDefinition', function() {
      it('should call createSmsDefinition successfully', function(done) {
        //uncomment below and update the code to test createSmsDefinition
        //instance.createSmsDefinition(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteEmailDefinition', function() {
      it('should call deleteEmailDefinition successfully', async ()=> {
      });
    });
    describe('deleteQueuedMessagesForEmailDefinition', function() {
      it('should call deleteQueuedMessagesForEmailDefinition successfully', async ()=> {
      });
    });
    describe('deleteQueuedMessagesForSmsDefinition', function() {
      it('should call deleteQueuedMessagesForSmsDefinition successfully', function(done) {
        //uncomment below and update the code to test deleteQueuedMessagesForSmsDefinition
        //instance.deleteQueuedMessagesForSmsDefinition(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteSmsDefinition', function() {
      it('should call deleteSmsDefinition successfully', function(done) {
        //uncomment below and update the code to test deleteSmsDefinition
        //instance.deleteSmsDefinition(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getEmailDefinition', function() {
      it('should call getEmailDefinition successfully', async ()=> {
      });
    });
    describe('getEmailDefinitions', function() {
      it('should call getEmailDefinitions successfully', async ()=> {
      });
    });
    describe('getEmailSendStatusForRecipient', function() {
      it('should call getEmailSendStatusForRecipient successfully', async ()=> {
      });
    });
    describe('getEmailsNotSentToRecipients', function() {
      it('should call getEmailsNotSentToRecipients successfully', async ()=> {
      });
    });
    describe('getQueueMetricsForEmailDefinition', function() {
      it('should call getQueueMetricsForEmailDefinition successfully', async ()=> {
      });
    });
    describe('getQueueMetricsForSmsDefinition', function() {
      it('should call getQueueMetricsForSmsDefinition successfully', function(done) {
        //uncomment below and update the code to test getQueueMetricsForSmsDefinition
        //instance.getQueueMetricsForSmsDefinition(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSMSsNotSentToRecipients', function() {
      it('should call getSMSsNotSentToRecipients successfully', function(done) {
        //uncomment below and update the code to test getSMSsNotSentToRecipients
        //instance.getSMSsNotSentToRecipients(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSmsDefinition', function() {
      it('should call getSmsDefinition successfully', function(done) {
        //uncomment below and update the code to test getSmsDefinition
        //instance.getSmsDefinition(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSmsDefinitions', function() {
      it('should call getSmsDefinitions successfully', function(done) {
        //uncomment below and update the code to test getSmsDefinitions
        //instance.getSmsDefinitions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSmsSendStatusForRecipient', function() {
      it('should call getSmsSendStatusForRecipient successfully', function(done) {
        //uncomment below and update the code to test getSmsSendStatusForRecipient
        //instance.getSmsSendStatusForRecipient(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('partiallyUpdateEmailDefinition', function() {
      it('should call partiallyUpdateEmailDefinition successfully', async ()=> {
      });
    });
    describe('partiallyUpdateSmsDefinition', function() {
      it('should call partiallyUpdateSmsDefinition successfully', function(done) {
        //uncomment below and update the code to test partiallyUpdateSmsDefinition
        //instance.partiallyUpdateSmsDefinition(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('sendEmailToMultipleRecipients', function() {
      it('should call sendEmailToMultipleRecipients successfully', async ()=> {
      });
    });
    describe('sendEmailToSingleRecipient', function() {
      it('should call sendEmailToSingleRecipient successfully', async ()=> {
      });
    });
    describe('sendSmsToMultipleRecipients', function() {
      it('should call sendSmsToMultipleRecipients successfully', function(done) {
        //uncomment below and update the code to test sendSmsToMultipleRecipients
        //instance.sendSmsToMultipleRecipients(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('sendSmsToSingleRecipient', function() {
      it('should call sendSmsToSingleRecipient successfully', function(done) {
        //uncomment below and update the code to test sendSmsToSingleRecipient
        //instance.sendSmsToSingleRecipient(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

  async function createEmailDefinitionObject() {
    let asset = createAssetObject();
    let opts = {'body': asset};

    let createAssetResponse = await assetApiInstance.createAsset(opts);
    let customerKey = createAssetResponse.customerKey;

    let emailDefinitionName = 'EmailDefinition ' + getUUID(10);
    let emailDefinitionKey= 'EmailDefinition ' + getUUID(10);
    let emailDefinitionContent = new SalesforceMarketingCloud.CreateEmailDefinitionContent(customerKey);
    let emailDefinitionSubscriptions = new SalesforceMarketingCloud.CreateEmailDefinitionSubscriptions("All Subscribers");

    return new SalesforceMarketingCloud.CreateEmailDefinitionRequest(emailDefinitionName, emailDefinitionKey, emailDefinitionContent, emailDefinitionSubscriptions);
  }

  function createAssetObject() {
    let customerKey = getUUID(10);
    let assetType = new SalesforceMarketingCloud.AssetType(HTML_EMAIL_ASSET_TYPE_ID, 'htmlemail');
    let assetName = 'Asset ' + getUUID(10);
    let assetDescription = 'Asset from Automated Node.js SDK';
    let asset = new SalesforceMarketingCloud.Asset(customerKey, assetType, assetName, assetDescription);

    asset.views = {
      'subjectLine':{
        'content':'New TS Subject Line'
      }
    };

    return asset;
  }

  function getUUID(length){
    return Math.random().toString(16).substring(0, length);
  }
}));
