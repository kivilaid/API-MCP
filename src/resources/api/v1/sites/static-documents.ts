// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { type Uploadable } from '../../../../core/uploads';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { multipartFormRequestOptions } from '../../../../internal/uploads';
import { path } from '../../../../internal/utils/path';

export class StaticDocuments extends APIResource {
  /**
   * Get list of static documents
   *
   * @example
   * ```ts
   * const staticDocuments =
   *   await client.api.v1.sites.staticDocuments.list(
   *     'tenantTag',
   *   );
   * ```
   */
  list(tenantTag: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.get(path`/api/v1/sites/static-documents/${tenantTag}`, options);
  }

  /**
   * Delete static document
   *
   * @example
   * ```ts
   * await client.api.v1.sites.staticDocuments.delete('path', {
   *   tenantTag: 'tenantTag',
   * });
   * ```
   */
  delete(path_: string, params: StaticDocumentDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { tenantTag } = params;
    return this._client.delete(path`/api/v1/sites/static-documents/${tenantTag}/${path_}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get static document content
   *
   * @example
   * ```ts
   * await client.api.v1.sites.staticDocuments.retrieveContent(
   *   'path',
   *   { tenantTag: 'tenantTag' },
   * );
   * ```
   */
  retrieveContent(
    path_: string,
    params: StaticDocumentRetrieveContentParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { tenantTag } = params;
    return this._client.get(path`/api/v1/sites/static-documents/${tenantTag}/${path_}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Upload static document(s)
   *
   * @example
   * ```ts
   * await client.api.v1.sites.staticDocuments.upload(
   *   'tenantTag',
   * );
   * ```
   */
  upload(
    tenantTag: string,
    body: StaticDocumentUploadParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.post(
      path`/api/v1/sites/static-documents/${tenantTag}`,
      multipartFormRequestOptions(
        { body, ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]) },
        this._client,
      ),
    );
  }
}

export type StaticDocumentListResponse = unknown;

export interface StaticDocumentDeleteParams {
  tenantTag: string;
}

export interface StaticDocumentRetrieveContentParams {
  tenantTag: string;
}

export interface StaticDocumentUploadParams {
  /**
   * Document
   */
  files?: Array<Uploadable>;

  /**
   * Folder where to store document
   */
  folder?: string;
}

export declare namespace StaticDocuments {
  export {
    type StaticDocumentListResponse as StaticDocumentListResponse,
    type StaticDocumentDeleteParams as StaticDocumentDeleteParams,
    type StaticDocumentRetrieveContentParams as StaticDocumentRetrieveContentParams,
    type StaticDocumentUploadParams as StaticDocumentUploadParams,
  };
}
