// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import SSs from 'sss';

export const metadata: Metadata = {
  resource: 'mfa',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/mfa/setup/{tenant_tag}',
  operationId: 'setupMFA',
};

export const tool: Tool = {
  name: 'setup_mfa',
  description: 'Setup MFA',
  inputSchema: {
    type: 'object',
    properties: {
      tenant_tag: {
        type: 'string',
      },
      type: {
        type: 'string',
        description: 'MFA type',
        enum: ['totp', 'sms'],
      },
      phoneNumber: {
        type: 'string',
        description: 'Phone number for SMS MFA',
      },
    },
  },
};

export const handler = (client: SSs, args: Record<string, unknown> | undefined) => {
  const { tenant_tag, ...body } = args as any;
  return client.mfa.setup(tenant_tag, body);
};

export default { metadata, tool, handler };
