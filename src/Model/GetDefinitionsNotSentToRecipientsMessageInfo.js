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
* The GetDefinitionsNotSentToRecipientsMessageInfo model module.
* @module Model/GetDefinitionsNotSentToRecipientsMessageInfo
* @version 1.0.0
*/
module.exports = class GetDefinitionsNotSentToRecipientsMessageInfo{
    /**
    * Constructs a new <code>GetDefinitionsNotSentToRecipientsMessageInfo</code>.
    * @alias module:Model/GetDefinitionsNotSentToRecipientsMessageInfo
    * @class
    */

    constructor() {
        
        
        

        

        

        
    }

    /**
    * Constructs a <code>GetDefinitionsNotSentToRecipientsMessageInfo</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:Model/GetDefinitionsNotSentToRecipientsMessageInfo} obj Optional instance to populate.
    * @return {module:Model/GetDefinitionsNotSentToRecipientsMessageInfo} The populated <code>GetDefinitionsNotSentToRecipientsMessageInfo</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetDefinitionsNotSentToRecipientsMessageInfo();

            
            
            

            if (data.hasOwnProperty('messageKey')) {
                obj['messageKey'] = ApiClient.convertToType(data['messageKey'], 'String');
            }
            if (data.hasOwnProperty('contactKey')) {
                obj['contactKey'] = ApiClient.convertToType(data['contactKey'], 'String');
            }
            if (data.hasOwnProperty('to')) {
                obj['to'] = ApiClient.convertToType(data['to'], 'String');
            }
        }
        return obj;
    }

    /**
    * Unique identifier used to track message status.
    * @member {String} messageKey
    */
    messageKey = undefined;
    /**
    * Unique identifier for a subscriber in Marketing Cloud. Each request must include a contactKey. You can use an existing subscriber key or create one at send time by using the recipient’s email address.
    * @member {String} contactKey
    */
    contactKey = undefined;
    /**
    * Channel address of the recipient. For email, it’s the recipient's email address.
    * @member {String} to
    */
    to = undefined;








}


