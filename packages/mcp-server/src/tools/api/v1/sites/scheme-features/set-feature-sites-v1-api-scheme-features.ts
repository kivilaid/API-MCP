// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import SSs from 'sss';

export const metadata: Metadata = {
  resource: 'api.v1.sites.scheme_features',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'set_feature_sites_v1_api_scheme_features',
  description: 'Set scheme feature',
  inputSchema: {
    type: 'object',
    properties: {
      tenantTag: {
        type: 'string',
      },
      schemaType: {
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
  return client.api.v1.sites.schemeFeatures.setFeature(featureName, body);
};

export default { metadata, tool, handler };
