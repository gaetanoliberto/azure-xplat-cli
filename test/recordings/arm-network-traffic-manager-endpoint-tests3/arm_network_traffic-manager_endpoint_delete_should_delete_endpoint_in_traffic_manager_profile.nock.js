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
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/test-endpoint/providers/Microsoft.Network/trafficmanagerprofiles/test-profile/ExternalEndpoints/test-endpoint?api-version=2017-03-01')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/test-endpoint\\/providers\\/Microsoft.Network\\/trafficManagerProfiles\\/test-profile\\/externalEndpoints\\/test-endpoint\",\"name\":\"test-endpoint\",\"type\":\"Microsoft.Network\\/trafficManagerProfiles\\/externalEndpoints\",\"properties\":{\"endpointStatus\":\"Disabled\",\"endpointMonitorStatus\":\"Disabled\",\"target\":\"test-profile-dns.azure.com\",\"weight\":101,\"priority\":202,\"endpointLocation\":\"East US\"}}", { 'cache-control': 'private',
  'content-length': '461',
  'content-type': 'application/json; charset=utf-8',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '9db89864-d752-4b98-b6c2-c3795c631158',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14992',
  'x-ms-correlation-request-id': 'eb40cfd8-4168-46f5-9115-4f4b8752e4ca',
  'x-ms-routing-request-id': 'CANADAEAST:20170326T191751Z:eb40cfd8-4168-46f5-9115-4f4b8752e4ca',
  date: 'Sun, 26 Mar 2017 19:17:51 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/test-endpoint/providers/Microsoft.Network/trafficmanagerprofiles/test-profile/ExternalEndpoints/test-endpoint?api-version=2017-03-01')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/test-endpoint\\/providers\\/Microsoft.Network\\/trafficManagerProfiles\\/test-profile\\/externalEndpoints\\/test-endpoint\",\"name\":\"test-endpoint\",\"type\":\"Microsoft.Network\\/trafficManagerProfiles\\/externalEndpoints\",\"properties\":{\"endpointStatus\":\"Disabled\",\"endpointMonitorStatus\":\"Disabled\",\"target\":\"test-profile-dns.azure.com\",\"weight\":101,\"priority\":202,\"endpointLocation\":\"East US\"}}", { 'cache-control': 'private',
  'content-length': '461',
  'content-type': 'application/json; charset=utf-8',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '9db89864-d752-4b98-b6c2-c3795c631158',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14992',
  'x-ms-correlation-request-id': 'eb40cfd8-4168-46f5-9115-4f4b8752e4ca',
  'x-ms-routing-request-id': 'CANADAEAST:20170326T191751Z:eb40cfd8-4168-46f5-9115-4f4b8752e4ca',
  date: 'Sun, 26 Mar 2017 19:17:51 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/test-endpoint/providers/Microsoft.Network/trafficmanagerprofiles/test-profile/ExternalEndpoints/test-endpoint?api-version=2017-03-01')
  .reply(200, "", { 'cache-control': 'private',
  'content-length': '0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'fb80e3d1-9bdc-429b-9989-ba3046f22845',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1194',
  'x-ms-correlation-request-id': '8899c89a-01c2-4979-8231-e5612119a422',
  'x-ms-routing-request-id': 'CANADAEAST:20170326T191752Z:8899c89a-01c2-4979-8231-e5612119a422',
  date: 'Sun, 26 Mar 2017 19:17:52 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/test-endpoint/providers/Microsoft.Network/trafficmanagerprofiles/test-profile/ExternalEndpoints/test-endpoint?api-version=2017-03-01')
  .reply(200, "", { 'cache-control': 'private',
  'content-length': '0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'fb80e3d1-9bdc-429b-9989-ba3046f22845',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1194',
  'x-ms-correlation-request-id': '8899c89a-01c2-4979-8231-e5612119a422',
  'x-ms-routing-request-id': 'CANADAEAST:20170326T191752Z:8899c89a-01c2-4979-8231-e5612119a422',
  date: 'Sun, 26 Mar 2017 19:17:52 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/test-endpoint/providers/Microsoft.Network/trafficmanagerprofiles/test-profile/ExternalEndpoints/test-endpoint?api-version=2017-03-01')
  .reply(404, "{\"code\":\"NotFound\",\"message\":\"The endpoint 'test-endpoint' of type 'externalendpoints' does not exist in the profile 'test-profile'.\"}", { 'cache-control': 'private',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '1c519951-9179-4691-b679-9af0bdcd112a',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': '405debe0-785a-474f-b980-772b5561d988',
  'x-ms-routing-request-id': 'CANADAEAST:20170326T191754Z:405debe0-785a-474f-b980-772b5561d988',
  date: 'Sun, 26 Mar 2017 19:17:53 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/test-endpoint/providers/Microsoft.Network/trafficmanagerprofiles/test-profile/ExternalEndpoints/test-endpoint?api-version=2017-03-01')
  .reply(404, "{\"code\":\"NotFound\",\"message\":\"The endpoint 'test-endpoint' of type 'externalendpoints' does not exist in the profile 'test-profile'.\"}", { 'cache-control': 'private',
  'content-length': '134',
  'content-type': 'application/json; charset=utf-8',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '1c519951-9179-4691-b679-9af0bdcd112a',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-correlation-request-id': '405debe0-785a-474f-b980-772b5561d988',
  'x-ms-routing-request-id': 'CANADAEAST:20170326T191754Z:405debe0-785a-474f-b980-772b5561d988',
  date: 'Sun, 26 Mar 2017 19:17:53 GMT',
  connection: 'close' });
 return result; }]];