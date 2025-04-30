// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../../';
import SSs from 'sss';

export const metadata: Metadata = {
  resource: 'api.v1.sites.schemes.configurations',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_schemes_sites_v1_api_configurations',
  description: 'Get schemes list of latest version',
  inputSchema: {
    type: 'object',
    properties: {
      tenantTag: {
        type: 'string',
      },
      name: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: SSs, args: Record<string, unknown> | undefined) => {
  const { tenantTag, ...body } = args as any;
  return client.api.v1.sites.schemes.configurations.list(tenantTag, body);
};

export default { metadata, tool, handler };
