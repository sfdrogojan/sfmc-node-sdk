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





/**
* The DeleteSendDefinitionResponse model module.
* @module Model/DeleteSendDefinitionResponse
* @version 1.0.0
*/
module.exports = class DeleteSendDefinitionResponse{
    /**
    * Constructs a new <code>DeleteSendDefinitionResponse</code>.
    * @alias module:Model/DeleteSendDefinitionResponse
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>DeleteSendDefinitionResponse</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:Model/DeleteSendDefinitionResponse} obj Optional instance to populate.
    * @return {module:Model/DeleteSendDefinitionResponse} The populated <code>DeleteSendDefinitionResponse</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeleteSendDefinitionResponse();

            
            
            

            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('requestId')) {
                obj['requestId'] = ApiClient.convertToType(data['requestId'], 'String');
            }
            if (data.hasOwnProperty('deletedDefinitionKey')) {
                obj['deletedDefinitionKey'] = ApiClient.convertToType(data['deletedDefinitionKey'], 'String');
            }
        }
        return obj;
    }

    /**
    * The response message
    * @member {String} message
    */
    message = undefined;
    /**
    * The ID of the request
    * @member {String} requestId
    */
    requestId = undefined;
    /**
    * The key of the deleted definition
    * @member {String} deletedDefinitionKey
    */
    deletedDefinitionKey = undefined;








}


