// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../../../';
import SSs from 'sss';

export const metadata: Metadata = {
  resource: 'api.v1.sites.schemes.configurations.ui',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v1/sites/schemes/configurations/{tenantTag}/{type}/{name}/ui',
  operationId: 'f0dda1bfaf69b8198274b55580c8ec2a',
};

export const tool: Tool = {
  name: 'retrieve_latest_configurations_schemes_sites_v1_api_ui',
  description: 'Get latest version UI scheme',
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
  return client.api.v1.sites.schemes.configurations.ui.retrieveLatest(name, body);
};

export default { metadata, tool, handler };
