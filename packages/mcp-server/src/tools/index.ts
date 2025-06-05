// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import SSs from 'sss';
import { Tool } from '@modelcontextprotocol/sdk/types.js';

import login_auth from './auth/login-auth';
import logout_auth from './auth/logout-auth';
import refresh_token_auth from './auth/refresh-token-auth';
import initiate_reset_auth_password from './auth/password/initiate-reset-auth-password';
import reset_auth_password from './auth/password/reset-auth-password';
import setup_mfa from './mfa/setup-mfa';
import verify_mfa from './mfa/verify-mfa';
import retrieve_profile_user from './user/retrieve-profile-user';

export type HandlerFunction = (client: SSs, args: Record<string, unknown> | undefined) => Promise<any>;

export type Metadata = {
  resource: string;
  operation: 'read' | 'write';
  tags: string[];

  httpMethod?: string;
  httpPath?: string;
  operationId?: string;
};

export type Endpoint = {
  metadata: Metadata;
  tool: Tool;
  handler: HandlerFunction;
};

export const endpoints: Endpoint[] = [];

function addEndpoint(endpoint: Endpoint) {
  endpoints.push(endpoint);
}

addEndpoint(login_auth);
addEndpoint(logout_auth);
addEndpoint(refresh_token_auth);
addEndpoint(initiate_reset_auth_password);
addEndpoint(reset_auth_password);
addEndpoint(setup_mfa);
addEndpoint(verify_mfa);
addEndpoint(retrieve_profile_user);

export type Filter = {
  type: 'resource' | 'operation' | 'tag' | 'tool';
  op: 'include' | 'exclude';
  value: string;
};

export function query(filters: Filter[], endpoints: Endpoint[]): Endpoint[] {
  const allExcludes = filters.length > 0 && filters.every((filter) => filter.op === 'exclude');
  const unmatchedFilters = new Set(filters);

  const filtered = endpoints.filter((endpoint: Endpoint) => {
    let included = false || allExcludes;

    for (const filter of filters) {
      if (match(filter, endpoint)) {
        unmatchedFilters.delete(filter);
        included = filter.op === 'include';
      }
    }

    return included;
  });

  // Check if any filters didn't match
  if (unmatchedFilters.size > 0) {
    throw new Error(
      `The following filters did not match any endpoints: ${[...unmatchedFilters]
        .map((f) => `${f.type}=${f.value}`)
        .join(', ')}`,
    );
  }

  return filtered;
}

function match({ type, value }: Filter, endpoint: Endpoint): boolean {
  switch (type) {
    case 'resource': {
      const regexStr = '^' + normalizeResource(value).replace(/\*/g, '.*') + '$';
      const regex = new RegExp(regexStr);
      return regex.test(normalizeResource(endpoint.metadata.resource));
    }
    case 'operation':
      return endpoint.metadata.operation === value;
    case 'tag':
      return endpoint.metadata.tags.includes(value);
    case 'tool':
      return endpoint.tool.name === value;
  }
}

function normalizeResource(resource: string): string {
  return resource.toLowerCase().replace(/[^a-z.*\-_]*/g, '');
}
