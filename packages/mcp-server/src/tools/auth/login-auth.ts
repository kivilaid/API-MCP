// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import SSs from 'sss';

export const metadata: Metadata = {
  resource: 'auth',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/auth/login/{tenant_tag}',
  operationId: 'login',
};

export const tool: Tool = {
  name: 'login_auth',
  description: 'Login to get refresh/access token',
  inputSchema: {
    type: 'object',
    properties: {
      tenant_tag: {
        type: 'string',
      },
      email: {
        type: 'string',
        description: 'User email',
      },
      password: {
        type: 'string',
        description: 'User password',
      },
      mfaCode: {
        type: 'string',
        description: 'MFA code if required',
      },
    },
  },
};

export const handler = (client: SSs, args: Record<string, unknown> | undefined) => {
  const { tenant_tag, ...body } = args as any;
  return client.auth.login(tenant_tag, body);
};

export default { metadata, tool, handler };
