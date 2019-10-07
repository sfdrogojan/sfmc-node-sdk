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
const Attributes = require ('./Attributes');





const InvalidModelException = require('../Exception/InvalidModelException');

/**
* The Recipient model module.
* @module Model/Recipient
* @version 1.0.0
*/
module.exports = class Recipient{
    /**
    * Constructs a new <code>Recipient</code>.
    * @alias module:Model/Recipient
    * @class
    * @param contactKey {String} Unique identifier for a subscriber in Marketing Cloud. Each request must include a contactKey. You can use an existing subscriber key or create one at send time by using the recipient’s email address.
    */

    constructor(contactKey) {
        
        // verify the required parameter 'contactKey' is set
        if(contactKey === undefined || contactKey === null){
            throw new InvalidModelException('"contactKey" is a required property for Recipient and cannot be undefined or null');
        }
        this['contactKey'] = contactKey;
        
        
        
        
    }

    /**
    * Constructs a <code>Recipient</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:Model/Recipient} obj Optional instance to populate.
    * @return {module:Model/Recipient} The populated <code>Recipient</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Recipient();

            
            
            

            if (data.hasOwnProperty('contactKey')) {
                obj['contactKey'] = ApiClient.convertToType(data['contactKey'], 'String');
            }
            if (data.hasOwnProperty('to')) {
                obj['to'] = ApiClient.convertToType(data['to'], 'String');
            }
            if (data.hasOwnProperty('messageKey')) {
                obj['messageKey'] = ApiClient.convertToType(data['messageKey'], 'String');
            }
            if (data.hasOwnProperty('attributes')) {
                obj['attributes'] = Attributes.constructFromObject(data['attributes']);
            }
        }
        return obj;
    }

    /**
    * Unique identifier for a subscriber in Marketing Cloud. Each request must include a contactKey. You can use an existing subscriber key or create one at send time by using the recipient’s email address.
    * @member {String} contactKey
    */
    contactKey = undefined;
    /**
    * Channel address of the recipient. For email, it’s the recipient's email address. For SMS, it’s the recipient's E.164-based mobile number.
    * @member {String} to
    */
    to = undefined;
    /**
    * Unique identifier used to track message status. Can be automatically created when you create a message or provided as part of the request. Each recipient in a request must have a unique messageKey. If you use a duplicate messageKey in the same send request, the message is rejected.
    * @member {String} messageKey
    */
    messageKey = undefined;
    /**
    * @member {module:Model/Attributes} attributes
    */
    attributes = undefined;








}


