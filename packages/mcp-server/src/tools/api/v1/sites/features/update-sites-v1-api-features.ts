// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import SSs from 'sss';

export const metadata: Metadata = {
  resource: 'api.v1.sites.features',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/api/v1/sites/features/{tenantTag}',
  operationId: '015554cedc9aa4738283749373074499',
};

export const tool: Tool = {
  name: 'update_sites_v1_api_features',
  description: 'Update tenant features',
  inputSchema: {
    type: 'object',
    properties: {
      tenantTag: {
        type: 'string',
      },
      body: {
        type: 'object',
      },
    },
  },
};

export const handler = (client: SSs, args: Record<string, unknown> | undefined) => {
  const { tenantTag, ...body } = args as any;
  return client.api.v1.sites.features.update(tenantTag, body);
};

export default { metadata, tool, handler };
