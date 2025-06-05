// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import SSs from 'sss';

export const metadata: Metadata = {
  resource: 'auth.password',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/auth/password/forgot/{tenant_tag}',
  operationId: 'forgotPassword',
};

export const tool: Tool = {
  name: 'initiate_reset_auth_password',
  description: 'Initiate password reset',
  inputSchema: {
    type: 'object',
    properties: {
      tenant_tag: {
        type: 'string',
      },
      email: {
        type: 'string',
        description: 'User email to send reset token',
      },
    },
  },
};

export const handler = (client: SSs, args: Record<string, unknown> | undefined) => {
  const { tenant_tag, ...body } = args as any;
  return client.auth.password.initiateReset(tenant_tag, body);
};

export default { metadata, tool, handler };
