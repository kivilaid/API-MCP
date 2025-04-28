// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../../../';
import SSs from 'sss';

export const metadata: Metadata = {
  resource: 'api.v1.sites.schemes.configurations.ui',
  operation: 'read',
  tags: [],
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

export const handler = (client: SSs, args: any) => {
  const { name, ...body } = args;
  return client.api.v1.sites.schemes.configurations.ui.retrieveLatest(name, body);
};

export default { metadata, tool, handler };
