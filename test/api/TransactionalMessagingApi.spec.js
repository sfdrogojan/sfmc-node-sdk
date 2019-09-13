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
    this.timeout(40000);

    describe('createEmailDefinition', function() {
      it('should call createEmailDefinition successfully', async ()=> {
        let emailDefinition = await createEmailDefinitionObject();
        let opts = {'body':emailDefinition};

        let createEmailDefinitionResult = await transactionalMessagingApiInstance.createEmailDefinition(opts);

        expect(createEmailDefinitionResult.name).to.eql(emailDefinition.name);
        expect(createEmailDefinitionResult.definitionKey).to.eql(emailDefinition.definitionKey);
        expect(createEmailDefinitionResult.content.customerKey).to.eql(emailDefinition.content.customerKey);
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
      it('should call deleteEmailDefinition successfully when definitionKey is valid', async ()=> {
        let emailDefinition = await createEmailDefinitionObject();
        let opts = {'body':emailDefinition};

        let createEmailDefinitionResult = await transactionalMessagingApiInstance.createEmailDefinition(opts);
        let deleteEmailDefinitionResult = await transactionalMessagingApiInstance.deleteEmailDefinition(createEmailDefinitionResult.definitionKey);

        expect(deleteEmailDefinitionResult.requestId).not.be(undefined);
        expect(deleteEmailDefinitionResult.deletedDefinitionKey).not.be(undefined);
        expect(deleteEmailDefinitionResult.message).to.eql("Success");
      });
    });
    describe('deleteEmailDefinition', function() {
      it('should not call deleteEmailDefinition successfully when definitionKey is invalid', async ()=> {
        let emailDefinitionToDeleteKey = 'NonExistingEmailDefinitionKey';

        try{
          await transactionalMessagingApiInstance.deleteEmailDefinition(emailDefinitionToDeleteKey);
        }
        catch (error) {
          expect(error.status).to.eql(404);
          expect(error.response.body.message).to.eql('FuelRuntime_ObjectNotFound: Unable to find Definition NonExistingEmailDefinitionKey');
        }
      });
    });
    describe('deleteQueuedMessagesForEmailDefinition', function() {
      it('should call deleteQueuedMessagesForEmailDefinition successfully', async ()=> {
        let emailDefinition = await createEmailDefinitionObject();
        emailDefinition.status = 'inactive';
        let opts = {'body':emailDefinition};

        let createEmailDefinitionResult = await transactionalMessagingApiInstance.createEmailDefinition(opts);
        let deleteQueuedMessagesForEmailDefinitionResult = await transactionalMessagingApiInstance.deleteQueuedMessagesForEmailDefinition(createEmailDefinitionResult.definitionKey);

        expect(deleteQueuedMessagesForEmailDefinitionResult.requestId).not.be(undefined);
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
        let emailDefinition = await createEmailDefinitionObject();
        let opts = {'body':emailDefinition};

        let createEmailDefinitionResult = await transactionalMessagingApiInstance.createEmailDefinition(opts);
        let getEmailDefinitionsResult = await transactionalMessagingApiInstance.getEmailDefinition(createEmailDefinitionResult.definitionKey);

        expect(getEmailDefinitionsResult.name).to.eql(emailDefinition.name);
        expect(getEmailDefinitionsResult.definitionKey).to.eql(emailDefinition.definitionKey);
        expect(getEmailDefinitionsResult.content.customerKey).to.eql(emailDefinition.content.customerKey);
      });
    });
    describe('getEmailDefinitions', function() {
      it('should call getEmailDefinitions successfully', async ()=> {
        let opts = {
          'status':undefined,
          'orderBy':undefined,
          'pageSize':undefined,
          'page':undefined
        };

        let getEmailDefinitionsResult = await transactionalMessagingApiInstance.getEmailDefinitions(opts);

        expect(getEmailDefinitionsResult.requestId).not.be(undefined);
        expect(getEmailDefinitionsResult.definitions).not.be(undefined);
        expect(getEmailDefinitionsResult.count).not.be(undefined);
        expect(getEmailDefinitionsResult.page).not.be(undefined);
        expect(getEmailDefinitionsResult.pageSize).not.be(undefined);
      });
    });
    describe('getEmailSendStatusForRecipient', function() {
      it('should call getEmailSendStatusForRecipient successfully', async ()=> {
        let opts;
        let emailDefinition = await createEmailDefinitionObject();
        opts = {'body':emailDefinition};

        let createEmailDefinitionResult = await transactionalMessagingApiInstance.createEmailDefinition(opts);

        let recipient = new SalesforceMarketingCloud.Recipient(JOHN_DOE_GMAIL_COM);
        let messageRequestBody = new SalesforceMarketingCloud.SendEmailToSingleRecipientRequest(createEmailDefinitionResult.definitionKey, recipient);
        opts = {'body':messageRequestBody};
        let messageKey = getUUID();

        await transactionalMessagingApiInstance.sendEmailToSingleRecipient(messageKey, opts);
        let getEmailSendStatusForRecipientResult = await transactionalMessagingApiInstance.getEmailSendStatusForRecipient(messageKey);

        let eventCategoryTypes = ['TransactionalSendEvents.EmailSent', 'TransactionalSendEvents.EmailQueued', 'TransactionalSendEvents.EmailNotSent'];

        expect(getEmailSendStatusForRecipientResult.requestId).not.be(undefined);
        expect(getEmailSendStatusForRecipientResult.timestamp).not.be(undefined);
        expect(eventCategoryTypes).to.contain(getEmailSendStatusForRecipientResult.eventCategoryType);
      });
    });
    describe('getEmailsNotSentToRecipients', function() {
      it('should call getEmailsNotSentToRecipients successfully', async ()=> {
        let opts = {
          'pageSize':undefined,
          'lastEventId':undefined
        };

        let getEmailsNotSentToRecipientsResponse = await transactionalMessagingApiInstance.getEmailsNotSentToRecipients('notSent', opts);

        expect(getEmailsNotSentToRecipientsResponse.requestId).not.be(undefined);
        expect(getEmailsNotSentToRecipientsResponse.lastEventID).not.be(undefined);
        expect(getEmailsNotSentToRecipientsResponse.messages).not.be(undefined);
        expect(getEmailsNotSentToRecipientsResponse.count).not.be(undefined);
        expect(getEmailsNotSentToRecipientsResponse.pageSize).not.be(undefined);
      });
    });
    describe('getQueueMetricsForEmailDefinition', function() {
      it('should call getQueueMetricsForEmailDefinition successfully', async ()=> {
        let emailDefinition = await createEmailDefinitionObject();
        let opts = {'body':emailDefinition};

        let createEmailDefinitionResult = await transactionalMessagingApiInstance.createEmailDefinition(opts);
        let getQueueMetricsForEmailDefinitionResult = await transactionalMessagingApiInstance.getQueueMetricsForEmailDefinition(createEmailDefinitionResult.definitionKey);

        expect(getQueueMetricsForEmailDefinitionResult.requestId);
        expect(getQueueMetricsForEmailDefinitionResult.count);
        expect(getQueueMetricsForEmailDefinitionResult.ageSeconds);
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
        let opts;
        let emailDefinition = await createEmailDefinitionObject();
        opts = {'body':emailDefinition};

        let createEmailDefinitionResult = await transactionalMessagingApiInstance.createEmailDefinition(opts);

        let updatedDefinitionDescription = new SalesforceMarketingCloud.UpdateEmailDefinitionRequest();
        updatedDefinitionDescription.description = 'Updated email definition description';

        opts = {'body':updatedDefinitionDescription};
        let partiallyUpdateEmailDefinitionResult = await transactionalMessagingApiInstance.partiallyUpdateEmailDefinition(createEmailDefinitionResult.definitionKey, opts);

        expect(partiallyUpdateEmailDefinitionResult.description).to.eql(updatedDefinitionDescription.description);

        expect(partiallyUpdateEmailDefinitionResult.definitionKey).to.eql(emailDefinition.definitionKey);
        expect(partiallyUpdateEmailDefinitionResult.name).to.eql(emailDefinition.name);
        expect(partiallyUpdateEmailDefinitionResult.content.customerKey).to.eql(emailDefinition.content.customerKey);
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
          let opts;
          let emailDefinition = await createEmailDefinitionObject();
          opts = {'body':emailDefinition};

          let createEmailDefinitionResult = await transactionalMessagingApiInstance.createEmailDefinition(opts);

          let recipient1 = new SalesforceMarketingCloud.Recipient(JOHN_DOE_GMAIL_COM);
          let recipient2 = new SalesforceMarketingCloud.Recipient(JOHANNA_DOE_YAHOO_COM);
          let recipientsList = [recipient1, recipient2];

          let batchMessageRequestBody = new SalesforceMarketingCloud.SendEmailToMultipleRecipientsRequest(createEmailDefinitionResult.definitionKey, recipientsList);
          opts = {'body':batchMessageRequestBody};

          let sendEmailToMultipleRecipientsResult = await transactionalMessagingApiInstance.sendEmailToMultipleRecipients(opts);

          expect(sendEmailToMultipleRecipientsResult.requestId).not.be(undefined);
          expect(sendEmailToMultipleRecipientsResult.errorcode).not.be(undefined);
          expect(sendEmailToMultipleRecipientsResult.responses).not.be(undefined);
      });
    });
    describe('sendEmailToSingleRecipient', function() {
      it('should call sendEmailToSingleRecipient successfully', async ()=> {
        let opts;
        let emailDefinition = await createEmailDefinitionObject();
        opts = {'body':emailDefinition};

        let createEmailDefinitionResult = await transactionalMessagingApiInstance.createEmailDefinition(opts);

        let recipient = new SalesforceMarketingCloud.Recipient(JOHN_DOE_GMAIL_COM);
        let messageRequestBody = new SalesforceMarketingCloud.SendEmailToSingleRecipientRequest(createEmailDefinitionResult.definitionKey, recipient);
        opts = {'body':messageRequestBody};
        let messageKey = getUUID();

        let sendEmailToSingleRecipientResult = await transactionalMessagingApiInstance.sendEmailToSingleRecipient(messageKey, opts);

        expect(sendEmailToSingleRecipientResult.requestId).not.be(undefined);
        expect(sendEmailToSingleRecipientResult.errorcode).not.be(undefined);
        expect(sendEmailToSingleRecipientResult.responses).not.be(undefined);
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
      'subjectline':{
        'content':'New TS Subject Line'
      }
    };

    return asset;
  }

  function getUUID(length){

    return Math.random().toString(16).substring(0, length);
  }
}));
