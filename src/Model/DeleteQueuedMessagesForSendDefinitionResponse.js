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
* The DeleteQueuedMessagesForSendDefinitionResponse model module.
* @module Model/DeleteQueuedMessagesForSendDefinitionResponse
* @version 1.0.0
*/
module.exports = class DeleteQueuedMessagesForSendDefinitionResponse{
    /**
    * Constructs a new <code>DeleteQueuedMessagesForSendDefinitionResponse</code>.
    * @alias module:Model/DeleteQueuedMessagesForSendDefinitionResponse
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>DeleteQueuedMessagesForSendDefinitionResponse</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:Model/DeleteQueuedMessagesForSendDefinitionResponse} obj Optional instance to populate.
    * @return {module:Model/DeleteQueuedMessagesForSendDefinitionResponse} The populated <code>DeleteQueuedMessagesForSendDefinitionResponse</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeleteQueuedMessagesForSendDefinitionResponse();

            
            
            

            if (data.hasOwnProperty('requestId')) {
                obj['requestId'] = ApiClient.convertToType(data['requestId'], 'String');
            }
        }
        return obj;
    }

    /**
    * The ID of the request
    * @member {String} requestId
    */
    requestId = undefined;








}


