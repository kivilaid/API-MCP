// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import SSs from 'sss';

export const metadata: Metadata = {
  resource: 'api.v1.sites.claim_features',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'save_sites_v1_api_claim_features',
  description: 'Save claim features - internal purposes only, used by deploy automation tool',
  inputSchema: {
    type: 'object',
    properties: {
      tenantTag: {
        type: 'string',
      },
      schemaName: {
        type: 'string',
      },
      feature_name: {
        type: 'object',
      },
    },
  },
};

export const handler = (client: SSs, args: any) => {
  const { schemaName, ...body } = args;
  return client.api.v1.sites.claimFeatures.save(schemaName, body);
};

export default { metadata, tool, handler };
