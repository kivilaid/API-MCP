// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import SSs from 'sss';

export const metadata: Metadata = {
  resource: 'api.v1.sites.static_documents',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'list_sites_v1_api_static_documents',
  description: 'Get list of static documents',
  inputSchema: {
    type: 'object',
    properties: {
      tenantTag: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: SSs, args: any) => {
  const { tenantTag } = args;
  return client.api.v1.sites.staticDocuments.list(tenantTag);
};

export default { metadata, tool, handler };
