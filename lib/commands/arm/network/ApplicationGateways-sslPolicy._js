/**
 * Copyright (c) Microsoft.  All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// Warning: This code was generated by a tool.
// 
// Changes to this file may cause incorrect behavior and will be lost if the
// code is regenerated.

'use strict';

var generatorUtils = require('../../../util/generatorUtils');
var resourceUtils = require('../resource/resourceUtils');
var util = require('util');
var validation = require('../../../util/validation');

var profile = require('../../../util/profile');
var utils = require('../../../util/utils');

var $ = utils.getLocaleString;

exports.init = function (cli) {
  var network = cli.category('network')
    .description($('Commands to manage network resources'));
  var applicationGateways = network.category('application-gateway')
    .description($('Commands to manage application gateways'));
  var sslPolicy = applicationGateways.category('ssl-policy')
    .description($('Commands to manage ssl policy'));

  sslPolicy.command('create [resource-group] [gateway-name]')
    .description($('Create a ssl policy'))
    .usage('[options] <resource-group> <gateway-name>')
    .option('-g, --resource-group <resource-group>', $('the name of the resource group'))
    .option('-w, --gateway-name <gateway-name>', $('the gateway name'))
    .option('-d, --disable-ssl-protocols [disable-ssl-protocols]', $('ssl protocols to be disabled on' +
      '\n     application gateway'))
    .option('-p, --policy-type [policy-type]', $('type of Ssl Policy'))
    .option('-r, --policy-name [policy-name]', $('name of Ssl predefined policy'))
    .option('-c, --cipher-suites [cipher-suites]', $('ssl cipher suites to be enabled in the' +
      '\n     specified order to application gateway'))
    .option('-m, --min-protocol-version [min-protocol-version]', $('minimum version of Ssl protocol to be' +
      '\n     supported on application gateway'))
    .option('-s, --subscription <subscription>', $('the subscription identifier'))
    .execute(function(resourceGroup, gatewayName, options, _) {
      resourceGroup = cli.interaction.promptIfNotGiven($('resource group : '), resourceGroup, _);
      gatewayName = cli.interaction.promptIfNotGiven($('gateway name : '), gatewayName, _);

      var subscription = profile.current.getSubscription(options.subscription);
      var networkManagementClient = utils.createNetworkManagementClient(subscription);

      var applicationGateway;
      var progress = cli.interaction.progress(util.format($('Looking up the application gateway "%s"'), gatewayName));
      try {
        applicationGateway = networkManagementClient.applicationGateways.get(resourceGroup, gatewayName, null, _);
      } catch (e) {
        if (e.statusCode === 404) {
          applicationGateway = null;
        } else {
          throw e;
        }
      } finally {
        progress.end();
      }

      if (!applicationGateway) {
        throw new Error(util.format($('application gateway with name "%s" not found in the resource group "%s"'), gatewayName, resourceGroup));
      }

      var parameters = {};
      if(!parameters.sslPolicy) {
        parameters.sslPolicy = {};
      }
      if(options.disableSslProtocols) {
        parameters.sslPolicy.disabledSslProtocols = options.disableSslProtocols.split(',');
      }

      if(options.policyType) {
        parameters.sslPolicy.policyType = validation.isIn(options.policyType, ['Predefined', 'Custom'], '--policy-type');
      }

      if(options.policyName) {
        parameters.sslPolicy.name = options.policyName;
      }

      if(options.cipherSuites) {
        parameters.sslPolicy.cipherSuites = options.cipherSuites.split(',');
      }

      if(options.minProtocolVersion) {
        parameters.sslPolicy.minProtocolVersion = options.minProtocolVersion;
      }

      applicationGateway.sslPolicy = parameters.sslPolicy;

      generatorUtils.removeEmptyObjects(parameters);
      progress = cli.interaction.progress(util.format($('Creating ssl policy in "%s"'), gatewayName));
      try {
        applicationGateway = networkManagementClient.applicationGateways.createOrUpdate(resourceGroup, gatewayName, applicationGateway, _);
      } finally {
        progress.end();
      }

      cli.interaction.formatOutput(applicationGateway.sslPolicy, generatorUtils.traverse);
    });

  sslPolicy.command('set [resource-group] [gateway-name]')
    .description($('Update a ssl policy'))
    .usage('[options] <resource-group> <gateway-name>')
    .option('-g, --resource-group <resource-group>', $('the name of the resource group'))
    .option('-w, --gateway-name <gateway-name>', $('the gateway name'))
    .option('-d, --disable-ssl-protocols [disable-ssl-protocols]', $('ssl protocols to be disabled on' +
      '\n     application gateway'))
    .option('-p, --policy-type [policy-type]', $('type of Ssl Policy'))
    .option('-r, --policy-name [policy-name]', $('name of Ssl predefined policy'))
    .option('-c, --cipher-suites [cipher-suites]', $('ssl cipher suites to be enabled in the' +
      '\n     specified order to application gateway'))
    .option('-m, --min-protocol-version [min-protocol-version]', $('minimum version of Ssl protocol to be' +
      '\n     supported on application gateway'))
    .option('-s, --subscription <subscription>', $('the subscription identifier'))
    .execute(function(resourceGroup, gatewayName, options, _) {
      resourceGroup = cli.interaction.promptIfNotGiven($('resource group : '), resourceGroup, _);
      gatewayName = cli.interaction.promptIfNotGiven($('gateway name : '), gatewayName, _);

      var subscription = profile.current.getSubscription(options.subscription);
      var networkManagementClient = utils.createNetworkManagementClient(subscription);

      var applicationGateway;
      var progress = cli.interaction.progress(util.format($('Looking up the application gateway "%s"'), gatewayName));
      try {
        applicationGateway = networkManagementClient.applicationGateways.get(resourceGroup, gatewayName, null, _);
      } catch (e) {
        if (e.statusCode === 404) {
          applicationGateway = null;
        } else {
          throw e;
        }
      } finally {
        progress.end();
      }

      if (!applicationGateway) {
        throw new Error(util.format($('application gateway with name "%s" not found in the resource group "%s"'), gatewayName, resourceGroup));
      }

      var sslPolicy = applicationGateway.sslPolicy;
      if(!sslPolicy) {
        throw new Error(util.format($('ssl policy not found in the "%s"'), gatewayName));
      }
      var parameters = applicationGateway;
      if(!parameters.sslPolicy) {
        parameters.sslPolicy = {};
      }
      if(options.disableSslProtocols) {
        if(!utils.argHasValue(options.disableSslProtocols)) {
          delete parameters.sslPolicy.disabledSslProtocols;
        } else {
          parameters.sslPolicy.disabledSslProtocols = options.disableSslProtocols.split(',');
        }
      }

      if(options.policyType) {
        if(!utils.argHasValue(options.policyType)) {
          delete parameters.sslPolicy.policyType;
        } else {
          parameters.sslPolicy.policyType = validation.isIn(options.policyType, ['Predefined', 'Custom'], '--policy-type');
        }
      }

      if(options.policyName) {
        if(!utils.argHasValue(options.policyName)) {
          delete parameters.sslPolicy.name;
        } else {
          parameters.sslPolicy.name = options.policyName;
        }
      }

      if(options.cipherSuites) {
        if(!utils.argHasValue(options.cipherSuites)) {
          delete parameters.sslPolicy.cipherSuites;
        } else {
          parameters.sslPolicy.cipherSuites = options.cipherSuites.split(',');
        }
      }

      if(options.minProtocolVersion) {
        if(!utils.argHasValue(options.minProtocolVersion)) {
          delete parameters.sslPolicy.minProtocolVersion;
        } else {
          parameters.sslPolicy.minProtocolVersion = options.minProtocolVersion;
        }
      }

      generatorUtils.removeEmptyObjects(parameters);
      progress = cli.interaction.progress(util.format($('Updating ssl policy in "%s"'), gatewayName));
      try {
        applicationGateway = networkManagementClient.applicationGateways.createOrUpdate(resourceGroup, gatewayName, applicationGateway, _);
      } finally {
        progress.end();
      }
      cli.interaction.formatOutput(applicationGateway.sslPolicy, generatorUtils.traverse);
    });

  sslPolicy.command('delete [resource-group] [gateway-name]')
    .description($('Delete a ssl policy'))
    .usage('[options] <resource-group> <gateway-name>')
    .option('-g, --resource-group <resource-group>', $('the name of the resource group'))
    .option('-w, --gateway-name <gateway-name>', $('the gateway name'))
    .option('-q, --quiet', $('quiet mode, do not ask for delete confirmation'))
    .option('-s, --subscription <subscription>', $('the subscription identifier'))
    .execute(function(resourceGroup, gatewayName, options, _) {
      resourceGroup = cli.interaction.promptIfNotGiven($('resource group : '), resourceGroup, _);
      gatewayName = cli.interaction.promptIfNotGiven($('gateway name : '), gatewayName, _);

      var subscription = profile.current.getSubscription(options.subscription);
      var networkManagementClient = utils.createNetworkManagementClient(subscription);

      var applicationGateway;
      var progress = cli.interaction.progress(util.format($('Looking up the application gateway "%s"'), gatewayName));
      try {
        applicationGateway = networkManagementClient.applicationGateways.get(resourceGroup, gatewayName, null, _);
      } catch (e) {
        if (e.statusCode === 404) {
          applicationGateway = null;
        } else {
          throw e;
        }
      } finally {
        progress.end();
      }

      if (!applicationGateway) {
        throw new Error(util.format($('application gateway "%s" not found in the resource group "%s"'), gatewayName, resourceGroup));
      }


      if (!options.quiet && !cli.interaction.confirm(util.format($('Delete ssl policy from "%s"? [y/n] '), gatewayName), _)) {
        return;
      }

      delete applicationGateway.sslPolicy;
      progress = cli.interaction.progress('Deleting ssl policy');
      try {
        applicationGateway = networkManagementClient.applicationGateways.createOrUpdate(resourceGroup, gatewayName, applicationGateway, _);
      } finally {
        progress.end();
      }
    });

  sslPolicy.command('show [resource-group] [gateway-name]')
    .description($('Show a ssl policy'))
    .usage('[options] <resource-group> <gateway-name>')
    .option('-g, --resource-group <resource-group>', $('the name of the resource group'))
    .option('-w, --gateway-name <gateway-name>', $('the gateway name'))
    .option('-s, --subscription <subscription>', $('the subscription identifier'))
    .execute(function(resourceGroup, gatewayName, options, _) {
      resourceGroup = cli.interaction.promptIfNotGiven($('resource group : '), resourceGroup, _);
      gatewayName = cli.interaction.promptIfNotGiven($('gateway name : '), gatewayName, _);

      var subscription = profile.current.getSubscription(options.subscription);
      var networkManagementClient = utils.createNetworkManagementClient(subscription);

      var applicationGateway;
      var progress = cli.interaction.progress(util.format($('Looking up the application gateway "%s"'), gatewayName));
      try {
        applicationGateway = networkManagementClient.applicationGateways.get(resourceGroup, gatewayName, null, _);
      } catch (e) {
        if (e.statusCode === 404) {
          applicationGateway = null;
        } else {
          throw e;
        }
      } finally {
        progress.end();
      }

      if (!applicationGateway) {
        throw new Error(util.format($('application gateway with name "%s" not found in the resource group "%s"'), gatewayName, resourceGroup));
      }

      var sslPolicy = applicationGateway.sslPolicy;
      if(!sslPolicy) {
        cli.output.warn(util.format($('ssl policy not found in the "%s"'), applicationGateway.name));
      }

      cli.interaction.formatOutput(sslPolicy, generatorUtils.traverse);
    });

  sslPolicy.command('list [resource-group] [gateway-name]')
    .description($('List ssl policy'))
    .usage('[options] <resource-group> <gateway-name>')
    .option('-g, --resource-group <resource-group>', $('the name of the resource group'))
    .option('-w, --gateway-name <gateway-name>', $('the gateway name'))
    .option('-s, --subscription <subscription>', $('the subscription identifier'))
    .execute(function(resourceGroup, gatewayName, options, _) {
      var subscription = profile.current.getSubscription(options.subscription);
      var networkManagementClient = utils.createNetworkManagementClient(subscription);

      var applicationGateway = null;
      var progress = cli.interaction.progress(util.format($('Looking up the application gateway "%s"'), gatewayName));
      try {
        applicationGateway = networkManagementClient.applicationGateways.get(resourceGroup, gatewayName, null, _);
      } catch (e) {
        if (e.statusCode === 404) {
          applicationGateway = null;
        } else {
          throw e;
        }
      } finally {
        progress.end();
      }

      if(!applicationGateway) {
        throw new Error(util.format($('application gateways with name "%s" not found in the resource group "%s"'), gatewayName, resourceGroup));
      }

      var items = applicationGateway.sslPolicy;
      cli.interaction.formatOutput(items, function(items) {
        if (items.length === 0) {
          cli.output.warn($('No ssl policy found'));
        } else {
          cli.output.table(items, function (row, item) {
            row.cell($('Name'), item.name);
            var resInfo = resourceUtils.getResourceInformation(item.id);
            row.cell($('Resource group'), resInfo.resourceGroup);
            row.cell($('Provisioning state'), item.provisioningState);
          });
        }
      });
    });
};
