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
  process.env['AZURE_VM_TEST_LOCATION'] = 'southeastasia';
  process.env['SSHCERT'] = 'test/myCert.pem';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGVMCreate7980/providers/Microsoft.Compute/virtualMachines/xplatvm2?$expand=instanceView&api-version=2016-03-30')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"vmId\": \"93a79f8a-d165-4c17-ba66-a68a11222bc8\",\r\n    \"availabilitySet\": {\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGVMCreate7980/providers/Microsoft.Compute/availabilitySets/XPLATTESTAAVAIL9749\"\r\n    },\r\n    \"hardwareProfile\": {\r\n      \"vmSize\": \"Standard_D1\"\r\n    },\r\n    \"storageProfile\": {\r\n      \"imageReference\": {\r\n        \"publisher\": \"MicrosoftWindowsServerEssentials\",\r\n        \"offer\": \"WindowsServerEssentials\",\r\n        \"sku\": \"WindowsServerEssentials\",\r\n        \"version\": \"1.0.20131018\"\r\n      },\r\n      \"osDisk\": {\r\n        \"osType\": \"Windows\",\r\n        \"name\": \"cli26f00d19d76f03c2-os-1469537920416\",\r\n        \"createOption\": \"FromImage\",\r\n        \"vhd\": {\r\n          \"uri\": \"https://xplatteststorage19288.blob.core.windows.net/xplatteststoragecnt12278/cli26f00d19d76f03c2-os-1469537920416.vhd\"\r\n        },\r\n        \"caching\": \"ReadWrite\"\r\n      },\r\n      \"dataDisks\": []\r\n    },\r\n    \"osProfile\": {\r\n      \"computerName\": \"xplatvm2\",\r\n      \"adminUsername\": \"azureuser\",\r\n      \"windowsConfiguration\": {\r\n        \"provisionVMAgent\": true,\r\n        \"enableAutomaticUpdates\": true\r\n      },\r\n      \"secrets\": []\r\n    },\r\n    \"networkProfile\": {\"networkInterfaces\":[{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGVMCreate7980/providers/Microsoft.Network/networkInterfaces/xplattestnic2\"}]},\r\n    \"diagnosticsProfile\": {\r\n      \"bootDiagnostics\": {\r\n        \"enabled\": false\r\n      }\r\n    },\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"instanceView\": {\r\n      \"platformUpdateDomain\": 1,\r\n      \"platformFaultDomain\": 1,\r\n      \"vmAgent\": {\r\n        \"vmAgentVersion\": \"2.7.1198.778\",\r\n        \"statuses\": [\r\n          {\r\n            \"code\": \"ProvisioningState/succeeded\",\r\n            \"level\": \"Info\",\r\n            \"displayStatus\": \"Ready\",\r\n            \"message\": \"GuestAgent is running and accepting new configurations.\",\r\n            \"time\": \"2016-07-26T13:08:06+00:00\"\r\n          }\r\n        ],\r\n        \"extensionHandlers\": [\r\n          {\r\n            \"type\": \"Microsoft.Compute.BGInfo\",\r\n            \"typeHandlerVersion\": \"2.1\",\r\n            \"status\": {\r\n              \"code\": \"ProvisioningState/succeeded\",\r\n              \"level\": \"Info\",\r\n              \"displayStatus\": \"Ready\",\r\n              \"message\": \"Plugin enabled (name: Microsoft.Compute.BGInfo, version: 2.1).\"\r\n            }\r\n          }\r\n        ]\r\n      },\r\n      \"disks\": [\r\n        {\r\n          \"name\": \"cli26f00d19d76f03c2-os-1469537920416\",\r\n          \"statuses\": [\r\n            {\r\n              \"code\": \"ProvisioningState/succeeded\",\r\n              \"level\": \"Info\",\r\n              \"displayStatus\": \"Provisioning succeeded\",\r\n              \"time\": \"2016-07-26T13:04:41.2162341+00:00\"\r\n            }\r\n          ]\r\n        }\r\n      ],\r\n      \"extensions\": [\r\n        {\r\n          \"name\": \"BGInfo\",\r\n          \"type\": \"Microsoft.Compute.BGInfo\",\r\n          \"typeHandlerVersion\": \"2.1\",\r\n          \"statuses\": [\r\n            {\r\n              \"code\": \"ProvisioningState/succeeded\",\r\n              \"level\": \"Info\",\r\n              \"displayStatus\": \"Provisioning succeeded\",\r\n              \"message\": \"Plugin enabled (name: Microsoft.Compute.BGInfo, version: 2.1).\"\r\n            }\r\n          ]\r\n        }\r\n      ],\r\n      \"statuses\": [\r\n        {\r\n          \"code\": \"ProvisioningState/succeeded\",\r\n          \"level\": \"Info\",\r\n          \"displayStatus\": \"Provisioning succeeded\",\r\n          \"time\": \"2016-07-26T13:05:56.1702708+00:00\"\r\n        },\r\n        {\r\n          \"code\": \"PowerState/running\",\r\n          \"level\": \"Info\",\r\n          \"displayStatus\": \"VM running\"\r\n        }\r\n      ]\r\n    }\r\n  },\r\n  \"resources\": [\r\n    {\r\n      \"properties\": {\r\n        \"publisher\": \"Microsoft.Compute\",\r\n        \"type\": \"BGInfo\",\r\n        \"typeHandlerVersion\": \"2.1\",\r\n        \"autoUpgradeMinorVersion\": true,\r\n        \"provisioningState\": \"Succeeded\"\r\n      },\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGVMCreate7980/providers/Microsoft.Compute/virtualMachines/xplatvm2/extensions/BGInfo\",\r\n      \"name\": \"BGInfo\",\r\n      \"type\": \"Microsoft.Compute/virtualMachines/extensions\",\r\n      \"location\": \"southeastasia\"\r\n    }\r\n  ],\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGVMCreate7980/providers/Microsoft.Compute/virtualMachines/xplatvm2\",\r\n  \"name\": \"xplatvm2\",\r\n  \"type\": \"Microsoft.Compute/virtualMachines\",\r\n  \"location\": \"southeastasia\",\r\n  \"tags\": {\r\n    \"a\": \"b\",\r\n    \"b\": \"c\",\r\n    \"d\": \"\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '4574',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '9bcaa9de-92b1-485f-8528-dfb04fe7611e_131124330672850698',
  'x-ms-request-id': '180937e3-98a3-4c08-b5eb-07d95ed09c91',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14870',
  'x-ms-correlation-request-id': '914607c8-8f7e-4f0a-921b-244608962fc1',
  'x-ms-routing-request-id': 'WESTEUROPE:20160726T130817Z:914607c8-8f7e-4f0a-921b-244608962fc1',
  date: 'Tue, 26 Jul 2016 13:08:16 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGVMCreate7980/providers/Microsoft.Compute/virtualMachines/xplatvm2?$expand=instanceView&api-version=2016-03-30')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"vmId\": \"93a79f8a-d165-4c17-ba66-a68a11222bc8\",\r\n    \"availabilitySet\": {\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGVMCreate7980/providers/Microsoft.Compute/availabilitySets/XPLATTESTAAVAIL9749\"\r\n    },\r\n    \"hardwareProfile\": {\r\n      \"vmSize\": \"Standard_D1\"\r\n    },\r\n    \"storageProfile\": {\r\n      \"imageReference\": {\r\n        \"publisher\": \"MicrosoftWindowsServerEssentials\",\r\n        \"offer\": \"WindowsServerEssentials\",\r\n        \"sku\": \"WindowsServerEssentials\",\r\n        \"version\": \"1.0.20131018\"\r\n      },\r\n      \"osDisk\": {\r\n        \"osType\": \"Windows\",\r\n        \"name\": \"cli26f00d19d76f03c2-os-1469537920416\",\r\n        \"createOption\": \"FromImage\",\r\n        \"vhd\": {\r\n          \"uri\": \"https://xplatteststorage19288.blob.core.windows.net/xplatteststoragecnt12278/cli26f00d19d76f03c2-os-1469537920416.vhd\"\r\n        },\r\n        \"caching\": \"ReadWrite\"\r\n      },\r\n      \"dataDisks\": []\r\n    },\r\n    \"osProfile\": {\r\n      \"computerName\": \"xplatvm2\",\r\n      \"adminUsername\": \"azureuser\",\r\n      \"windowsConfiguration\": {\r\n        \"provisionVMAgent\": true,\r\n        \"enableAutomaticUpdates\": true\r\n      },\r\n      \"secrets\": []\r\n    },\r\n    \"networkProfile\": {\"networkInterfaces\":[{\"id\":\"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGVMCreate7980/providers/Microsoft.Network/networkInterfaces/xplattestnic2\"}]},\r\n    \"diagnosticsProfile\": {\r\n      \"bootDiagnostics\": {\r\n        \"enabled\": false\r\n      }\r\n    },\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"instanceView\": {\r\n      \"platformUpdateDomain\": 1,\r\n      \"platformFaultDomain\": 1,\r\n      \"vmAgent\": {\r\n        \"vmAgentVersion\": \"2.7.1198.778\",\r\n        \"statuses\": [\r\n          {\r\n            \"code\": \"ProvisioningState/succeeded\",\r\n            \"level\": \"Info\",\r\n            \"displayStatus\": \"Ready\",\r\n            \"message\": \"GuestAgent is running and accepting new configurations.\",\r\n            \"time\": \"2016-07-26T13:08:06+00:00\"\r\n          }\r\n        ],\r\n        \"extensionHandlers\": [\r\n          {\r\n            \"type\": \"Microsoft.Compute.BGInfo\",\r\n            \"typeHandlerVersion\": \"2.1\",\r\n            \"status\": {\r\n              \"code\": \"ProvisioningState/succeeded\",\r\n              \"level\": \"Info\",\r\n              \"displayStatus\": \"Ready\",\r\n              \"message\": \"Plugin enabled (name: Microsoft.Compute.BGInfo, version: 2.1).\"\r\n            }\r\n          }\r\n        ]\r\n      },\r\n      \"disks\": [\r\n        {\r\n          \"name\": \"cli26f00d19d76f03c2-os-1469537920416\",\r\n          \"statuses\": [\r\n            {\r\n              \"code\": \"ProvisioningState/succeeded\",\r\n              \"level\": \"Info\",\r\n              \"displayStatus\": \"Provisioning succeeded\",\r\n              \"time\": \"2016-07-26T13:04:41.2162341+00:00\"\r\n            }\r\n          ]\r\n        }\r\n      ],\r\n      \"extensions\": [\r\n        {\r\n          \"name\": \"BGInfo\",\r\n          \"type\": \"Microsoft.Compute.BGInfo\",\r\n          \"typeHandlerVersion\": \"2.1\",\r\n          \"statuses\": [\r\n            {\r\n              \"code\": \"ProvisioningState/succeeded\",\r\n              \"level\": \"Info\",\r\n              \"displayStatus\": \"Provisioning succeeded\",\r\n              \"message\": \"Plugin enabled (name: Microsoft.Compute.BGInfo, version: 2.1).\"\r\n            }\r\n          ]\r\n        }\r\n      ],\r\n      \"statuses\": [\r\n        {\r\n          \"code\": \"ProvisioningState/succeeded\",\r\n          \"level\": \"Info\",\r\n          \"displayStatus\": \"Provisioning succeeded\",\r\n          \"time\": \"2016-07-26T13:05:56.1702708+00:00\"\r\n        },\r\n        {\r\n          \"code\": \"PowerState/running\",\r\n          \"level\": \"Info\",\r\n          \"displayStatus\": \"VM running\"\r\n        }\r\n      ]\r\n    }\r\n  },\r\n  \"resources\": [\r\n    {\r\n      \"properties\": {\r\n        \"publisher\": \"Microsoft.Compute\",\r\n        \"type\": \"BGInfo\",\r\n        \"typeHandlerVersion\": \"2.1\",\r\n        \"autoUpgradeMinorVersion\": true,\r\n        \"provisioningState\": \"Succeeded\"\r\n      },\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGVMCreate7980/providers/Microsoft.Compute/virtualMachines/xplatvm2/extensions/BGInfo\",\r\n      \"name\": \"BGInfo\",\r\n      \"type\": \"Microsoft.Compute/virtualMachines/extensions\",\r\n      \"location\": \"southeastasia\"\r\n    }\r\n  ],\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplatTestGVMCreate7980/providers/Microsoft.Compute/virtualMachines/xplatvm2\",\r\n  \"name\": \"xplatvm2\",\r\n  \"type\": \"Microsoft.Compute/virtualMachines\",\r\n  \"location\": \"southeastasia\",\r\n  \"tags\": {\r\n    \"a\": \"b\",\r\n    \"b\": \"c\",\r\n    \"d\": \"\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '4574',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': '9bcaa9de-92b1-485f-8528-dfb04fe7611e_131124330672850698',
  'x-ms-request-id': '180937e3-98a3-4c08-b5eb-07d95ed09c91',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14870',
  'x-ms-correlation-request-id': '914607c8-8f7e-4f0a-921b-244608962fc1',
  'x-ms-routing-request-id': 'WESTEUROPE:20160726T130817Z:914607c8-8f7e-4f0a-921b-244608962fc1',
  date: 'Tue, 26 Jul 2016 13:08:16 GMT',
  connection: 'close' });
 return result; }]];