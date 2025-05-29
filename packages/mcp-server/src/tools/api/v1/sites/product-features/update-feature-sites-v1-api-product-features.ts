// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import SSs from 'sss';

export const metadata: Metadata = {
  resource: 'api.v1.sites.product_features',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/api/v1/sites/product-features/{tenantTag}/{schemaName}/{featureName}',
  operationId: 'e53c7d4a1d80a44d0070d1e5098064af',
};

export const tool: Tool = {
  name: 'update_feature_sites_v1_api_product_features',
  description: 'Update specific product feature',
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
      body: {
        type: 'object',
      },
    },
  },
};

export const handler = (client: SSs, args: Record<string, unknown> | undefined) => {
  const { featureName, ...body } = args as any;
  return client.api.v1.sites.productFeatures.updateFeature(featureName, body);
};

export default { metadata, tool, handler };
