// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Features extends APIResource {
  /**
   * Update tenant features
   */
  update(
    tenantTag: string,
    params: FeatureUpdateParams | null | undefined = undefined,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { body } = params ?? {};
    return this._client.put(path`/api/v1/sites/features/${tenantTag}`, { body: body, ...options });
  }

  /**
   * Get tenant features
   */
  list(tenantTag: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.get(path`/api/v1/sites/features/${tenantTag}`, options);
  }

  /**
   * If no auth token provided only publicly available features can be shown
   */
  retrieveBrokerFeature(
    broker: string,
    params: FeatureRetrieveBrokerFeatureParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { tenantTag, featureName } = params;
    return this._client.get(path`/api/v1/sites/features/${tenantTag}/${featureName}/${broker}`, options);
  }

  /**
   * If no auth token provided only publicly available features can be shown
   */
  retrieveFeature(
    featureName: string,
    params: FeatureRetrieveFeatureParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { tenantTag } = params;
    return this._client.get(path`/api/v1/sites/features/${tenantTag}/${featureName}`, options);
  }
}

export type FeatureUpdateResponse = unknown;

export type FeatureListResponse = unknown;

export type FeatureRetrieveBrokerFeatureResponse = unknown;

export type FeatureRetrieveFeatureResponse = unknown;

export interface FeatureUpdateParams {
  body?: unknown;
}

export interface FeatureRetrieveBrokerFeatureParams {
  tenantTag: string;

  featureName: string;
}

export interface FeatureRetrieveFeatureParams {
  tenantTag: string;
}

export declare namespace Features {
  export {
    type FeatureUpdateResponse as FeatureUpdateResponse,
    type FeatureListResponse as FeatureListResponse,
    type FeatureRetrieveBrokerFeatureResponse as FeatureRetrieveBrokerFeatureResponse,
    type FeatureRetrieveFeatureResponse as FeatureRetrieveFeatureResponse,
    type FeatureUpdateParams as FeatureUpdateParams,
    type FeatureRetrieveBrokerFeatureParams as FeatureRetrieveBrokerFeatureParams,
    type FeatureRetrieveFeatureParams as FeatureRetrieveFeatureParams,
  };
}
