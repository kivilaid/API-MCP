// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../../../';
import SSs from 'sss';

export const metadata: Metadata = {
  resource: 'api.v1.sites.schemes.configurations.ui',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'update_configurations_schemes_sites_v1_api_ui',
  description: 'Update UI scheme',
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
      body: {
        type: 'object',
      },
    },
  },
};

export const handler = (client: SSs, args: any) => {
  const { version, ...body } = args;
  return client.api.v1.sites.schemes.configurations.ui.update(version, body);
};

export default { metadata, tool, handler };
