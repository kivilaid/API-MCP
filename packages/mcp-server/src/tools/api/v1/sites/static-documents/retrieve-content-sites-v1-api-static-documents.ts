// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import SSs from 'sss';

export const metadata: Metadata = {
  resource: 'api.v1.sites.static_documents',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v1/sites/static-documents/{tenantTag}/{path}',
  operationId: 'dc6faf5b0dd398deb6344ae3ad214a29',
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

export const handler = (client: SSs, args: Record<string, unknown> | undefined) => {
  const { path, ...body } = args as any;
  return client.api.v1.sites.staticDocuments.retrieveContent(path, body);
};

export default { metadata, tool, handler };
