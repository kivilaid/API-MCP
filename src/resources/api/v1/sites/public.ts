// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Public extends APIResource {
  /**
   * Get tenant public features
   */
  listFeatures(tenantTag: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.get(path`/api/v1/sites/public/features/${tenantTag}`, options);
  }
}

export type PublicListFeaturesResponse = unknown;

export declare namespace Public {
  export { type PublicListFeaturesResponse as PublicListFeaturesResponse };
}
