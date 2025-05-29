// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import SSs from 'sss';

export const metadata: Metadata = {
  resource: 'api.v1.sites.static_documents',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/api/v1/sites/static-documents/{tenantTag}',
  operationId: '1a9932e99fdeb0d8f1f8ef4025a5eae2',
};

export const tool: Tool = {
  name: 'upload_sites_v1_api_static_documents',
  description: 'Upload static document(s)',
  inputSchema: {
    type: 'object',
    properties: {
      tenantTag: {
        type: 'string',
      },
      files: {
        type: 'array',
        description: 'Document',
        items: {
          type: 'string',
        },
      },
      folder: {
        type: 'string',
        description: 'Folder where to store document',
      },
    },
  },
};

export const handler = (client: SSs, args: Record<string, unknown> | undefined) => {
  const { tenantTag, ...body } = args as any;
  return client.api.v1.sites.staticDocuments.upload(tenantTag, body);
};

export default { metadata, tool, handler };
