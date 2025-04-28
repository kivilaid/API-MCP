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
  name: 'list_sites_v1_api_scheme_features',
  description: 'Get tenant scheme features - internal purposes only, used by deploy automation tool',
  inputSchema: {
    type: 'object',
    properties: {
      tenantTag: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: SSs, args: any) => {
  const { tenantTag } = args;
  return client.api.v1.sites.schemeFeatures.list(tenantTag);
};

export default { metadata, tool, handler };
