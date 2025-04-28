// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../../core/resource';
import { APIPromise } from '../../../../../../core/api-promise';
import { RequestOptions } from '../../../../../../internal/request-options';
import { path } from '../../../../../../internal/utils/path';

export class Ui extends APIResource {
  /**
   * Update UI scheme
   */
  update(version: string, params: UiUpdateParams, options?: RequestOptions): APIPromise<unknown> {
    const { tenantTag, type, name, body } = params;
    return this._client.put(
      path`/api/v1/sites/schemes/configurations/${tenantTag}/${type}/${name}/${version}/ui`,
      { body: body, ...options },
    );
  }

  /**
   * Get UI scheme by version
   */
  retrieveByVersion(
    version: string,
    params: UiRetrieveByVersionParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { tenantTag, type, name } = params;
    return this._client.get(
      path`/api/v1/sites/schemes/configurations/${tenantTag}/${type}/${name}/${version}/ui`,
      options,
    );
  }

  /**
   * Get latest version UI scheme
   */
  retrieveLatest(
    name: string,
    params: UiRetrieveLatestParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { tenantTag, type } = params;
    return this._client.get(
      path`/api/v1/sites/schemes/configurations/${tenantTag}/${type}/${name}/ui`,
      options,
    );
  }
}

export type UiUpdateResponse = unknown;

export type UiRetrieveByVersionResponse = unknown;

export type UiRetrieveLatestResponse = unknown;

export interface UiUpdateParams {
  /**
   * Path param:
   */
  tenantTag: string;

  /**
   * Path param:
   */
  type: string;

  /**
   * Path param:
   */
  name: string;

  /**
   * Body param:
   */
  body: unknown;
}

export interface UiRetrieveByVersionParams {
  tenantTag: string;

  type: string;

  name: string;
}

export interface UiRetrieveLatestParams {
  tenantTag: string;

  type: string;
}

export declare namespace Ui {
  export {
    type UiUpdateResponse as UiUpdateResponse,
    type UiRetrieveByVersionResponse as UiRetrieveByVersionResponse,
    type UiRetrieveLatestResponse as UiRetrieveLatestResponse,
    type UiUpdateParams as UiUpdateParams,
    type UiRetrieveByVersionParams as UiRetrieveByVersionParams,
    type UiRetrieveLatestParams as UiRetrieveLatestParams,
  };
}
