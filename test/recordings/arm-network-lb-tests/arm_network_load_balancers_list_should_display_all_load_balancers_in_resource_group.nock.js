// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '2c224e7e-3ef5-431d-a57b-e71f4662e3a6',
    name: 'Node CLI Test',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'westus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb/providers/Microsoft.Network/loadBalancers?api-version=2017-03-01')
  .reply(200, "{\r\n  \"value\": [\r\n    {\r\n      \"name\": \"loadBalancerName\",\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb/providers/Microsoft.Network/loadBalancers/loadBalancerName\",\r\n      \"etag\": \"W/\\\"f8c98075-856c-40d9-a768-366eb822a89b\\\"\",\r\n      \"type\": \"Microsoft.Network/loadBalancers\",\r\n      \"location\": \"westus\",\r\n      \"properties\": {\r\n        \"provisioningState\": \"Succeeded\",\r\n        \"resourceGuid\": \"f68032ab-56ba-4675-9942-63d5b022f15c\",\r\n        \"frontendIPConfigurations\": [],\r\n        \"backendAddressPools\": [],\r\n        \"loadBalancingRules\": [],\r\n        \"probes\": [],\r\n        \"inboundNatRules\": [],\r\n        \"outboundNatRules\": [],\r\n        \"inboundNatPools\": []\r\n      }\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '739',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '18147479-90c0-46e5-bfda-7a5b03cb9390',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14992',
  'x-ms-correlation-request-id': 'a6e70d94-48af-4e95-9f29-f84acc2e57c4',
  'x-ms-routing-request-id': 'WESTEUROPE:20170605T073139Z:a6e70d94-48af-4e95-9f29-f84acc2e57c4',
  date: 'Mon, 05 Jun 2017 07:31:38 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb/providers/Microsoft.Network/loadBalancers?api-version=2017-03-01')
  .reply(200, "{\r\n  \"value\": [\r\n    {\r\n      \"name\": \"loadBalancerName\",\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-lb/providers/Microsoft.Network/loadBalancers/loadBalancerName\",\r\n      \"etag\": \"W/\\\"f8c98075-856c-40d9-a768-366eb822a89b\\\"\",\r\n      \"type\": \"Microsoft.Network/loadBalancers\",\r\n      \"location\": \"westus\",\r\n      \"properties\": {\r\n        \"provisioningState\": \"Succeeded\",\r\n        \"resourceGuid\": \"f68032ab-56ba-4675-9942-63d5b022f15c\",\r\n        \"frontendIPConfigurations\": [],\r\n        \"backendAddressPools\": [],\r\n        \"loadBalancingRules\": [],\r\n        \"probes\": [],\r\n        \"inboundNatRules\": [],\r\n        \"outboundNatRules\": [],\r\n        \"inboundNatPools\": []\r\n      }\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '739',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '18147479-90c0-46e5-bfda-7a5b03cb9390',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14992',
  'x-ms-correlation-request-id': 'a6e70d94-48af-4e95-9f29-f84acc2e57c4',
  'x-ms-routing-request-id': 'WESTEUROPE:20170605T073139Z:a6e70d94-48af-4e95-9f29-f84acc2e57c4',
  date: 'Mon, 05 Jun 2017 07:31:38 GMT',
  connection: 'close' });
 return result; }]];