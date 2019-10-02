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
* The SendDefinitionResponseItem model module.
* @module Model/SendDefinitionResponseItem
* @version 1.0.0
*/
module.exports = class SendDefinitionResponseItem{
    /**
    * Constructs a new <code>SendDefinitionResponseItem</code>.
    * @alias module:Model/SendDefinitionResponseItem
    * @class
    */

    constructor() {
        
        
        

        

        

        
    }

    /**
    * Constructs a <code>SendDefinitionResponseItem</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:Model/SendDefinitionResponseItem} obj Optional instance to populate.
    * @return {module:Model/SendDefinitionResponseItem} The populated <code>SendDefinitionResponseItem</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SendDefinitionResponseItem();

            
            
            

            if (data.hasOwnProperty('messageKey')) {
                obj['messageKey'] = ApiClient.convertToType(data['messageKey'], 'String');
            }
            if (data.hasOwnProperty('errorCode')) {
                obj['errorCode'] = ApiClient.convertToType(data['errorCode'], 'Number');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
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
    * The specific error code
    * @member {Number} errorCode
    */
    errorCode = undefined;
    /**
    * The error message
    * @member {String} message
    */
    message = undefined;








}


