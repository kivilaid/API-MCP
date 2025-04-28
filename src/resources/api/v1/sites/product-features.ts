// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class ProductFeatures extends APIResource {
  /**
   * Get tenant product features
   */
  list(tenantTag: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.get(path`/api/v1/sites/product-features/${tenantTag}`, options);
  }

  /**
   * Get tenant product features for specific product
   */
  listBySchema(
    schemaName: string,
    params: ProductFeatureListBySchemaParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { tenantTag } = params;
    return this._client.get(path`/api/v1/sites/product-features/${tenantTag}/${schemaName}`, options);
  }

  /**
   * Get list of configured tenant products
   */
  listConfiguredProducts(tenantTag: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.get(path`/api/v1/sites/product-features/${tenantTag}/products-list`, options);
  }

  /**
   * Get specific product feature
   */
  retrieveFeature(
    featureName: string,
    params: ProductFeatureRetrieveFeatureParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { tenantTag, schemaName } = params;
    return this._client.get(
      path`/api/v1/sites/product-features/${tenantTag}/${schemaName}/${featureName}`,
      options,
    );
  }

  /**
   * Set tenant product features
   */
  set(schemaName: string, params: ProductFeatureSetParams, options?: RequestOptions): APIPromise<unknown> {
    const { tenantTag, body } = params;
    return this._client.post(path`/api/v1/sites/product-features/${tenantTag}/${schemaName}`, {
      body: body,
      ...options,
    });
  }

  /**
   * Update specific product feature
   */
  updateFeature(
    featureName: string,
    params: ProductFeatureUpdateFeatureParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { tenantTag, schemaName, body } = params;
    return this._client.put(path`/api/v1/sites/product-features/${tenantTag}/${schemaName}/${featureName}`, {
      body: body,
      ...options,
    });
  }
}

export type ProductFeatureListResponse = unknown;

export type ProductFeatureListBySchemaResponse = unknown;

export type ProductFeatureListConfiguredProductsResponse = unknown;

export type ProductFeatureRetrieveFeatureResponse = unknown;

export type ProductFeatureSetResponse = unknown;

export type ProductFeatureUpdateFeatureResponse = unknown;

export interface ProductFeatureListBySchemaParams {
  tenantTag: string;
}

export interface ProductFeatureRetrieveFeatureParams {
  tenantTag: string;

  schemaName: string;
}

export interface ProductFeatureSetParams {
  /**
   * Path param:
   */
  tenantTag: string;

  /**
   * Body param:
   */
  body?: unknown;
}

export interface ProductFeatureUpdateFeatureParams {
  /**
   * Path param:
   */
  tenantTag: string;

  /**
   * Path param:
   */
  schemaName: string;

  /**
   * Body param:
   */
  body?: unknown;
}

export declare namespace ProductFeatures {
  export {
    type ProductFeatureListResponse as ProductFeatureListResponse,
    type ProductFeatureListBySchemaResponse as ProductFeatureListBySchemaResponse,
    type ProductFeatureListConfiguredProductsResponse as ProductFeatureListConfiguredProductsResponse,
    type ProductFeatureRetrieveFeatureResponse as ProductFeatureRetrieveFeatureResponse,
    type ProductFeatureSetResponse as ProductFeatureSetResponse,
    type ProductFeatureUpdateFeatureResponse as ProductFeatureUpdateFeatureResponse,
    type ProductFeatureListBySchemaParams as ProductFeatureListBySchemaParams,
    type ProductFeatureRetrieveFeatureParams as ProductFeatureRetrieveFeatureParams,
    type ProductFeatureSetParams as ProductFeatureSetParams,
    type ProductFeatureUpdateFeatureParams as ProductFeatureUpdateFeatureParams,
  };
}
