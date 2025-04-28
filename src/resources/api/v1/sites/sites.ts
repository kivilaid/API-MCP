// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as ClaimFeaturesAPI from './claim-features';
import {
  ClaimFeatureListResponse,
  ClaimFeatureRetrieveFeatureParams,
  ClaimFeatureRetrieveFeatureResponse,
  ClaimFeatureSaveParams,
  ClaimFeatureSaveResponse,
  ClaimFeatureSetFeatureParams,
  ClaimFeatureSetFeatureResponse,
  ClaimFeatures,
} from './claim-features';
import * as FeaturesAPI from './features';
import {
  FeatureListResponse,
  FeatureRetrieveBrokerFeatureParams,
  FeatureRetrieveBrokerFeatureResponse,
  FeatureRetrieveFeatureParams,
  FeatureRetrieveFeatureResponse,
  FeatureUpdateParams,
  FeatureUpdateResponse,
  Features,
} from './features';
import * as ProductFeaturesAPI from './product-features';
import {
  ProductFeatureListBySchemaParams,
  ProductFeatureListBySchemaResponse,
  ProductFeatureListConfiguredProductsResponse,
  ProductFeatureListResponse,
  ProductFeatureRetrieveFeatureParams,
  ProductFeatureRetrieveFeatureResponse,
  ProductFeatureSetParams,
  ProductFeatureSetResponse,
  ProductFeatureUpdateFeatureParams,
  ProductFeatureUpdateFeatureResponse,
  ProductFeatures,
} from './product-features';
import * as ProductsAPI from './products';
import { ProductCopyParams, ProductCreateParams, Products } from './products';
import * as PublicAPI from './public';
import { Public, PublicListFeaturesResponse } from './public';
import * as SchemeFeaturesAPI from './scheme-features';
import {
  SchemeFeatureCheckEnabledParams,
  SchemeFeatureCheckEnabledResponse,
  SchemeFeatureListResponse,
  SchemeFeatureRetrieveFeatureParams,
  SchemeFeatureRetrieveFeatureResponse,
  SchemeFeatureSaveParams,
  SchemeFeatureSaveResponse,
  SchemeFeatureSetFeatureParams,
  SchemeFeatureSetFeatureResponse,
  SchemeFeatures,
} from './scheme-features';
import * as StaticDocumentsAPI from './static-documents';
import {
  StaticDocumentDeleteParams,
  StaticDocumentListResponse,
  StaticDocumentRetrieveContentParams,
  StaticDocumentUploadParams,
  StaticDocuments,
} from './static-documents';
import * as SchemesAPI from './schemes/schemes';
import {
  SchemeRetrieveLatestVersionParams,
  SchemeRetrieveLatestVersionResponse,
  Schemes,
} from './schemes/schemes';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';

export class Sites extends APIResource {
  features: FeaturesAPI.Features = new FeaturesAPI.Features(this._client);
  claimFeatures: ClaimFeaturesAPI.ClaimFeatures = new ClaimFeaturesAPI.ClaimFeatures(this._client);
  public: PublicAPI.Public = new PublicAPI.Public(this._client);
  products: ProductsAPI.Products = new ProductsAPI.Products(this._client);
  productFeatures: ProductFeaturesAPI.ProductFeatures = new ProductFeaturesAPI.ProductFeatures(this._client);
  schemes: SchemesAPI.Schemes = new SchemesAPI.Schemes(this._client);
  schemeFeatures: SchemeFeaturesAPI.SchemeFeatures = new SchemeFeaturesAPI.SchemeFeatures(this._client);
  staticDocuments: StaticDocumentsAPI.StaticDocuments = new StaticDocumentsAPI.StaticDocuments(this._client);

  /**
   * Get list of excel calculators
   */
  listExcelCalculators(options?: RequestOptions): APIPromise<unknown> {
    return this._client.get('/api/v1/sites/preload-excel-calc-api', options);
  }
}

export type SiteListExcelCalculatorsResponse = unknown;

Sites.Features = Features;
Sites.ClaimFeatures = ClaimFeatures;
Sites.Public = Public;
Sites.Products = Products;
Sites.ProductFeatures = ProductFeatures;
Sites.Schemes = Schemes;
Sites.SchemeFeatures = SchemeFeatures;
Sites.StaticDocuments = StaticDocuments;

export declare namespace Sites {
  export { type SiteListExcelCalculatorsResponse as SiteListExcelCalculatorsResponse };

  export {
    Features as Features,
    type FeatureUpdateResponse as FeatureUpdateResponse,
    type FeatureListResponse as FeatureListResponse,
    type FeatureRetrieveBrokerFeatureResponse as FeatureRetrieveBrokerFeatureResponse,
    type FeatureRetrieveFeatureResponse as FeatureRetrieveFeatureResponse,
    type FeatureUpdateParams as FeatureUpdateParams,
    type FeatureRetrieveBrokerFeatureParams as FeatureRetrieveBrokerFeatureParams,
    type FeatureRetrieveFeatureParams as FeatureRetrieveFeatureParams,
  };

  export {
    ClaimFeatures as ClaimFeatures,
    type ClaimFeatureListResponse as ClaimFeatureListResponse,
    type ClaimFeatureRetrieveFeatureResponse as ClaimFeatureRetrieveFeatureResponse,
    type ClaimFeatureSaveResponse as ClaimFeatureSaveResponse,
    type ClaimFeatureSetFeatureResponse as ClaimFeatureSetFeatureResponse,
    type ClaimFeatureRetrieveFeatureParams as ClaimFeatureRetrieveFeatureParams,
    type ClaimFeatureSaveParams as ClaimFeatureSaveParams,
    type ClaimFeatureSetFeatureParams as ClaimFeatureSetFeatureParams,
  };

  export { Public as Public, type PublicListFeaturesResponse as PublicListFeaturesResponse };

  export {
    Products as Products,
    type ProductCreateParams as ProductCreateParams,
    type ProductCopyParams as ProductCopyParams,
  };

  export {
    ProductFeatures as ProductFeatures,
    type ProductFeatureListResponse as ProductFeatureListResponse,
    type ProductFeatureListBySchemaResponse as ProductFeatureListBySchemaResponse,
    type ProductFeatureListConfiguredProductsResponse as ProductFeatureListConfiguredProductsResponse,
    type ProductFeatureRetrieveFeatureResponse as ProductFeatureRetrieveFeatureResponse,
    type ProductFeatureSetResponse as ProductFeatureSetResponse,
    type ProductFeatureUpdateFeatureResponse as ProductFeatureUpdateFeatureResponse,
    type ProductFeatureListBySchemaParams as ProductFeatureListBySchemaParams,
    type ProductFeatureRetrieveFeatureParams as ProductFeatureRetrieveFeatureParams,
    type ProductFeatureSetParams as ProductFeatureSetParams,
    type ProductFeatureUpdateFeatureParams as ProductFeatureUpdateFeatureParams,
  };

  export {
    Schemes as Schemes,
    type SchemeRetrieveLatestVersionResponse as SchemeRetrieveLatestVersionResponse,
    type SchemeRetrieveLatestVersionParams as SchemeRetrieveLatestVersionParams,
  };

  export {
    SchemeFeatures as SchemeFeatures,
    type SchemeFeatureListResponse as SchemeFeatureListResponse,
    type SchemeFeatureCheckEnabledResponse as SchemeFeatureCheckEnabledResponse,
    type SchemeFeatureRetrieveFeatureResponse as SchemeFeatureRetrieveFeatureResponse,
    type SchemeFeatureSaveResponse as SchemeFeatureSaveResponse,
    type SchemeFeatureSetFeatureResponse as SchemeFeatureSetFeatureResponse,
    type SchemeFeatureCheckEnabledParams as SchemeFeatureCheckEnabledParams,
    type SchemeFeatureRetrieveFeatureParams as SchemeFeatureRetrieveFeatureParams,
    type SchemeFeatureSaveParams as SchemeFeatureSaveParams,
    type SchemeFeatureSetFeatureParams as SchemeFeatureSetFeatureParams,
  };

  export {
    StaticDocuments as StaticDocuments,
    type StaticDocumentListResponse as StaticDocumentListResponse,
    type StaticDocumentDeleteParams as StaticDocumentDeleteParams,
    type StaticDocumentRetrieveContentParams as StaticDocumentRetrieveContentParams,
    type StaticDocumentUploadParams as StaticDocumentUploadParams,
  };
}
