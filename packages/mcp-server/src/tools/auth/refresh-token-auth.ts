// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import SSs from 'sss';

export const metadata: Metadata = {
  resource: 'auth',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/auth/refresh/{tenant_tag}',
  operationId: 'refresh',
};

export const tool: Tool = {
  name: 'refresh_token_auth',
  description: 'Refresh access token using refresh token',
  inputSchema: {
    type: 'object',
    properties: {
      tenant_tag: {
        type: 'string',
      },
      refreshToken: {
        type: 'string',
        description: 'Valid refresh token',
      },
    },
  },
};

export const handler = (client: SSs, args: Record<string, unknown> | undefined) => {
  const { tenant_tag, ...body } = args as any;
  return client.auth.refreshToken(tenant_tag, body);
};

export default { metadata, tool, handler };
