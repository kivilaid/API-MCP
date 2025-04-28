// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import SSs from 'sss';

export const metadata: Metadata = {
  resource: 'api.v1.sites.scheme_features',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'retrieve_feature_sites_v1_api_scheme_features',
  description: 'Get scheme feature',
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
    },
  },
};

export const handler = (client: SSs, args: any) => {
  const { featureName, ...body } = args;
  return client.api.v1.sites.schemeFeatures.retrieveFeature(featureName, body);
};

export default { metadata, tool, handler };
