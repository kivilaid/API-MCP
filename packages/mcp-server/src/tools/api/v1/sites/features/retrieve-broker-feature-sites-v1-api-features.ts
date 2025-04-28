// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import SSs from 'sss';

export const metadata: Metadata = {
  resource: 'api.v1.sites.features',
  operation: 'read',
  tags: [],
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

export const handler = (client: SSs, args: any) => {
  const { broker, ...body } = args;
  return client.api.v1.sites.features.retrieveBrokerFeature(broker, body);
};

export default { metadata, tool, handler };
