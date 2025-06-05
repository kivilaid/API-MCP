// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Mfa extends APIResource {
  /**
   * Setup MFA
   */
  setup(tenantTag: string, body: MfaSetupParams, options?: RequestOptions): APIPromise<MfaSetupResponse> {
    return this._client.post(path`/mfa/setup/${tenantTag}`, { body, ...options });
  }

  /**
   * Verify MFA code
   */
  verify(tenantTag: string, body: MfaVerifyParams, options?: RequestOptions): APIPromise<MfaVerifyResponse> {
    return this._client.post(path`/mfa/verify/${tenantTag}`, { body, ...options });
  }
}

export interface MfaSetupResponse {
  /**
   * Backup codes for account recovery
   */
  backupCodes?: Array<string>;

  /**
   * Base64 encoded QR code image
   */
  qrCode?: string;

  /**
   * TOTP secret for authenticator apps
   */
  secret?: string;
}

export interface MfaVerifyResponse {
  /**
   * JWT access token after successful MFA
   */
  accessToken?: string;

  /**
   * Access token expiration time in seconds
   */
  expiresIn?: number;

  /**
   * JWT refresh token
   */
  refreshToken?: string;

  /**
   * Token type
   */
  tokenType?: string;
}

export interface MfaSetupParams {
  /**
   * MFA type
   */
  type: 'totp' | 'sms';

  /**
   * Phone number for SMS MFA
   */
  phoneNumber?: string;
}

export interface MfaVerifyParams {
  /**
   * MFA verification code
   */
  code: string;

  /**
   * Temporary MFA token from login
   */
  mfaToken?: string;
}

export declare namespace Mfa {
  export {
    type MfaSetupResponse as MfaSetupResponse,
    type MfaVerifyResponse as MfaVerifyResponse,
    type MfaSetupParams as MfaSetupParams,
    type MfaVerifyParams as MfaVerifyParams,
  };
}
