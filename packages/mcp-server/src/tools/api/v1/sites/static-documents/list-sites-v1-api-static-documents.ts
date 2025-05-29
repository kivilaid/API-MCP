// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import SSs from 'sss';

export const metadata: Metadata = {
  resource: 'api.v1.sites.static_documents',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v1/sites/static-documents/{tenantTag}',
  operationId: 'ac63dbc5d06ca437330046020b7c6b47',
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

export const handler = (client: SSs, args: Record<string, unknown> | undefined) => {
  const { tenantTag, ...body } = args as any;
  return client.api.v1.sites.staticDocuments.list(tenantTag);
};

export default { metadata, tool, handler };
