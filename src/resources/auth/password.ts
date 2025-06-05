// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Password extends APIResource {
  /**
   * Initiate password reset
   */
  initiateReset(
    tenantTag: string,
    body: PasswordInitiateResetParams,
    options?: RequestOptions,
  ): APIPromise<PasswordInitiateResetResponse> {
    return this._client.post(path`/auth/password/forgot/${tenantTag}`, { body, ...options });
  }

  /**
   * Reset password with token
   */
  reset(
    tenantTag: string,
    body: PasswordResetParams,
    options?: RequestOptions,
  ): APIPromise<PasswordResetResponse> {
    return this._client.post(path`/auth/password/reset/${tenantTag}`, { body, ...options });
  }
}

export interface PasswordInitiateResetResponse {
  /**
   * Confirmation message
   */
  message?: string;
}

export interface PasswordResetResponse {
  /**
   * Password reset confirmation
   */
  message?: string;
}

export interface PasswordInitiateResetParams {
  /**
   * User email to send reset token
   */
  email: string;
}

export interface PasswordResetParams {
  /**
   * Password reset token
   */
  token: string;

  /**
   * New password
   */
  password: string;

  /**
   * Password confirmation
   */
  passwordConfirmation?: string;
}

export declare namespace Password {
  export {
    type PasswordInitiateResetResponse as PasswordInitiateResetResponse,
    type PasswordResetResponse as PasswordResetResponse,
    type PasswordInitiateResetParams as PasswordInitiateResetParams,
    type PasswordResetParams as PasswordResetParams,
  };
}
