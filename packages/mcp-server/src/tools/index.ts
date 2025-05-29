// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import SSs from 'sss';
import { Tool } from '@modelcontextprotocol/sdk/types.js';

import list_excel_calculators_v1_api_sites from './api/v1/sites/list-excel-calculators-v1-api-sites';
import update_sites_v1_api_features from './api/v1/sites/features/update-sites-v1-api-features';
import list_sites_v1_api_features from './api/v1/sites/features/list-sites-v1-api-features';
import retrieve_broker_feature_sites_v1_api_features from './api/v1/sites/features/retrieve-broker-feature-sites-v1-api-features';
import retrieve_feature_sites_v1_api_features from './api/v1/sites/features/retrieve-feature-sites-v1-api-features';
import list_sites_v1_api_claim_features from './api/v1/sites/claim-features/list-sites-v1-api-claim-features';
import retrieve_feature_sites_v1_api_claim_features from './api/v1/sites/claim-features/retrieve-feature-sites-v1-api-claim-features';
import save_sites_v1_api_claim_features from './api/v1/sites/claim-features/save-sites-v1-api-claim-features';
import set_feature_sites_v1_api_claim_features from './api/v1/sites/claim-features/set-feature-sites-v1-api-claim-features';
import list_features_sites_v1_api_public from './api/v1/sites/public/list-features-sites-v1-api-public';
import create_sites_v1_api_products from './api/v1/sites/products/create-sites-v1-api-products';
import copy_sites_v1_api_products from './api/v1/sites/products/copy-sites-v1-api-products';
import list_sites_v1_api_product_features from './api/v1/sites/product-features/list-sites-v1-api-product-features';
import list_by_schema_sites_v1_api_product_features from './api/v1/sites/product-features/list-by-schema-sites-v1-api-product-features';
import list_configured_products_sites_v1_api_product_features from './api/v1/sites/product-features/list-configured-products-sites-v1-api-product-features';
import retrieve_feature_sites_v1_api_product_features from './api/v1/sites/product-features/retrieve-feature-sites-v1-api-product-features';
import set_sites_v1_api_product_features from './api/v1/sites/product-features/set-sites-v1-api-product-features';
import update_feature_sites_v1_api_product_features from './api/v1/sites/product-features/update-feature-sites-v1-api-product-features';
import retrieve_latest_version_sites_v1_api_schemes from './api/v1/sites/schemes/retrieve-latest-version-sites-v1-api-schemes';
import create_schemes_sites_v1_api_configurations from './api/v1/sites/schemes/configurations/create-schemes-sites-v1-api-configurations';
import list_schemes_sites_v1_api_configurations from './api/v1/sites/schemes/configurations/list-schemes-sites-v1-api-configurations';
import list_by_type_schemes_sites_v1_api_configurations from './api/v1/sites/schemes/configurations/list-by-type-schemes-sites-v1-api-configurations';
import retrieve_by_version_schemes_sites_v1_api_configurations from './api/v1/sites/schemes/configurations/retrieve-by-version-schemes-sites-v1-api-configurations';
import retrieve_latest_schemes_sites_v1_api_configurations from './api/v1/sites/schemes/configurations/retrieve-latest-schemes-sites-v1-api-configurations';
import update_configurations_schemes_sites_v1_api_ui from './api/v1/sites/schemes/configurations/ui/update-configurations-schemes-sites-v1-api-ui';
import retrieve_by_version_configurations_schemes_sites_v1_api_ui from './api/v1/sites/schemes/configurations/ui/retrieve-by-version-configurations-schemes-sites-v1-api-ui';
import retrieve_latest_configurations_schemes_sites_v1_api_ui from './api/v1/sites/schemes/configurations/ui/retrieve-latest-configurations-schemes-sites-v1-api-ui';
import list_sites_v1_api_scheme_features from './api/v1/sites/scheme-features/list-sites-v1-api-scheme-features';
import check_enabled_sites_v1_api_scheme_features from './api/v1/sites/scheme-features/check-enabled-sites-v1-api-scheme-features';
import retrieve_feature_sites_v1_api_scheme_features from './api/v1/sites/scheme-features/retrieve-feature-sites-v1-api-scheme-features';
import save_sites_v1_api_scheme_features from './api/v1/sites/scheme-features/save-sites-v1-api-scheme-features';
import set_feature_sites_v1_api_scheme_features from './api/v1/sites/scheme-features/set-feature-sites-v1-api-scheme-features';
import list_sites_v1_api_static_documents from './api/v1/sites/static-documents/list-sites-v1-api-static-documents';
import delete_sites_v1_api_static_documents from './api/v1/sites/static-documents/delete-sites-v1-api-static-documents';
import retrieve_content_sites_v1_api_static_documents from './api/v1/sites/static-documents/retrieve-content-sites-v1-api-static-documents';
import upload_sites_v1_api_static_documents from './api/v1/sites/static-documents/upload-sites-v1-api-static-documents';

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

addEndpoint(list_excel_calculators_v1_api_sites);
addEndpoint(update_sites_v1_api_features);
addEndpoint(list_sites_v1_api_features);
addEndpoint(retrieve_broker_feature_sites_v1_api_features);
addEndpoint(retrieve_feature_sites_v1_api_features);
addEndpoint(list_sites_v1_api_claim_features);
addEndpoint(retrieve_feature_sites_v1_api_claim_features);
addEndpoint(save_sites_v1_api_claim_features);
addEndpoint(set_feature_sites_v1_api_claim_features);
addEndpoint(list_features_sites_v1_api_public);
addEndpoint(create_sites_v1_api_products);
addEndpoint(copy_sites_v1_api_products);
addEndpoint(list_sites_v1_api_product_features);
addEndpoint(list_by_schema_sites_v1_api_product_features);
addEndpoint(list_configured_products_sites_v1_api_product_features);
addEndpoint(retrieve_feature_sites_v1_api_product_features);
addEndpoint(set_sites_v1_api_product_features);
addEndpoint(update_feature_sites_v1_api_product_features);
addEndpoint(retrieve_latest_version_sites_v1_api_schemes);
addEndpoint(create_schemes_sites_v1_api_configurations);
addEndpoint(list_schemes_sites_v1_api_configurations);
addEndpoint(list_by_type_schemes_sites_v1_api_configurations);
addEndpoint(retrieve_by_version_schemes_sites_v1_api_configurations);
addEndpoint(retrieve_latest_schemes_sites_v1_api_configurations);
addEndpoint(update_configurations_schemes_sites_v1_api_ui);
addEndpoint(retrieve_by_version_configurations_schemes_sites_v1_api_ui);
addEndpoint(retrieve_latest_configurations_schemes_sites_v1_api_ui);
addEndpoint(list_sites_v1_api_scheme_features);
addEndpoint(check_enabled_sites_v1_api_scheme_features);
addEndpoint(retrieve_feature_sites_v1_api_scheme_features);
addEndpoint(save_sites_v1_api_scheme_features);
addEndpoint(set_feature_sites_v1_api_scheme_features);
addEndpoint(list_sites_v1_api_static_documents);
addEndpoint(delete_sites_v1_api_static_documents);
addEndpoint(retrieve_content_sites_v1_api_static_documents);
addEndpoint(upload_sites_v1_api_static_documents);

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
