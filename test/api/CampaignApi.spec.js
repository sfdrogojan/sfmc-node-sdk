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

  before(()=>{
    apiSutFactory = new ApiSutFactory(SalesforceMarketingCloud.CampaignApi.prototype.constructor);
    instance = apiSutFactory.create();
  });

  describe('CampaignApi', function() {
    this.timeout(30000);

    describe('createCampaign', function() {
      it('should call createCampaign successfully', async ()=> {

        let campaign = createCampaign();
        let opts = {'body':campaign};
        let createCampaignResponse = await instance.createCampaign(opts);

        expect(createCampaignResponse.name).to.eql(campaign.name);
        expect(createCampaignResponse.description).to.eql(campaign.description);
        expect(createCampaignResponse.campaignCode).to.eql(campaign.campaignCode);
        expect(createCampaignResponse.color).to.eql(campaign.color);
        expect(createCampaignResponse.favorite).to.eql(campaign.favorite);
      });
    });
    describe('deleteCampaignById', function() {
      it('should call deleteCampaignById successfully', async ()=> {
        let campaign = createCampaign();
        let opts = {'body':campaign};
        let createCampaignResponse = await instance.createCampaign(opts);
        let campaignToDeleteId = createCampaignResponse.id;

        await instance.deleteCampaignById(campaignToDeleteId);

        try {
          await instance.getCampaignById(campaignToDeleteId);

          expect().fail('No exception thrown');
        }
        catch (error) {
          expect(error.status).to.eql(400);
        }
      });
    });
    describe('getCampaignById', function() {
      it('should call getCampaignById successfully', async ()=> {
        let campaign = createCampaign();
        let opts = {'body':campaign};
        let createCampaignResponse = await instance.createCampaign(opts);
        let campaignToRetrieveId = createCampaignResponse.id;

        let getCampaignByIdResponse = await instance.getCampaignById(campaignToRetrieveId);

        expect(getCampaignByIdResponse.name).to.eql(campaign.name);
        expect(getCampaignByIdResponse.description).to.eql(campaign.description);
        expect(getCampaignByIdResponse.campaignCode).to.eql(campaign.campaignCode);
        expect(getCampaignByIdResponse.color).to.eql(campaign.color);
        expect(getCampaignByIdResponse.favorite).to.eql(campaign.favorite);
      });
    });
  });

  function createCampaign() {
    let campaignName = 'Campaign ' + getUUID(10);
    let campaignDescription = 'Campaign from Automated Node.js SDK';
    let campaignCode = 'CampaignCode';
    let campaignColor = "0000ff";
    let favorite = false;

    return new SalesforceMarketingCloud.Campaign(campaignName, campaignDescription, campaignCode, campaignColor, favorite);
  }

  function getUUID(length){
    return Math.random().toString(16).substring(0, length);
  }
}));
