// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class ClaimFeatures extends APIResource {
  /**
   * Get tenant claim features - internal purposes only, used by deploy automation
   * tool
   */
  list(tenantTag: string, options?: RequestOptions): APIPromise<ClaimFeatureListResponse> {
    return this._client.get(path`/api/v1/sites/claim-features/${tenantTag}`, options);
  }

  /**
   * Get claim feature
   */
  retrieveFeature(
    featureName: string,
    params: ClaimFeatureRetrieveFeatureParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { tenantTag, schemaName } = params;
    return this._client.get(
      path`/api/v1/sites/claim-features/${tenantTag}/${schemaName}/${featureName}`,
      options,
    );
  }

  /**
   * Save claim features - internal purposes only, used by deploy automation tool
   */
  save(
    schemaName: string,
    params: ClaimFeatureSaveParams,
    options?: RequestOptions,
  ): APIPromise<ClaimFeatureSaveResponse> {
    const { tenantTag, ...body } = params;
    return this._client.post(path`/api/v1/sites/claim-features/${tenantTag}/${schemaName}`, {
      body,
      ...options,
    });
  }

  /**
   * Set claim feature
   */
  setFeature(
    featureName: string,
    params: ClaimFeatureSetFeatureParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { tenantTag, schemaName, ...body } = params;
    return this._client.post(path`/api/v1/sites/claim-features/${tenantTag}/${schemaName}/${featureName}`, {
      body,
      ...options,
    });
  }
}

export interface ClaimFeatureListResponse {
  product_name?: ClaimFeatureListResponse.ProductName;
}

export namespace ClaimFeatureListResponse {
  export interface ProductName {
    feature_name?: unknown;
  }
}

export type ClaimFeatureRetrieveFeatureResponse = unknown;

export interface ClaimFeatureSaveResponse {
  feature_name?: unknown;
}

export type ClaimFeatureSetFeatureResponse = unknown;

export interface ClaimFeatureRetrieveFeatureParams {
  tenantTag: string;

  schemaName: string;
}

export interface ClaimFeatureSaveParams {
  /**
   * Path param:
   */
  tenantTag: string;

  /**
   * Body param:
   */
  feature_name?: unknown;
}

export interface ClaimFeatureSetFeatureParams {
  /**
   * Path param:
   */
  tenantTag: string;

  /**
   * Path param:
   */
  schemaName: string;

  /**
   * Body param: value is path to person data parameter
   */
  additionalParams?: ClaimFeatureSetFeatureParams.AdditionalParams;

  /**
   * Body param: in seconds
   */
  cacheTtl?: number;

  /**
   * Body param:
   */
  enabled?: boolean;

  /**
   * Body param:
   */
  selectedLists?: Array<unknown>;
}

export namespace ClaimFeatureSetFeatureParams {
  /**
   * value is path to person data parameter
   */
  export interface AdditionalParams {
    address?: string;

    country?: string;

    dateOfBirth?: string;

    nationality?: string;

    reference?: string;
  }
}

export declare namespace ClaimFeatures {
  export {
    type ClaimFeatureListResponse as ClaimFeatureListResponse,
    type ClaimFeatureRetrieveFeatureResponse as ClaimFeatureRetrieveFeatureResponse,
    type ClaimFeatureSaveResponse as ClaimFeatureSaveResponse,
    type ClaimFeatureSetFeatureResponse as ClaimFeatureSetFeatureResponse,
    type ClaimFeatureRetrieveFeatureParams as ClaimFeatureRetrieveFeatureParams,
    type ClaimFeatureSaveParams as ClaimFeatureSaveParams,
    type ClaimFeatureSetFeatureParams as ClaimFeatureSetFeatureParams,
  };
}
