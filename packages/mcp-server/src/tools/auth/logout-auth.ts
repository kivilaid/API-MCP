// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import SSs from 'sss';

export const metadata: Metadata = {
  resource: 'auth',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/auth/logout/{tenant_tag}',
  operationId: 'logout',
};

export const tool: Tool = {
  name: 'logout_auth',
  description: 'Logout and invalidate refresh token',
  inputSchema: {
    type: 'object',
    properties: {
      tenant_tag: {
        type: 'string',
      },
      refreshToken: {
        type: 'string',
        description: 'Refresh token to invalidate',
      },
    },
  },
};

export const handler = (client: SSs, args: Record<string, unknown> | undefined) => {
  const { tenant_tag, ...body } = args as any;
  return client.auth.logout(tenant_tag, body);
};

export default { metadata, tool, handler };
