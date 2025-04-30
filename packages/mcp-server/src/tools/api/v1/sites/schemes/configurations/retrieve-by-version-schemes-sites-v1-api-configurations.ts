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
  name: 'retrieve_by_version_schemes_sites_v1_api_configurations',
  description: 'Get JSON scheme by version',
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
      version: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: SSs, args: Record<string, unknown> | undefined) => {
  const { version, ...body } = args as any;
  return client.api.v1.sites.schemes.configurations.retrieveByVersion(version, body);
};

export default { metadata, tool, handler };
