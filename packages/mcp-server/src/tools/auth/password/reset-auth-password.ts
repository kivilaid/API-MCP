// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import SSs from 'sss';

export const metadata: Metadata = {
  resource: 'auth.password',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/auth/password/reset/{tenant_tag}',
  operationId: 'resetPassword',
};

export const tool: Tool = {
  name: 'reset_auth_password',
  description: 'Reset password with token',
  inputSchema: {
    type: 'object',
    properties: {
      tenant_tag: {
        type: 'string',
      },
      token: {
        type: 'string',
        description: 'Password reset token',
      },
      password: {
        type: 'string',
        description: 'New password',
      },
      passwordConfirmation: {
        type: 'string',
        description: 'Password confirmation',
      },
    },
  },
};

export const handler = (client: SSs, args: Record<string, unknown> | undefined) => {
  const { tenant_tag, ...body } = args as any;
  return client.auth.password.reset(tenant_tag, body);
};

export default { metadata, tool, handler };
