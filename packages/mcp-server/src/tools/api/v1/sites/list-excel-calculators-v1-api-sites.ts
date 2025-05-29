// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import SSs from 'sss';

export const metadata: Metadata = {
  resource: 'api.v1.sites',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/api/v1/sites/preload-excel-calc-api',
  operationId: '5e2d3eb7a159dd1e28db6363300aa80b',
};

export const tool: Tool = {
  name: 'list_excel_calculators_v1_api_sites',
  description: 'Get list of excel calculators',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = (client: SSs, args: Record<string, unknown> | undefined) => {
  return client.api.v1.sites.listExcelCalculators();
};

export default { metadata, tool, handler };
