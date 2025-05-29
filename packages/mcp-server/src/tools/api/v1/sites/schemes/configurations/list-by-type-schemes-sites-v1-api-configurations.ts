// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../../';
import SSs from 'sss';

export const metadata: Metadata = {
  resource: 'api.v1.sites.schemes.configurations',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v1/sites/schemes/configurations/{tenantTag}/{type}',
  operationId: '06451373fb97a560e85fd9660e0d5e9e',
};

export const tool: Tool = {
  name: 'list_by_type_schemes_sites_v1_api_configurations',
  description: 'Get schemes list of latest version by type',
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
  const { type, ...body } = args as any;
  return client.api.v1.sites.schemes.configurations.listByType(type, body);
};

export default { metadata, tool, handler };
