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
  name: 'save_sites_v1_api_scheme_features',
  description: 'Save scheme features - internal purposes only, used by deploy automation tool',
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
      autocomplete: {
        type: 'object',
      },
    },
  },
};

export const handler = (client: SSs, args: Record<string, unknown> | undefined) => {
  const { schemaName, ...body } = args as any;
  return client.api.v1.sites.schemeFeatures.save(schemaName, body);
};

export default { metadata, tool, handler };
