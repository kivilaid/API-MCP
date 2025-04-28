// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import SSs from 'sss';

export const metadata: Metadata = {
  resource: 'api.v1.sites.claim_features',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'set_feature_sites_v1_api_claim_features',
  description: 'Set claim feature',
  inputSchema: {
    type: 'object',
    properties: {
      tenantTag: {
        type: 'string',
      },
      schemaName: {
        type: 'string',
      },
      featureName: {
        type: 'string',
      },
      additionalParams: {
        type: 'object',
        description: 'value is path to person data parameter',
        properties: {
          address: {
            type: 'string',
          },
          country: {
            type: 'string',
          },
          dateOfBirth: {
            type: 'string',
          },
          nationality: {
            type: 'string',
          },
          reference: {
            type: 'string',
          },
        },
        required: [],
      },
      cacheTtl: {
        type: 'integer',
        description: 'in seconds',
      },
      enabled: {
        type: 'boolean',
      },
      selectedLists: {
        type: 'array',
        items: {
          type: 'object',
        },
      },
    },
  },
};

export const handler = (client: SSs, args: any) => {
  const { featureName, ...body } = args;
  return client.api.v1.sites.claimFeatures.setFeature(featureName, body);
};

export default { metadata, tool, handler };
