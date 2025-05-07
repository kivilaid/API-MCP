// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Products extends APIResource {
  /**
   * Creates stubs for product schemas, schema features and product features
   *
   * @example
   * ```ts
   * await client.api.v1.sites.products.create('tenantTag', {
   *   name: 'product-name',
   *   title: 'Product Title',
   * });
   * ```
   */
  create(tenantTag: string, body: ProductCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/api/v1/sites/products/${tenantTag}`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Copies existing product schemas, scheme features and product features to a new
   * product
   *
   * @example
   * ```ts
   * await client.api.v1.sites.products.copy('tenantTag', {
   *   source: 'old-product',
   *   target: { name: 'new-product', title: 'New Product' },
   * });
   * ```
   */
  copy(tenantTag: string, body: ProductCopyParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/api/v1/sites/products/${tenantTag}/copy`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface ProductCreateParams {
  /**
   * New product name
   */
  name: string;

  /**
   * New product title
   */
  title: string;
}

export interface ProductCopyParams {
  /**
   * Source product name
   */
  source: string;

  target: ProductCopyParams.Target;
}

export namespace ProductCopyParams {
  export interface Target {
    /**
     * Target product name
     */
    name: string;

    /**
     * Target product title
     */
    title: string;
  }
}

export declare namespace Products {
  export { type ProductCreateParams as ProductCreateParams, type ProductCopyParams as ProductCopyParams };
}
