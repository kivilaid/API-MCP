// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import SSs from 'sss';

export const metadata: Metadata = {
  resource: 'mfa',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/mfa/verify/{tenant_tag}',
  operationId: 'verifyMFA',
};

export const tool: Tool = {
  name: 'verify_mfa',
  description: 'Verify MFA code',
  inputSchema: {
    type: 'object',
    properties: {
      tenant_tag: {
        type: 'string',
      },
      code: {
        type: 'string',
        description: 'MFA verification code',
      },
      mfaToken: {
        type: 'string',
        description: 'Temporary MFA token from login',
      },
    },
  },
};

export const handler = (client: SSs, args: Record<string, unknown> | undefined) => {
  const { tenant_tag, ...body } = args as any;
  return client.mfa.verify(tenant_tag, body);
};

export default { metadata, tool, handler };
