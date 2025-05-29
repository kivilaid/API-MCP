// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import SSs from 'sss';

export const metadata: Metadata = {
  resource: 'api.v1.sites.product_features',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v1/sites/product-features/{tenantTag}/{schemaName}',
  operationId: '193ac054ff7c8d456ca8f802d610713c',
};

export const tool: Tool = {
  name: 'list_by_schema_sites_v1_api_product_features',
  description: 'Get tenant product features for specific product',
  inputSchema: {
    type: 'object',
    properties: {
      tenantTag: {
        type: 'string',
      },
      schemaName: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: SSs, args: Record<string, unknown> | undefined) => {
  const { schemaName, ...body } = args as any;
  return client.api.v1.sites.productFeatures.listBySchema(schemaName, body);
};

export default { metadata, tool, handler };
