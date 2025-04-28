# API

## V1

### Sites

Types:

- <code><a href="./src/resources/api/v1/sites/sites.ts">SiteListExcelCalculatorsResponse</a></code>

Methods:

- <code title="get /api/v1/sites/preload-excel-calc-api">client.api.v1.sites.<a href="./src/resources/api/v1/sites/sites.ts">listExcelCalculators</a>() -> unknown</code>

#### Features

Types:

- <code><a href="./src/resources/api/v1/sites/features.ts">FeatureUpdateResponse</a></code>
- <code><a href="./src/resources/api/v1/sites/features.ts">FeatureListResponse</a></code>
- <code><a href="./src/resources/api/v1/sites/features.ts">FeatureRetrieveBrokerFeatureResponse</a></code>
- <code><a href="./src/resources/api/v1/sites/features.ts">FeatureRetrieveFeatureResponse</a></code>

Methods:

- <code title="put /api/v1/sites/features/{tenantTag}">client.api.v1.sites.features.<a href="./src/resources/api/v1/sites/features.ts">update</a>(tenantTag, { ...params }) -> unknown</code>
- <code title="get /api/v1/sites/features/{tenantTag}">client.api.v1.sites.features.<a href="./src/resources/api/v1/sites/features.ts">list</a>(tenantTag) -> unknown</code>
- <code title="get /api/v1/sites/features/{tenantTag}/{featureName}/{broker}">client.api.v1.sites.features.<a href="./src/resources/api/v1/sites/features.ts">retrieveBrokerFeature</a>(broker, { ...params }) -> unknown</code>
- <code title="get /api/v1/sites/features/{tenantTag}/{featureName}">client.api.v1.sites.features.<a href="./src/resources/api/v1/sites/features.ts">retrieveFeature</a>(featureName, { ...params }) -> unknown</code>

#### ClaimFeatures

Types:

- <code><a href="./src/resources/api/v1/sites/claim-features.ts">ClaimFeatureListResponse</a></code>
- <code><a href="./src/resources/api/v1/sites/claim-features.ts">ClaimFeatureRetrieveFeatureResponse</a></code>
- <code><a href="./src/resources/api/v1/sites/claim-features.ts">ClaimFeatureSaveResponse</a></code>
- <code><a href="./src/resources/api/v1/sites/claim-features.ts">ClaimFeatureSetFeatureResponse</a></code>

Methods:

- <code title="get /api/v1/sites/claim-features/{tenantTag}">client.api.v1.sites.claimFeatures.<a href="./src/resources/api/v1/sites/claim-features.ts">list</a>(tenantTag) -> ClaimFeatureListResponse</code>
- <code title="get /api/v1/sites/claim-features/{tenantTag}/{schemaName}/{featureName}">client.api.v1.sites.claimFeatures.<a href="./src/resources/api/v1/sites/claim-features.ts">retrieveFeature</a>(featureName, { ...params }) -> unknown</code>
- <code title="post /api/v1/sites/claim-features/{tenantTag}/{schemaName}">client.api.v1.sites.claimFeatures.<a href="./src/resources/api/v1/sites/claim-features.ts">save</a>(schemaName, { ...params }) -> ClaimFeatureSaveResponse</code>
- <code title="post /api/v1/sites/claim-features/{tenantTag}/{schemaName}/{featureName}">client.api.v1.sites.claimFeatures.<a href="./src/resources/api/v1/sites/claim-features.ts">setFeature</a>(featureName, { ...params }) -> unknown</code>

#### Public

Types:

- <code><a href="./src/resources/api/v1/sites/public.ts">PublicListFeaturesResponse</a></code>

Methods:

- <code title="get /api/v1/sites/public/features/{tenantTag}">client.api.v1.sites.public.<a href="./src/resources/api/v1/sites/public.ts">listFeatures</a>(tenantTag) -> unknown</code>

#### Products

Methods:

- <code title="post /api/v1/sites/products/{tenantTag}">client.api.v1.sites.products.<a href="./src/resources/api/v1/sites/products.ts">create</a>(tenantTag, { ...params }) -> void</code>
- <code title="post /api/v1/sites/products/{tenantTag}/copy">client.api.v1.sites.products.<a href="./src/resources/api/v1/sites/products.ts">copy</a>(tenantTag, { ...params }) -> void</code>

#### ProductFeatures

Types:

- <code><a href="./src/resources/api/v1/sites/product-features.ts">ProductFeatureListResponse</a></code>
- <code><a href="./src/resources/api/v1/sites/product-features.ts">ProductFeatureListBySchemaResponse</a></code>
- <code><a href="./src/resources/api/v1/sites/product-features.ts">ProductFeatureListConfiguredProductsResponse</a></code>
- <code><a href="./src/resources/api/v1/sites/product-features.ts">ProductFeatureRetrieveFeatureResponse</a></code>
- <code><a href="./src/resources/api/v1/sites/product-features.ts">ProductFeatureSetResponse</a></code>
- <code><a href="./src/resources/api/v1/sites/product-features.ts">ProductFeatureUpdateFeatureResponse</a></code>

Methods:

- <code title="get /api/v1/sites/product-features/{tenantTag}">client.api.v1.sites.productFeatures.<a href="./src/resources/api/v1/sites/product-features.ts">list</a>(tenantTag) -> unknown</code>
- <code title="get /api/v1/sites/product-features/{tenantTag}/{schemaName}">client.api.v1.sites.productFeatures.<a href="./src/resources/api/v1/sites/product-features.ts">listBySchema</a>(schemaName, { ...params }) -> unknown</code>
- <code title="get /api/v1/sites/product-features/{tenantTag}/products-list">client.api.v1.sites.productFeatures.<a href="./src/resources/api/v1/sites/product-features.ts">listConfiguredProducts</a>(tenantTag) -> unknown</code>
- <code title="get /api/v1/sites/product-features/{tenantTag}/{schemaName}/{featureName}">client.api.v1.sites.productFeatures.<a href="./src/resources/api/v1/sites/product-features.ts">retrieveFeature</a>(featureName, { ...params }) -> unknown</code>
- <code title="post /api/v1/sites/product-features/{tenantTag}/{schemaName}">client.api.v1.sites.productFeatures.<a href="./src/resources/api/v1/sites/product-features.ts">set</a>(schemaName, { ...params }) -> unknown</code>
- <code title="put /api/v1/sites/product-features/{tenantTag}/{schemaName}/{featureName}">client.api.v1.sites.productFeatures.<a href="./src/resources/api/v1/sites/product-features.ts">updateFeature</a>(featureName, { ...params }) -> unknown</code>

#### Schemes

Types:

- <code><a href="./src/resources/api/v1/sites/schemes/schemes.ts">SchemeRetrieveLatestVersionResponse</a></code>

Methods:

- <code title="get /api/v1/sites/schemes/version/{tenantTag}/{type}/{name}">client.api.v1.sites.schemes.<a href="./src/resources/api/v1/sites/schemes/schemes.ts">retrieveLatestVersion</a>(name, { ...params }) -> unknown</code>

##### Configurations

Types:

- <code><a href="./src/resources/api/v1/sites/schemes/configurations/configurations.ts">ResourceScheme</a></code>
- <code><a href="./src/resources/api/v1/sites/schemes/configurations/configurations.ts">ConfigurationCreateResponse</a></code>
- <code><a href="./src/resources/api/v1/sites/schemes/configurations/configurations.ts">ConfigurationListResponse</a></code>
- <code><a href="./src/resources/api/v1/sites/schemes/configurations/configurations.ts">ConfigurationListByTypeResponse</a></code>
- <code><a href="./src/resources/api/v1/sites/schemes/configurations/configurations.ts">ConfigurationRetrieveByVersionResponse</a></code>
- <code><a href="./src/resources/api/v1/sites/schemes/configurations/configurations.ts">ConfigurationRetrieveLatestResponse</a></code>

Methods:

- <code title="post /api/v1/sites/schemes/configurations/{tenantTag}/{type}/{name}">client.api.v1.sites.schemes.configurations.<a href="./src/resources/api/v1/sites/schemes/configurations/configurations.ts">create</a>(name, { ...params }) -> ConfigurationCreateResponse</code>
- <code title="get /api/v1/sites/schemes/configurations/{tenantTag}">client.api.v1.sites.schemes.configurations.<a href="./src/resources/api/v1/sites/schemes/configurations/configurations.ts">list</a>(tenantTag, { ...params }) -> ConfigurationListResponse</code>
- <code title="get /api/v1/sites/schemes/configurations/{tenantTag}/{type}">client.api.v1.sites.schemes.configurations.<a href="./src/resources/api/v1/sites/schemes/configurations/configurations.ts">listByType</a>(type, { ...params }) -> ConfigurationListByTypeResponse</code>
- <code title="get /api/v1/sites/schemes/configurations/{tenantTag}/{type}/{name}/{version}">client.api.v1.sites.schemes.configurations.<a href="./src/resources/api/v1/sites/schemes/configurations/configurations.ts">retrieveByVersion</a>(version, { ...params }) -> unknown</code>
- <code title="get /api/v1/sites/schemes/configurations/{tenantTag}/{type}/{name}">client.api.v1.sites.schemes.configurations.<a href="./src/resources/api/v1/sites/schemes/configurations/configurations.ts">retrieveLatest</a>(name, { ...params }) -> unknown</code>

###### Ui

Types:

- <code><a href="./src/resources/api/v1/sites/schemes/configurations/ui.ts">UiUpdateResponse</a></code>
- <code><a href="./src/resources/api/v1/sites/schemes/configurations/ui.ts">UiRetrieveByVersionResponse</a></code>
- <code><a href="./src/resources/api/v1/sites/schemes/configurations/ui.ts">UiRetrieveLatestResponse</a></code>

Methods:

- <code title="put /api/v1/sites/schemes/configurations/{tenantTag}/{type}/{name}/{version}/ui">client.api.v1.sites.schemes.configurations.ui.<a href="./src/resources/api/v1/sites/schemes/configurations/ui.ts">update</a>(version, { ...params }) -> unknown</code>
- <code title="get /api/v1/sites/schemes/configurations/{tenantTag}/{type}/{name}/{version}/ui">client.api.v1.sites.schemes.configurations.ui.<a href="./src/resources/api/v1/sites/schemes/configurations/ui.ts">retrieveByVersion</a>(version, { ...params }) -> unknown</code>
- <code title="get /api/v1/sites/schemes/configurations/{tenantTag}/{type}/{name}/ui">client.api.v1.sites.schemes.configurations.ui.<a href="./src/resources/api/v1/sites/schemes/configurations/ui.ts">retrieveLatest</a>(name, { ...params }) -> unknown</code>

#### SchemeFeatures

Types:

- <code><a href="./src/resources/api/v1/sites/scheme-features.ts">SchemeFeatureListResponse</a></code>
- <code><a href="./src/resources/api/v1/sites/scheme-features.ts">SchemeFeatureCheckEnabledResponse</a></code>
- <code><a href="./src/resources/api/v1/sites/scheme-features.ts">SchemeFeatureRetrieveFeatureResponse</a></code>
- <code><a href="./src/resources/api/v1/sites/scheme-features.ts">SchemeFeatureSaveResponse</a></code>
- <code><a href="./src/resources/api/v1/sites/scheme-features.ts">SchemeFeatureSetFeatureResponse</a></code>

Methods:

- <code title="get /api/v1/sites/scheme-features/{tenantTag}">client.api.v1.sites.schemeFeatures.<a href="./src/resources/api/v1/sites/scheme-features.ts">list</a>(tenantTag) -> SchemeFeatureListResponse</code>
- <code title="get /api/v1/sites/scheme-features/{tenantTag}/{schemaType}">client.api.v1.sites.schemeFeatures.<a href="./src/resources/api/v1/sites/scheme-features.ts">checkEnabled</a>(schemaType, { ...params }) -> SchemeFeatureCheckEnabledResponse</code>
- <code title="get /api/v1/sites/scheme-features/{tenantTag}/{schemaType}/{schemaName}/{featureName}">client.api.v1.sites.schemeFeatures.<a href="./src/resources/api/v1/sites/scheme-features.ts">retrieveFeature</a>(featureName, { ...params }) -> unknown</code>
- <code title="post /api/v1/sites/scheme-features/{tenantTag}/{schemaType}/{schemaName}">client.api.v1.sites.schemeFeatures.<a href="./src/resources/api/v1/sites/scheme-features.ts">save</a>(schemaName, { ...params }) -> SchemeFeatureSaveResponse</code>
- <code title="post /api/v1/sites/scheme-features/{tenantTag}/{schemaType}/{schemaName}/{featureName}">client.api.v1.sites.schemeFeatures.<a href="./src/resources/api/v1/sites/scheme-features.ts">setFeature</a>(featureName, { ...params }) -> unknown</code>

#### StaticDocuments

Types:

- <code><a href="./src/resources/api/v1/sites/static-documents.ts">StaticDocumentListResponse</a></code>

Methods:

- <code title="get /api/v1/sites/static-documents/{tenantTag}">client.api.v1.sites.staticDocuments.<a href="./src/resources/api/v1/sites/static-documents.ts">list</a>(tenantTag) -> unknown</code>
- <code title="delete /api/v1/sites/static-documents/{tenantTag}/{path}">client.api.v1.sites.staticDocuments.<a href="./src/resources/api/v1/sites/static-documents.ts">delete</a>(path\_, { ...params }) -> void</code>
- <code title="get /api/v1/sites/static-documents/{tenantTag}/{path}">client.api.v1.sites.staticDocuments.<a href="./src/resources/api/v1/sites/static-documents.ts">retrieveContent</a>(path\_, { ...params }) -> void</code>
- <code title="post /api/v1/sites/static-documents/{tenantTag}">client.api.v1.sites.staticDocuments.<a href="./src/resources/api/v1/sites/static-documents.ts">upload</a>(tenantTag, { ...params }) -> void</code>
