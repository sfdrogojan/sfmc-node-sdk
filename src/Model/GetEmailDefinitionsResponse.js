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
const CreateEmailDefinitionRequest = require ('./CreateEmailDefinitionRequest');





const InvalidModelException = require('../Exception/InvalidModelException');

/**
* The GetEmailDefinitionsResponse model module.
* @module Model/GetEmailDefinitionsResponse
* @version 1.0.0
*/
module.exports = class GetEmailDefinitionsResponse{
    /**
    * Constructs a new <code>GetEmailDefinitionsResponse</code>.
    * @alias module:Model/GetEmailDefinitionsResponse
    * @class
    */

    constructor() {
        
        
        

        

        

        

        

        
    }

    /**
    * Constructs a <code>GetEmailDefinitionsResponse</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:Model/GetEmailDefinitionsResponse} obj Optional instance to populate.
    * @return {module:Model/GetEmailDefinitionsResponse} The populated <code>GetEmailDefinitionsResponse</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetEmailDefinitionsResponse();

            
            
            

            if (data.hasOwnProperty('requestId')) {
                obj['requestId'] = ApiClient.convertToType(data['requestId'], 'String');
            }
            if (data.hasOwnProperty('definitions')) {
                obj['definitions'] = ApiClient.convertToType(data['definitions'], [CreateEmailDefinitionRequest]);
            }
            if (data.hasOwnProperty('count')) {
                obj['count'] = ApiClient.convertToType(data['count'], 'Number');
            }
            if (data.hasOwnProperty('page')) {
                obj['page'] = ApiClient.convertToType(data['page'], 'Number');
            }
            if (data.hasOwnProperty('pageSize')) {
                obj['pageSize'] = ApiClient.convertToType(data['pageSize'], 'Number');
            }
        }
        return obj;
    }

    /**
    * The ID of the request
    * @member {String} requestId
    */
    requestId = undefined;
    /**
    * @member {Array.<module:Model/CreateEmailDefinitionRequest>} definitions
    */
    definitions = undefined;
    /**
    * Number of pages
    * @member {Number} count
    */
    count = undefined;
    /**
    * Page number to return.
    * @member {Number} page
    */
    page = undefined;
    /**
    * Number of definitions, which are array elements, to return per paged response.
    * @member {Number} pageSize
    */
    pageSize = undefined;








}


