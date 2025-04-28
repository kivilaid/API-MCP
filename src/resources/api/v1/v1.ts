// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as SitesAPI from './sites/sites';
import { SiteListExcelCalculatorsResponse, Sites } from './sites/sites';

export class V1 extends APIResource {
  sites: SitesAPI.Sites = new SitesAPI.Sites(this._client);
}

V1.Sites = Sites;

export declare namespace V1 {
  export { Sites as Sites, type SiteListExcelCalculatorsResponse as SiteListExcelCalculatorsResponse };
}
