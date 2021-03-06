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

var profile = require('../../../util/profile');
var utils = require('../../../util/utils');

var $ = utils.getLocaleString;

exports.init = function (cli) {
  var network = cli.category('network')
    .description($('Commands to manage network resources'));
  var expressRoutes = network.category('express-route')
    .description($('Commands to manage express routes'));
  var expressRouteCircuitAuthorizations = expressRoutes.category('authorization')
    .description($('Commands to manage express route circuit authorizations'));

  expressRouteCircuitAuthorizations.command('create [resource-group] [circuit-name] [auth-name] [key]')
    .description($('Create an express route circuit authorization'))
    .usage('[options] <resource-group> <circuit-name> <auth-name> <key>')
    .option('-g, --resource-group <resource-group>', $('the name of the resource group'))
    .option('-c, --circuit-name <circuit-name>', $('the circuit name'))
    .option('-n, --auth-name <auth-name>', $('the auth name'))
    .option('-k, --key <key>', $('sets AuthorizationKey'))
    .option('-s, --subscription <subscription>', $('the subscription identifier'))
    .execute(function(resourceGroup, circuitName, authName, key, options, _) {
      resourceGroup = cli.interaction.promptIfNotGiven($('resource group : '), resourceGroup, _);
      circuitName = cli.interaction.promptIfNotGiven($('circuit name : '), circuitName, _);
      authName = cli.interaction.promptIfNotGiven($('auth name : '), authName, _);
      options.key = cli.interaction.promptIfNotGiven($('key : '), key, _);

      var subscription = profile.current.getSubscription(options.subscription);
      var networkManagementClient = utils.createNetworkManagementClient(subscription);

      var expressRouteCircuitAuthorization;
      var progress = cli.interaction.progress(util.format($('Looking up the express route circuit authorization "%s"'), authName));
      try {
        expressRouteCircuitAuthorization = networkManagementClient.expressRouteCircuitAuthorizations.get(resourceGroup, circuitName, authName, null, _);
      } catch (e) {
        if (e.statusCode === 404) {
          expressRouteCircuitAuthorization = null;
        } else {
          throw e;
        }
      } finally {
        progress.end();
      }

      if (expressRouteCircuitAuthorization) {
        throw new Error(util.format($('express route circuit authorization with name "%s" already exists in the resource group "%s"'), authName, resourceGroup));
      }

      var parameters = {};
      if(options.key) {
        parameters.authorizationKey = options.key.toString('base64');
      }

      generatorUtils.removeEmptyObjects(parameters);
      progress = cli.interaction.progress(util.format($('Creating express route circuit authorization "%s"'), authName));
      try {
        expressRouteCircuitAuthorization = networkManagementClient.expressRouteCircuitAuthorizations.createOrUpdate(resourceGroup, circuitName, authName, parameters, _);
      } finally {
        progress.end();
      }

      cli.interaction.formatOutput(expressRouteCircuitAuthorization, generatorUtils.traverse);
    });

  expressRouteCircuitAuthorizations.command('set [resource-group] [circuit-name] [auth-name]')
    .description($('Update an express route circuit authorization'))
    .usage('[options] <resource-group> <circuit-name> <auth-name>')
    .option('-g, --resource-group <resource-group>', $('the name of the resource group'))
    .option('-c, --circuit-name <circuit-name>', $('the circuit name'))
    .option('-n, --auth-name <auth-name>', $('the auth name'))
    .option('-k, --key [key]', $('sets AuthorizationKey'))
    .option('-s, --subscription <subscription>', $('the subscription identifier'))
    .execute(function(resourceGroup, circuitName, authName, options, _) {
      resourceGroup = cli.interaction.promptIfNotGiven($('resource group : '), resourceGroup, _);
      circuitName = cli.interaction.promptIfNotGiven($('circuit name : '), circuitName, _);
      authName = cli.interaction.promptIfNotGiven($('auth name : '), authName, _);

      var subscription = profile.current.getSubscription(options.subscription);
      var networkManagementClient = utils.createNetworkManagementClient(subscription);

      var expressRouteCircuitAuthorization;
      var progress = cli.interaction.progress(util.format($('Looking up the express route circuit authorization "%s"'), authName));
      try {
        expressRouteCircuitAuthorization = networkManagementClient.expressRouteCircuitAuthorizations.get(resourceGroup, circuitName, authName, null, _);
      } catch (e) {
        if (e.statusCode === 404) {
          expressRouteCircuitAuthorization = null;
        } else {
          throw e;
        }
      } finally {
        progress.end();
      }

      if (!expressRouteCircuitAuthorization) {
        throw new Error(util.format($('express route circuit authorization with name "%s" not found in the resource group "%s"'), authName, resourceGroup));
      }

      var parameters = expressRouteCircuitAuthorization;
      if(options.key) {
        parameters.authorizationKey = options.key.toString('base64');
      }

      generatorUtils.removeEmptyObjects(parameters);
      progress = cli.interaction.progress(util.format($('Updating express route circuit authorization "%s"'), authName));
      try {
        expressRouteCircuitAuthorization = networkManagementClient.expressRouteCircuitAuthorizations.createOrUpdate(resourceGroup, circuitName, authName, parameters, _);
      } finally {
        progress.end();
      }

      cli.interaction.formatOutput(expressRouteCircuitAuthorization, generatorUtils.traverse);
    });

  expressRouteCircuitAuthorizations.command('delete [resource-group] [circuit-name] [auth-name]')
    .description($('Delete an express route circuit authorization'))
    .usage('[options] <resource-group> <circuit-name> <auth-name>')
    .option('-g, --resource-group <resource-group>', $('the name of the resource group'))
    .option('-c, --circuit-name <circuit-name>', $('the circuit name'))
    .option('-n, --auth-name <auth-name>', $('the auth name'))
    .option('-q, --quiet', $('quiet mode, do not ask for delete confirmation'))
    .option('-s, --subscription <subscription>', $('the subscription identifier'))
    .execute(function(resourceGroup, circuitName, authName, options, _) {
      resourceGroup = cli.interaction.promptIfNotGiven($('resource group : '), resourceGroup, _);
      circuitName = cli.interaction.promptIfNotGiven($('circuit name : '), circuitName, _);
      authName = cli.interaction.promptIfNotGiven($('auth name : '), authName, _);

      var subscription = profile.current.getSubscription(options.subscription);
      var networkManagementClient = utils.createNetworkManagementClient(subscription);

      var expressRouteCircuitAuthorization;
      var progress = cli.interaction.progress(util.format($('Looking up the express route circuit authorization "%s"'), authName));
      try {
        expressRouteCircuitAuthorization = networkManagementClient.expressRouteCircuitAuthorizations.get(resourceGroup, circuitName, authName, null, _);
      } catch (e) {
        if (e.statusCode === 404) {
          expressRouteCircuitAuthorization = null;
        } else {
          throw e;
        }
      } finally {
        progress.end();
      }

      if (!expressRouteCircuitAuthorization) {
        throw new Error(util.format($('express route circuit authorization with name "%s" not found in the resource group "%s"'), authName, resourceGroup));
      }

      if (!options.quiet && !cli.interaction.confirm(util.format($('Delete express route circuit authorization "%s"? [y/n] '), authName), _)) {
        cli.output.info(util.format($('express route circuit authorization "%s" was not deleted and still exists in the resource group "%s"'), authName, resourceGroup));
        return;
      }

      progress = cli.interaction.progress(util.format($('Deleting express route circuit authorization "%s"'), authName));
      try {
        expressRouteCircuitAuthorization = networkManagementClient.expressRouteCircuitAuthorizations.deleteMethod(resourceGroup, circuitName, authName, _);
        cli.output.info(util.format($('express route circuit authorization "%s" was successfully deleted from resource group "%s"'), authName, resourceGroup));
      } finally {
        progress.end();
      }
    });

  expressRouteCircuitAuthorizations.command('show [resource-group] [circuit-name] [auth-name]')
    .description($('Show an express route circuit authorization'))
    .usage('[options] <resource-group> <circuit-name> <auth-name>')
    .option('-g, --resource-group <resource-group>', $('the name of the resource group'))
    .option('-c, --circuit-name <circuit-name>', $('the circuit name'))
    .option('-n, --auth-name <auth-name>', $('the auth name'))
    .option('-s, --subscription <subscription>', $('the subscription identifier'))
    .execute(function(resourceGroup, circuitName, authName, options, _) {
      resourceGroup = cli.interaction.promptIfNotGiven($('resource group : '), resourceGroup, _);
      circuitName = cli.interaction.promptIfNotGiven($('circuit name : '), circuitName, _);
      authName = cli.interaction.promptIfNotGiven($('auth name : '), authName, _);

      var subscription = profile.current.getSubscription(options.subscription);
      var networkManagementClient = utils.createNetworkManagementClient(subscription);

      var expressRouteCircuitAuthorization;
      var progress = cli.interaction.progress(util.format($('Looking up the express route circuit authorization "%s"'), authName));
      try {
        expressRouteCircuitAuthorization = networkManagementClient.expressRouteCircuitAuthorizations.get(resourceGroup, circuitName, authName, null, _);
      } catch (e) {
        if (e.statusCode === 404) {
          expressRouteCircuitAuthorization = null;
        } else {
          throw e;
        }
      } finally {
        progress.end();
      }

      if (!expressRouteCircuitAuthorization) {
        cli.output.warn(util.format($('express route circuit authorization with name "%s" not found in the resource group "%s"'), authName, resourceGroup));
      }

      cli.interaction.formatOutput(expressRouteCircuitAuthorization, generatorUtils.traverse);
    });

  expressRouteCircuitAuthorizations.command('list [resource-group] [circuit-name]')
    .description($('List express route circuit authorizations'))
    .usage('[options] <resource-group> <circuit-name>')
    .option('-g, --resource-group <resource-group>', $('the name of the resource group'))
    .option('-c, --circuit-name <circuit-name>', $('the circuit name'))
    .option('-s, --subscription <subscription>', $('the subscription identifier'))
    .execute(function(resourceGroup, circuitName, options, _) {
      options.resourceGroup = resourceGroup;
      var subscription = profile.current.getSubscription(options.subscription);
      var networkManagementClient = utils.createNetworkManagementClient(subscription);

      var expressRouteCircuitAuthorization = null;
      var progress;
      try {
        if(typeof networkManagementClient.expressRouteCircuitAuthorizations.listAll != 'function') {
          resourceGroup = cli.interaction.promptIfNotGiven($('resource-group : '), resourceGroup, _);
          circuitName = cli.interaction.promptIfNotGiven($('express route circuit : '), circuitName, _);
          progress = cli.interaction.progress($('Getting the express route circuit authorizations'));
          expressRouteCircuitAuthorization = networkManagementClient.expressRouteCircuitAuthorizations.list(resourceGroup, circuitName,  _);
        } else {
          if(options.resourceGroup) {
            circuitName = cli.interaction.promptIfNotGiven($('express route circuit : '), circuitName, _);
            progress = cli.interaction.progress($('Getting the express route circuit authorizations'));
            expressRouteCircuitAuthorization = networkManagementClient.expressRouteCircuitAuthorizations.list(resourceGroup, circuitName,  _);
          } else {
            circuitName = cli.interaction.promptIfNotGiven($('express route circuit : '), circuitName, _);
            progress = cli.interaction.progress($('Getting the express route circuit authorizations'));
            expressRouteCircuitAuthorization = networkManagementClient.expressRouteCircuitAuthorizations.listAll(circuitName, _);
          }
        }
      } finally {
        progress.end();
      }

      cli.interaction.formatOutput(expressRouteCircuitAuthorization, function(expressRouteCircuitAuthorization) {
        if (expressRouteCircuitAuthorization.length === 0) {
          cli.output.warn($('No express route circuit authorizations found'));
        } else {
          cli.output.table(expressRouteCircuitAuthorization, function (row, item) {
            row.cell($('Name'), item.name);
            var resInfo = resourceUtils.getResourceInformation(item.id);
            row.cell($('Resource group'), resInfo.resourceGroup);
            row.cell($('Provisioning state'), item.provisioningState);
          });
        }
      });
    });
};
