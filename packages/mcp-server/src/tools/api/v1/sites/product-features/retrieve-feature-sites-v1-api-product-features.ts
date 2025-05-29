// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import SSs from 'sss';

export const metadata: Metadata = {
  resource: 'api.v1.sites.product_features',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v1/sites/product-features/{tenantTag}/{schemaName}/{featureName}',
  operationId: 'cfd1a6e299a8d8b1df64e00483c3279c',
};

export const tool: Tool = {
  name: 'retrieve_feature_sites_v1_api_product_features',
  description: 'Get specific product feature',
  inputSchema: {
    type: 'object',
    properties: {
      tenantTag: {
        type: 'string',
      },
      schemaName: {
        type: 'string',
      },
      featureName: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: SSs, args: Record<string, unknown> | undefined) => {
  const { featureName, ...body } = args as any;
  return client.api.v1.sites.productFeatures.retrieveFeature(featureName, body);
};

export default { metadata, tool, handler };
