// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import SSs from 'sss';

export const metadata: Metadata = {
  resource: 'api.v1.sites.public',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v1/sites/public/features/{tenantTag}',
  operationId: '72d0acafc7e2cea30f107ace6470182c',
};

export const tool: Tool = {
  name: 'list_features_sites_v1_api_public',
  description: 'Get tenant public features',
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
  return client.api.v1.sites.public.listFeatures(tenantTag);
};

export default { metadata, tool, handler };
