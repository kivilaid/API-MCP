// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as ConfigurationsAPI from './configurations/configurations';
import {
  ConfigurationCreateParams,
  ConfigurationCreateResponse,
  ConfigurationListByTypeParams,
  ConfigurationListByTypeResponse,
  ConfigurationListParams,
  ConfigurationListResponse,
  ConfigurationRetrieveByVersionParams,
  ConfigurationRetrieveByVersionResponse,
  ConfigurationRetrieveLatestParams,
  ConfigurationRetrieveLatestResponse,
  Configurations,
  ResourceScheme,
} from './configurations/configurations';
import { APIPromise } from '../../../../../core/api-promise';
import { RequestOptions } from '../../../../../internal/request-options';
import { path } from '../../../../../internal/utils/path';

export class Schemes extends APIResource {
  configurations: ConfigurationsAPI.Configurations = new ConfigurationsAPI.Configurations(this._client);

  /**
   * Get latest scheme version
   *
   * @example
   * ```ts
   * const response =
   *   await client.api.v1.sites.schemes.retrieveLatestVersion(
   *     'name',
   *     { tenantTag: 'tenantTag', type: 'type' },
   *   );
   * ```
   */
  retrieveLatestVersion(
    name: string,
    params: SchemeRetrieveLatestVersionParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { tenantTag, type } = params;
    return this._client.get(path`/api/v1/sites/schemes/version/${tenantTag}/${type}/${name}`, options);
  }
}

export type SchemeRetrieveLatestVersionResponse = unknown;

export interface SchemeRetrieveLatestVersionParams {
  tenantTag: string;

  type: string;
}

Schemes.Configurations = Configurations;

export declare namespace Schemes {
  export {
    type SchemeRetrieveLatestVersionResponse as SchemeRetrieveLatestVersionResponse,
    type SchemeRetrieveLatestVersionParams as SchemeRetrieveLatestVersionParams,
  };

  export {
    Configurations as Configurations,
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
}
