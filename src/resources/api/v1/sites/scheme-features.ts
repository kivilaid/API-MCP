// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class SchemeFeatures extends APIResource {
  /**
   * Get tenant scheme features - internal purposes only, used by deploy automation
   * tool
   *
   * @example
   * ```ts
   * const schemeFeatures =
   *   await client.api.v1.sites.schemeFeatures.list(
   *     'tenantTag',
   *   );
   * ```
   */
  list(tenantTag: string, options?: RequestOptions): APIPromise<SchemeFeatureListResponse> {
    return this._client.get(path`/api/v1/sites/scheme-features/${tenantTag}`, options);
  }

  /**
   * Check which features are enabled schema type
   *
   * @example
   * ```ts
   * const response =
   *   await client.api.v1.sites.schemeFeatures.checkEnabled(
   *     'schemaType',
   *     { tenantTag: 'tenantTag' },
   *   );
   * ```
   */
  checkEnabled(
    schemaType: string,
    params: SchemeFeatureCheckEnabledParams,
    options?: RequestOptions,
  ): APIPromise<SchemeFeatureCheckEnabledResponse> {
    const { tenantTag } = params;
    return this._client.get(path`/api/v1/sites/scheme-features/${tenantTag}/${schemaType}`, options);
  }

  /**
   * Get scheme feature
   *
   * @example
   * ```ts
   * const response =
   *   await client.api.v1.sites.schemeFeatures.retrieveFeature(
   *     'featureName',
   *     {
   *       tenantTag: 'tenantTag',
   *       schemaType: 'schemaType',
   *       schemaName: 'schemaName',
   *     },
   *   );
   * ```
   */
  retrieveFeature(
    featureName: string,
    params: SchemeFeatureRetrieveFeatureParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { tenantTag, schemaType, schemaName } = params;
    return this._client.get(
      path`/api/v1/sites/scheme-features/${tenantTag}/${schemaType}/${schemaName}/${featureName}`,
      options,
    );
  }

  /**
   * Save scheme features - internal purposes only, used by deploy automation tool
   *
   * @example
   * ```ts
   * const response =
   *   await client.api.v1.sites.schemeFeatures.save(
   *     'schemaName',
   *     { tenantTag: 'tenantTag', schemaType: 'schemaType' },
   *   );
   * ```
   */
  save(
    schemaName: string,
    params: SchemeFeatureSaveParams,
    options?: RequestOptions,
  ): APIPromise<SchemeFeatureSaveResponse> {
    const { tenantTag, schemaType, ...body } = params;
    return this._client.post(path`/api/v1/sites/scheme-features/${tenantTag}/${schemaType}/${schemaName}`, {
      body,
      ...options,
    });
  }

  /**
   * Set scheme feature
   *
   * @example
   * ```ts
   * const response =
   *   await client.api.v1.sites.schemeFeatures.setFeature(
   *     'featureName',
   *     {
   *       tenantTag: 'tenantTag',
   *       schemaType: 'schemaType',
   *       schemaName: 'schemaName',
   *     },
   *   );
   * ```
   */
  setFeature(
    featureName: string,
    params: SchemeFeatureSetFeatureParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { tenantTag, schemaType, schemaName, body } = params;
    return this._client.post(
      path`/api/v1/sites/scheme-features/${tenantTag}/${schemaType}/${schemaName}/${featureName}`,
      { body: body, ...options },
    );
  }
}

export interface SchemeFeatureListResponse {
  policy?: SchemeFeatureListResponse.Policy;
}

export namespace SchemeFeatureListResponse {
  export interface Policy {
    home?: Policy.Home;
  }

  export namespace Policy {
    export interface Home {
      autocomplete?: unknown;
    }
  }
}

export interface SchemeFeatureCheckEnabledResponse {
  autocomplete?: boolean;
}

export type SchemeFeatureRetrieveFeatureResponse = unknown;

export interface SchemeFeatureSaveResponse {
  autocomplete?: unknown;
}

export type SchemeFeatureSetFeatureResponse = unknown;

export interface SchemeFeatureCheckEnabledParams {
  tenantTag: string;
}

export interface SchemeFeatureRetrieveFeatureParams {
  tenantTag: string;

  schemaType: string;

  schemaName: string;
}

export interface SchemeFeatureSaveParams {
  /**
   * Path param:
   */
  tenantTag: string;

  /**
   * Path param:
   */
  schemaType: string;

  /**
   * Body param:
   */
  autocomplete?: unknown;
}

export interface SchemeFeatureSetFeatureParams {
  /**
   * Path param:
   */
  tenantTag: string;

  /**
   * Path param:
   */
  schemaType: string;

  /**
   * Path param:
   */
  schemaName: string;

  /**
   * Body param:
   */
  body?: unknown;
}

export declare namespace SchemeFeatures {
  export {
    type SchemeFeatureListResponse as SchemeFeatureListResponse,
    type SchemeFeatureCheckEnabledResponse as SchemeFeatureCheckEnabledResponse,
    type SchemeFeatureRetrieveFeatureResponse as SchemeFeatureRetrieveFeatureResponse,
    type SchemeFeatureSaveResponse as SchemeFeatureSaveResponse,
    type SchemeFeatureSetFeatureResponse as SchemeFeatureSetFeatureResponse,
    type SchemeFeatureCheckEnabledParams as SchemeFeatureCheckEnabledParams,
    type SchemeFeatureRetrieveFeatureParams as SchemeFeatureRetrieveFeatureParams,
    type SchemeFeatureSaveParams as SchemeFeatureSaveParams,
    type SchemeFeatureSetFeatureParams as SchemeFeatureSetFeatureParams,
  };
}
