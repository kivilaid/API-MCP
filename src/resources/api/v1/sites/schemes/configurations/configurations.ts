// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../../core/resource';
import * as UiAPI from './ui';
import {
  Ui,
  UiRetrieveByVersionParams,
  UiRetrieveByVersionResponse,
  UiRetrieveLatestParams,
  UiRetrieveLatestResponse,
  UiUpdateParams,
  UiUpdateResponse,
} from './ui';
import { APIPromise } from '../../../../../../core/api-promise';
import { RequestOptions } from '../../../../../../internal/request-options';
import { path } from '../../../../../../internal/utils/path';

export class Configurations extends APIResource {
  ui: UiAPI.Ui = new UiAPI.Ui(this._client);

  /**
   * Create a scheme
   */
  create(
    name: string,
    params: ConfigurationCreateParams,
    options?: RequestOptions,
  ): APIPromise<ConfigurationCreateResponse> {
    const { tenantTag, type, body } = params;
    return this._client.post(path`/api/v1/sites/schemes/configurations/${tenantTag}/${type}/${name}`, {
      body: body,
      ...options,
    });
  }

  /**
   * Get schemes list of latest version
   */
  list(
    tenantTag: string,
    query: ConfigurationListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ConfigurationListResponse> {
    return this._client.get(path`/api/v1/sites/schemes/configurations/${tenantTag}`, { query, ...options });
  }

  /**
   * Get schemes list of latest version by type
   */
  listByType(
    type: string,
    params: ConfigurationListByTypeParams,
    options?: RequestOptions,
  ): APIPromise<ConfigurationListByTypeResponse> {
    const { tenantTag, ...query } = params;
    return this._client.get(path`/api/v1/sites/schemes/configurations/${tenantTag}/${type}`, {
      query,
      ...options,
    });
  }

  /**
   * Get JSON scheme by version
   */
  retrieveByVersion(
    version: string,
    params: ConfigurationRetrieveByVersionParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { tenantTag, type, name } = params;
    return this._client.get(
      path`/api/v1/sites/schemes/configurations/${tenantTag}/${type}/${name}/${version}`,
      options,
    );
  }

  /**
   * Get latest version JSON scheme
   */
  retrieveLatest(
    name: string,
    params: ConfigurationRetrieveLatestParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { tenantTag, type } = params;
    return this._client.get(path`/api/v1/sites/schemes/configurations/${tenantTag}/${type}/${name}`, options);
  }
}

export interface ResourceScheme {
  name?: string;

  popup_text?: string;

  title?: string;

  type?: string;

  version?: number;
}

export interface ConfigurationCreateResponse {
  data?: ConfigurationCreateResponse.Data;
}

export namespace ConfigurationCreateResponse {
  export interface Data {
    version?: number;
  }
}

export type ConfigurationListResponse = Array<ResourceScheme>;

export type ConfigurationListByTypeResponse = Array<ResourceScheme>;

export type ConfigurationRetrieveByVersionResponse = unknown;

export type ConfigurationRetrieveLatestResponse = unknown;

export interface ConfigurationCreateParams {
  /**
   * Path param:
   */
  tenantTag: string;

  /**
   * Path param:
   */
  type: string;

  /**
   * Body param:
   */
  body: unknown;
}

export interface ConfigurationListParams {
  name?: string;
}

export interface ConfigurationListByTypeParams {
  /**
   * Path param:
   */
  tenantTag: string;

  /**
   * Query param:
   */
  name?: string;
}

export interface ConfigurationRetrieveByVersionParams {
  tenantTag: string;

  type: string;

  name: string;
}

export interface ConfigurationRetrieveLatestParams {
  tenantTag: string;

  type: string;
}

Configurations.Ui = Ui;

export declare namespace Configurations {
  export {
    type ResourceScheme as ResourceScheme,
    type ConfigurationCreateResponse as ConfigurationCreateResponse,
    type ConfigurationListResponse as ConfigurationListResponse,
    type ConfigurationListByTypeResponse as ConfigurationListByTypeResponse,
    type ConfigurationRetrieveByVersionResponse as ConfigurationRetrieveByVersionResponse,
    type ConfigurationRetrieveLatestResponse as ConfigurationRetrieveLatestResponse,
    type ConfigurationCreateParams as ConfigurationCreateParams,
    type ConfigurationListParams as ConfigurationListParams,
    type ConfigurationListByTypeParams as ConfigurationListByTypeParams,
    type ConfigurationRetrieveByVersionParams as ConfigurationRetrieveByVersionParams,
    type ConfigurationRetrieveLatestParams as ConfigurationRetrieveLatestParams,
  };

  export {
    Ui as Ui,
    type UiUpdateResponse as UiUpdateResponse,
    type UiRetrieveByVersionResponse as UiRetrieveByVersionResponse,
    type UiRetrieveLatestResponse as UiRetrieveLatestResponse,
    type UiUpdateParams as UiUpdateParams,
    type UiRetrieveByVersionParams as UiRetrieveByVersionParams,
    type UiRetrieveLatestParams as UiRetrieveLatestParams,
  };
}
