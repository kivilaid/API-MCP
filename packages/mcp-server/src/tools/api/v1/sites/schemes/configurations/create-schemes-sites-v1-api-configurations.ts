// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../../';
import SSs from 'sss';

export const metadata: Metadata = {
  resource: 'api.v1.sites.schemes.configurations',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_schemes_sites_v1_api_configurations',
  description: 'Create a scheme',
  inputSchema: {
    type: 'object',
    properties: {
      tenantTag: {
        type: 'string',
      },
      type: {
        type: 'string',
      },
      name: {
        type: 'string',
      },
      body: {
        type: 'object',
      },
    },
  },
};

export const handler = (client: SSs, args: Record<string, unknown> | undefined) => {
  const { name, ...body } = args as any;
  return client.api.v1.sites.schemes.configurations.create(name, body);
};

export default { metadata, tool, handler };
