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
    registeredProviders: ['mobileservice', 'website'],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'southeastasia';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone/providers/Microsoft.Network/dnszones/example1.com?api-version=2016-04-01')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\",\"name\":\"example1.com\",\"type\":\"Microsoft.Network\\/dnszones\",\"etag\":\"00000003-0000-0000-a5e4-c49e6119d201\",\"location\":\"global\",\"tags\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\",\"tag3\":\"ccc\"},\"properties\":{\"maxNumberOfRecordSets\":5000,\"nameServers\":[\"ns1-07.azure-dns.com.\",\"ns2-07.azure-dns.net.\",\"ns3-07.azure-dns.org.\",\"ns4-07.azure-dns.info.\"],\"numberOfRecordSets\":2}}", { 'cache-control': 'private',
  'content-length': '506',
  'content-type': 'application/json; charset=utf-8',
  etag: '00000003-0000-0000-a5e4-c49e6119d201',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '443c47a7-de44-495f-a363-d02627d900f1',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '66bf1d52-6c7c-47b4-a70c-0a34893522f6',
  'x-ms-routing-request-id': 'WESTEUROPE:20160928T082349Z:66bf1d52-6c7c-47b4-a70c-0a34893522f6',
  date: 'Wed, 28 Sep 2016 08:23:48 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-dns-zone/providers/Microsoft.Network/dnszones/example1.com?api-version=2016-04-01')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-dns-zone\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\",\"name\":\"example1.com\",\"type\":\"Microsoft.Network\\/dnszones\",\"etag\":\"00000003-0000-0000-a5e4-c49e6119d201\",\"location\":\"global\",\"tags\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\",\"tag3\":\"ccc\"},\"properties\":{\"maxNumberOfRecordSets\":5000,\"nameServers\":[\"ns1-07.azure-dns.com.\",\"ns2-07.azure-dns.net.\",\"ns3-07.azure-dns.org.\",\"ns4-07.azure-dns.info.\"],\"numberOfRecordSets\":2}}", { 'cache-control': 'private',
  'content-length': '506',
  'content-type': 'application/json; charset=utf-8',
  etag: '00000003-0000-0000-a5e4-c49e6119d201',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '443c47a7-de44-495f-a363-d02627d900f1',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '66bf1d52-6c7c-47b4-a70c-0a34893522f6',
  'x-ms-routing-request-id': 'WESTEUROPE:20160928T082349Z:66bf1d52-6c7c-47b4-a70c-0a34893522f6',
  date: 'Wed, 28 Sep 2016 08:23:48 GMT',
  connection: 'close' });
 return result; }]];