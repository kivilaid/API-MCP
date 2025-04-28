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
  name: 'retrieve_content_sites_v1_api_static_documents',
  description: 'Get static document content',
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
  return client.api.v1.sites.staticDocuments.retrieveContent(path, body);
};

export default { metadata, tool, handler };
