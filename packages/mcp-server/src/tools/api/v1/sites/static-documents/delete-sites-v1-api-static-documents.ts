// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import SSs from 'sss';

export const metadata: Metadata = {
  resource: 'api.v1.sites.static_documents',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/api/v1/sites/static-documents/{tenantTag}/{path}',
  operationId: 'f136df628b71e0143e16c214a88a4866',
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

export const handler = (client: SSs, args: Record<string, unknown> | undefined) => {
  const { path, ...body } = args as any;
  return client.api.v1.sites.staticDocuments.delete(path, body);
};

export default { metadata, tool, handler };
