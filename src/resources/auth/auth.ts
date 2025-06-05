// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as PasswordAPI from './password';
import {
  Password,
  PasswordInitiateResetParams,
  PasswordInitiateResetResponse,
  PasswordResetParams,
  PasswordResetResponse,
} from './password';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Auth extends APIResource {
  password: PasswordAPI.Password = new PasswordAPI.Password(this._client);

  /**
   * Login to get refresh/access token
   */
  login(tenantTag: string, body: AuthLoginParams, options?: RequestOptions): APIPromise<AuthLoginResponse> {
    return this._client.post(path`/auth/login/${tenantTag}`, { body, ...options });
  }

  /**
   * Logout and invalidate refresh token
   */
  logout(
    tenantTag: string,
    body: AuthLogoutParams,
    options?: RequestOptions,
  ): APIPromise<AuthLogoutResponse> {
    return this._client.post(path`/auth/logout/${tenantTag}`, { body, ...options });
  }

  /**
   * Refresh access token using refresh token
   */
  refreshToken(
    tenantTag: string,
    body: AuthRefreshTokenParams,
    options?: RequestOptions,
  ): APIPromise<AuthRefreshTokenResponse> {
    return this._client.post(path`/auth/refresh/${tenantTag}`, { body, ...options });
  }
}

export interface AuthLoginResponse {
  /**
   * JWT access token
   */
  accessToken?: string;

  /**
   * Access token expiration time in seconds
   */
  expiresIn?: number;

  /**
   * Whether MFA is required
   */
  mfaRequired?: boolean;

  /**
   * Temporary MFA token if MFA is required
   */
  mfaToken?: string;

  /**
   * JWT refresh token
   */
  refreshToken?: string;

  /**
   * Token type
   */
  tokenType?: string;
}

export interface AuthLogoutResponse {
  /**
   * Logout confirmation message
   */
  message?: string;
}

export interface AuthRefreshTokenResponse {
  /**
   * New JWT access token
   */
  accessToken?: string;

  /**
   * Access token expiration time in seconds
   */
  expiresIn?: number;

  /**
   * Token type
   */
  tokenType?: string;
}

export interface AuthLoginParams {
  /**
   * User email
   */
  email: string;

  /**
   * User password
   */
  password: string;

  /**
   * MFA code if required
   */
  mfaCode?: string;
}

export interface AuthLogoutParams {
  /**
   * Refresh token to invalidate
   */
  refreshToken: string;
}

export interface AuthRefreshTokenParams {
  /**
   * Valid refresh token
   */
  refreshToken: string;
}

Auth.Password = Password;

export declare namespace Auth {
  export {
    type AuthLoginResponse as AuthLoginResponse,
    type AuthLogoutResponse as AuthLogoutResponse,
    type AuthRefreshTokenResponse as AuthRefreshTokenResponse,
    type AuthLoginParams as AuthLoginParams,
    type AuthLogoutParams as AuthLogoutParams,
    type AuthRefreshTokenParams as AuthRefreshTokenParams,
  };

  export {
    Password as Password,
    type PasswordInitiateResetResponse as PasswordInitiateResetResponse,
    type PasswordResetResponse as PasswordResetResponse,
    type PasswordInitiateResetParams as PasswordInitiateResetParams,
    type PasswordResetParams as PasswordResetParams,
  };
}
