// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import SSs from 'sss';

export const metadata: Metadata = {
  resource: 'api.v1.sites.schemes',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v1/sites/schemes/version/{tenantTag}/{type}/{name}',
  operationId: 'c0ee708e7d6ac68452b5f3bc7b51b78b',
};

export const tool: Tool = {
  name: 'retrieve_latest_version_sites_v1_api_schemes',
  description: 'Get latest scheme version',
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
    },
  },
};

export const handler = (client: SSs, args: Record<string, unknown> | undefined) => {
  const { name, ...body } = args as any;
  return client.api.v1.sites.schemes.retrieveLatestVersion(name, body);
};

export default { metadata, tool, handler };
