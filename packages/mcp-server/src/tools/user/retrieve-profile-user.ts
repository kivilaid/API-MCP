// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import SSs from 'sss';

export const metadata: Metadata = {
  resource: 'user',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/user/profile',
  operationId: 'getUserProfile',
};

export const tool: Tool = {
  name: 'retrieve_profile_user',
  description: 'Get user profile',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = (client: SSs, args: Record<string, unknown> | undefined) => {
  return client.user.retrieveProfile();
};

export default { metadata, tool, handler };
