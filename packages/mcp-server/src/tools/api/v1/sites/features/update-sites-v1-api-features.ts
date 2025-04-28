// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import SSs from 'sss';

export const metadata: Metadata = {
  resource: 'api.v1.sites.features',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'update_sites_v1_api_features',
  description: 'Update tenant features',
  inputSchema: {
    type: 'object',
    properties: {
      tenantTag: {
        type: 'string',
      },
      body: {
        type: 'object',
      },
    },
  },
};

export const handler = (client: SSs, args: any) => {
  const { tenantTag, ...body } = args;
  return client.api.v1.sites.features.update(tenantTag, body);
};

export default { metadata, tool, handler };
