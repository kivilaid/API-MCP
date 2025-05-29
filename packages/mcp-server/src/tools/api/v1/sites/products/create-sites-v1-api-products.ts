// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import SSs from 'sss';

export const metadata: Metadata = {
  resource: 'api.v1.sites.products',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v1/sites/products/{tenantTag}',
  operationId: 'e2e54aec2faf75675f89ea0060119273',
};

export const tool: Tool = {
  name: 'create_sites_v1_api_products',
  description: 'Creates stubs for product schemas, schema features and product features',
  inputSchema: {
    type: 'object',
    properties: {
      tenantTag: {
        type: 'string',
      },
      name: {
        type: 'string',
        description: 'New product name',
      },
      title: {
        type: 'string',
        description: 'New product title',
      },
    },
  },
};

export const handler = (client: SSs, args: Record<string, unknown> | undefined) => {
  const { tenantTag, ...body } = args as any;
  return client.api.v1.sites.products.create(tenantTag, body);
};

export default { metadata, tool, handler };
