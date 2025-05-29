// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import SSs from 'sss';

export const metadata: Metadata = {
  resource: 'api.v1.sites.product_features',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v1/sites/product-features/{tenantTag}',
  operationId: 'aeba44c696632e2d6fea98b9fc48cedf',
};

export const tool: Tool = {
  name: 'list_sites_v1_api_product_features',
  description: 'Get tenant product features',
  inputSchema: {
    type: 'object',
    properties: {
      tenantTag: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: SSs, args: Record<string, unknown> | undefined) => {
  const { tenantTag, ...body } = args as any;
  return client.api.v1.sites.productFeatures.list(tenantTag);
};

export default { metadata, tool, handler };
