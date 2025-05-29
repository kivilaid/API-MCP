// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import SSs from 'sss';

export const metadata: Metadata = {
  resource: 'api.v1.sites.product_features',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v1/sites/product-features/{tenantTag}/{schemaName}',
  operationId: '4d7681ccbab6ead88573cf7b280893bf',
};

export const tool: Tool = {
  name: 'set_sites_v1_api_product_features',
  description: 'Set tenant product features',
  inputSchema: {
    type: 'object',
    properties: {
      tenantTag: {
        type: 'string',
      },
      schemaName: {
        type: 'string',
      },
      body: {
        type: 'object',
      },
    },
  },
};

export const handler = (client: SSs, args: Record<string, unknown> | undefined) => {
  const { schemaName, ...body } = args as any;
  return client.api.v1.sites.productFeatures.set(schemaName, body);
};

export default { metadata, tool, handler };
