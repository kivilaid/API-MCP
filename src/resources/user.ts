// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class User extends APIResource {
  /**
   * Get user profile
   */
  retrieveProfile(options?: RequestOptions): APIPromise<UserRetrieveProfileResponse> {
    return this._client.get('/user/profile', options);
  }
}

export interface UserRetrieveProfileResponse {
  /**
   * User ID
   */
  id?: string;

  /**
   * Account creation timestamp
   */
  createdAt?: string;

  /**
   * User email
   */
  email?: string;

  /**
   * User first name
   */
  firstName?: string;

  /**
   * Last login timestamp
   */
  lastLoginAt?: string;

  /**
   * User last name
   */
  lastName?: string;

  /**
   * Whether MFA is enabled
   */
  mfaEnabled?: boolean;
}

export declare namespace User {
  export { type UserRetrieveProfileResponse as UserRetrieveProfileResponse };
}
