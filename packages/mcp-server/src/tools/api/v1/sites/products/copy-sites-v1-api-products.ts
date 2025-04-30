// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import SSs from 'sss';

export const metadata: Metadata = {
  resource: 'api.v1.sites.products',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'copy_sites_v1_api_products',
  description: 'Copies existing product schemas, scheme features and product features to a new product',
  inputSchema: {
    type: 'object',
    properties: {
      tenantTag: {
        type: 'string',
      },
      source: {
        type: 'string',
        description: 'Source product name',
      },
      target: {
        type: 'object',
        properties: {
          name: {
            type: 'string',
            description: 'Target product name',
          },
          title: {
            type: 'string',
            description: 'Target product title',
          },
        },
        required: ['name', 'title'],
      },
    },
  },
};

export const handler = (client: SSs, args: Record<string, unknown> | undefined) => {
  const { tenantTag, ...body } = args as any;
  return client.api.v1.sites.products.copy(tenantTag, body);
};

export default { metadata, tool, handler };
