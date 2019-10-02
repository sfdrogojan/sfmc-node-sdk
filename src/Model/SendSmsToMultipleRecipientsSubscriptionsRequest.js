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


const ApiClient = require ('../ApiClient');





const InvalidModelException = require('../Exception/InvalidModelException');

/**
* The SendSmsToMultipleRecipientsSubscriptionsRequest model module.
* @module Model/SendSmsToMultipleRecipientsSubscriptionsRequest
* @version 1.0.0
*/
module.exports = class SendSmsToMultipleRecipientsSubscriptionsRequest{
    /**
    * Constructs a new <code>SendSmsToMultipleRecipientsSubscriptionsRequest</code>.
    * @alias module:Model/SendSmsToMultipleRecipientsSubscriptionsRequest
    * @class
    */

    constructor() {
        
        
        

        
    }

    /**
    * Constructs a <code>SendSmsToMultipleRecipientsSubscriptionsRequest</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:Model/SendSmsToMultipleRecipientsSubscriptionsRequest} obj Optional instance to populate.
    * @return {module:Model/SendSmsToMultipleRecipientsSubscriptionsRequest} The populated <code>SendSmsToMultipleRecipientsSubscriptionsRequest</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SendSmsToMultipleRecipientsSubscriptionsRequest();

            
            
            

            if (data.hasOwnProperty('resubscribe')) {
                obj['resubscribe'] = ApiClient.convertToType(data['resubscribe'], 'Boolean');
            }
        }
        return obj;
    }

    /**
    * Forces the message send request to subscribe the mobile number back into a short code if a user may have requested STOP. Often used to ensure that critical transactional messages are delivered irrespective of a mobile number subscriber status.
    * @member {Boolean} resubscribe
    */
    resubscribe = undefined;








}


