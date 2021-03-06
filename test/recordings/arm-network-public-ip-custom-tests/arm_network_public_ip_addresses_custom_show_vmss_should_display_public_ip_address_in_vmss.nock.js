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
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-public-ip-custom/providers/Microsoft.Compute/virtualMachineScaleSets/publicIPAddressName/virtualMachines/0/networkInterfaces/test/ipconfigurations/test/publicipaddresses/xplattestip?api-version=2017-03-30')
  .reply(200, "{\r\n  \"name\": \"xplattestip\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-public-ip-custom/providers/Microsoft.Compute/virtualMachineScaleSets/publicIPAddressName/virtualMachines/0/networkInterfaces/test/ipConfigurations/test/publicIPAddresses/xplattestip\",\r\n  \"etag\": \"W/\\\"b7985ff2-2ee0-4b24-8fc5-950dce6aa62d\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"a3670256-3214-449e-822e-c302e0612f7c\",\r\n    \"ipAddress\": \"52.187.44.30\",\r\n    \"publicIPAddressVersion\": \"IPv4\",\r\n    \"publicIPAllocationMethod\": \"Dynamic\",\r\n    \"idleTimeoutInMinutes\": 30,\r\n    \"dnsSettings\": {\r\n      \"domainNameLabel\": \"vm0.vmssiplabel\",\r\n      \"fqdn\": \"vm0.vmssiplabel.southeastasia.cloudapp.azure.com\"\r\n    },\r\n    \"ipConfiguration\": {\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-public-ip-custom/providers/Microsoft.Compute/virtualMachineScaleSets/publicIPAddressName/virtualMachines/0/networkInterfaces/test/ipConfigurations/test\"\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1052',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"b7985ff2-2ee0-4b24-8fc5-950dce6aa62d"',
  'x-ms-request-id': 'ca70ffef-f7db-47b1-8d70-d34e5139363e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14992',
  'x-ms-correlation-request-id': '0f3b0421-6386-468b-baac-7db94d97a29b',
  'x-ms-routing-request-id': 'WESTEUROPE:20170707T141024Z:0f3b0421-6386-468b-baac-7db94d97a29b',
  date: 'Fri, 07 Jul 2017 14:10:23 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-public-ip-custom/providers/Microsoft.Compute/virtualMachineScaleSets/publicIPAddressName/virtualMachines/0/networkInterfaces/test/ipconfigurations/test/publicipaddresses/xplattestip?api-version=2017-03-30')
  .reply(200, "{\r\n  \"name\": \"xplattestip\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-public-ip-custom/providers/Microsoft.Compute/virtualMachineScaleSets/publicIPAddressName/virtualMachines/0/networkInterfaces/test/ipConfigurations/test/publicIPAddresses/xplattestip\",\r\n  \"etag\": \"W/\\\"b7985ff2-2ee0-4b24-8fc5-950dce6aa62d\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"a3670256-3214-449e-822e-c302e0612f7c\",\r\n    \"ipAddress\": \"52.187.44.30\",\r\n    \"publicIPAddressVersion\": \"IPv4\",\r\n    \"publicIPAllocationMethod\": \"Dynamic\",\r\n    \"idleTimeoutInMinutes\": 30,\r\n    \"dnsSettings\": {\r\n      \"domainNameLabel\": \"vm0.vmssiplabel\",\r\n      \"fqdn\": \"vm0.vmssiplabel.southeastasia.cloudapp.azure.com\"\r\n    },\r\n    \"ipConfiguration\": {\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-public-ip-custom/providers/Microsoft.Compute/virtualMachineScaleSets/publicIPAddressName/virtualMachines/0/networkInterfaces/test/ipConfigurations/test\"\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1052',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"b7985ff2-2ee0-4b24-8fc5-950dce6aa62d"',
  'x-ms-request-id': 'ca70ffef-f7db-47b1-8d70-d34e5139363e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14992',
  'x-ms-correlation-request-id': '0f3b0421-6386-468b-baac-7db94d97a29b',
  'x-ms-routing-request-id': 'WESTEUROPE:20170707T141024Z:0f3b0421-6386-468b-baac-7db94d97a29b',
  date: 'Fri, 07 Jul 2017 14:10:23 GMT',
  connection: 'close' });
 return result; }]];