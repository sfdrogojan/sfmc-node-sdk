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
* The CreateEmailDefinitionContent model module.
* @module Model/CreateEmailDefinitionContent
* @version 1.0.0
*/
module.exports = class CreateEmailDefinitionContent{
    /**
    * Constructs a new <code>CreateEmailDefinitionContent</code>.
    * @alias module:Model/CreateEmailDefinitionContent
    * @class
    * @param customerKey {String} Unique identifier of the content asset.
    */

    constructor(customerKey) {
        
        
        
        // verify the required parameter 'customerKey' is set
        if(customerKey === undefined || customerKey === null){
            throw new InvalidModelException('"customerKey" is a required property for CreateEmailDefinitionContent and cannot be undefined or null');
        }
        else{ 
            this['customerKey'] = customerKey;
        } 

        
    }

    /**
    * Constructs a <code>CreateEmailDefinitionContent</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:Model/CreateEmailDefinitionContent} obj Optional instance to populate.
    * @return {module:Model/CreateEmailDefinitionContent} The populated <code>CreateEmailDefinitionContent</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateEmailDefinitionContent();

            
            
            

            if (data.hasOwnProperty('customerKey')) {
                obj['customerKey'] = ApiClient.convertToType(data['customerKey'], 'String');
            }
        }
        return obj;
    }

    /**
    * Unique identifier of the content asset.
    * @member {String} customerKey
    */
    customerKey = undefined;








}


