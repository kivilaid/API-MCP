// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import SSs from 'sss';

export const metadata: Metadata = {
  resource: 'api.v1.sites.features',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v1/sites/features/{tenantTag}/{featureName}/{broker}',
  operationId: '07da38d66d1847022a47bb7dfdcfae7a',
};

export const tool: Tool = {
  name: 'retrieve_broker_feature_sites_v1_api_features',
  description: 'If no auth token provided only publicly available features can be shown',
  inputSchema: {
    type: 'object',
    properties: {
      tenantTag: {
        type: 'string',
      },
      featureName: {
        type: 'string',
      },
      broker: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: SSs, args: Record<string, unknown> | undefined) => {
  const { broker, ...body } = args as any;
  return client.api.v1.sites.features.retrieveBrokerFeature(broker, body);
};

export default { metadata, tool, handler };
