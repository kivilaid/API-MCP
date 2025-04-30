// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import SSs from 'sss';

export const metadata: Metadata = {
  resource: 'api.v1.sites.scheme_features',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'check_enabled_sites_v1_api_scheme_features',
  description: 'Check which features are enabled schema type',
  inputSchema: {
    type: 'object',
    properties: {
      tenantTag: {
        type: 'string',
      },
      schemaType: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: SSs, args: Record<string, unknown> | undefined) => {
  const { schemaType, ...body } = args as any;
  return client.api.v1.sites.schemeFeatures.checkEnabled(schemaType, body);
};

export default { metadata, tool, handler };
