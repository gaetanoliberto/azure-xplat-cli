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
  process.env['AZURE_VM_TEST_LOCATION'] = 'eastus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-traffic-manager-profile/providers/Microsoft.Network/trafficmanagerprofiles/test-profile?api-version=2017-03-01')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-traffic-manager-profile\\/providers\\/Microsoft.Network\\/trafficManagerProfiles\\/test-profile\",\"name\":\"test-profile\",\"type\":\"Microsoft.Network\\/trafficManagerProfiles\",\"location\":\"global\",\"tags\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\",\"tag3\":\"ccc\"},\"properties\":{\"profileStatus\":\"Disabled\",\"trafficRoutingMethod\":\"Weighted\",\"dnsConfig\":{\"relativeName\":\"test-profile-dns\",\"fqdn\":\"test-profile-dns.trafficmanager.net\",\"ttl\":400},\"monitorConfig\":{\"profileMonitorStatus\":\"Disabled\",\"protocol\":\"HTTPS\",\"port\":90,\"path\":\"\\/index.aspx\"},\"endpoints\":[]}}", { 'cache-control': 'private',
  'content-length': '620',
  'content-type': 'application/json; charset=utf-8',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '02414e4b-4dd7-479e-b999-ac8b2c64f0d2',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '10797',
  'x-ms-correlation-request-id': 'ee01e529-be7f-4894-8835-88411591b524',
  'x-ms-routing-request-id': 'CANADAEAST:20170326T180944Z:ee01e529-be7f-4894-8835-88411591b524',
  date: 'Sun, 26 Mar 2017 18:09:44 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-traffic-manager-profile/providers/Microsoft.Network/trafficmanagerprofiles/test-profile?api-version=2017-03-01')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-traffic-manager-profile\\/providers\\/Microsoft.Network\\/trafficManagerProfiles\\/test-profile\",\"name\":\"test-profile\",\"type\":\"Microsoft.Network\\/trafficManagerProfiles\",\"location\":\"global\",\"tags\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\",\"tag3\":\"ccc\"},\"properties\":{\"profileStatus\":\"Disabled\",\"trafficRoutingMethod\":\"Weighted\",\"dnsConfig\":{\"relativeName\":\"test-profile-dns\",\"fqdn\":\"test-profile-dns.trafficmanager.net\",\"ttl\":400},\"monitorConfig\":{\"profileMonitorStatus\":\"Disabled\",\"protocol\":\"HTTPS\",\"port\":90,\"path\":\"\\/index.aspx\"},\"endpoints\":[]}}", { 'cache-control': 'private',
  'content-length': '620',
  'content-type': 'application/json; charset=utf-8',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '02414e4b-4dd7-479e-b999-ac8b2c64f0d2',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '10797',
  'x-ms-correlation-request-id': 'ee01e529-be7f-4894-8835-88411591b524',
  'x-ms-routing-request-id': 'CANADAEAST:20170326T180944Z:ee01e529-be7f-4894-8835-88411591b524',
  date: 'Sun, 26 Mar 2017 18:09:44 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-traffic-manager-profile/providers/Microsoft.Network/trafficmanagerprofiles/test-profile?api-version=2017-03-01')
  .reply(200, "", { 'cache-control': 'private',
  'content-length': '0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'f2300d78-53b8-460f-b115-ad8e41375643',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '10799',
  'x-ms-correlation-request-id': '2b18b0d7-f81a-4796-baee-f24e7d781606',
  'x-ms-routing-request-id': 'CANADAEAST:20170326T180947Z:2b18b0d7-f81a-4796-baee-f24e7d781606',
  date: 'Sun, 26 Mar 2017 18:09:47 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-traffic-manager-profile/providers/Microsoft.Network/trafficmanagerprofiles/test-profile?api-version=2017-03-01')
  .reply(200, "", { 'cache-control': 'private',
  'content-length': '0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'f2300d78-53b8-460f-b115-ad8e41375643',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '10799',
  'x-ms-correlation-request-id': '2b18b0d7-f81a-4796-baee-f24e7d781606',
  'x-ms-routing-request-id': 'CANADAEAST:20170326T180947Z:2b18b0d7-f81a-4796-baee-f24e7d781606',
  date: 'Sun, 26 Mar 2017 18:09:47 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-traffic-manager-profile/providers/Microsoft.Network/trafficmanagerprofiles/test-profile?api-version=2017-03-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/trafficmanagerprofiles/test-profile' under resource group 'xplat-test-traffic-manager-profile' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '0406ddb0-f418-4a86-a8de-6b3bdf6c70ae',
  'x-ms-correlation-request-id': '0406ddb0-f418-4a86-a8de-6b3bdf6c70ae',
  'x-ms-routing-request-id': 'CANADAEAST:20170326T180949Z:0406ddb0-f418-4a86-a8de-6b3bdf6c70ae',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sun, 26 Mar 2017 18:09:49 GMT',
  connection: 'close',
  'content-length': '191' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-traffic-manager-profile/providers/Microsoft.Network/trafficmanagerprofiles/test-profile?api-version=2017-03-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/trafficmanagerprofiles/test-profile' under resource group 'xplat-test-traffic-manager-profile' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '0406ddb0-f418-4a86-a8de-6b3bdf6c70ae',
  'x-ms-correlation-request-id': '0406ddb0-f418-4a86-a8de-6b3bdf6c70ae',
  'x-ms-routing-request-id': 'CANADAEAST:20170326T180949Z:0406ddb0-f418-4a86-a8de-6b3bdf6c70ae',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sun, 26 Mar 2017 18:09:49 GMT',
  connection: 'close',
  'content-length': '191' });
 return result; }]];