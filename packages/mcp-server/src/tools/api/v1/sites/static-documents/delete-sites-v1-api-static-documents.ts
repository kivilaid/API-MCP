// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import SSs from 'sss';

export const metadata: Metadata = {
  resource: 'api.v1.sites.static_documents',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'delete_sites_v1_api_static_documents',
  description: 'Delete static document',
  inputSchema: {
    type: 'object',
    properties: {
      tenantTag: {
        type: 'string',
      },
      path: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: SSs, args: any) => {
  const { path, ...body } = args;
  return client.api.v1.sites.staticDocuments.delete(path, body);
};

export default { metadata, tool, handler };
