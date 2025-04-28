// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import SSs from 'sss';

const client = new SSs({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource productFeatures', () => {
  // skipped: tests are disabled for the time being
  test.skip('list', async () => {
    const responsePromise = client.api.v1.sites.productFeatures.list('tenantTag');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('listBySchema: only required params', async () => {
    const responsePromise = client.api.v1.sites.productFeatures.listBySchema('schemaName', {
      tenantTag: 'tenantTag',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('listBySchema: required and optional params', async () => {
    const response = await client.api.v1.sites.productFeatures.listBySchema('schemaName', {
      tenantTag: 'tenantTag',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('listConfiguredProducts', async () => {
    const responsePromise = client.api.v1.sites.productFeatures.listConfiguredProducts('tenantTag');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveFeature: only required params', async () => {
    const responsePromise = client.api.v1.sites.productFeatures.retrieveFeature('featureName', {
      tenantTag: 'tenantTag',
      schemaName: 'schemaName',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveFeature: required and optional params', async () => {
    const response = await client.api.v1.sites.productFeatures.retrieveFeature('featureName', {
      tenantTag: 'tenantTag',
      schemaName: 'schemaName',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('set: only required params', async () => {
    const responsePromise = client.api.v1.sites.productFeatures.set('schemaName', { tenantTag: 'tenantTag' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('set: required and optional params', async () => {
    const response = await client.api.v1.sites.productFeatures.set('schemaName', {
      tenantTag: 'tenantTag',
      body: {},
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('updateFeature: only required params', async () => {
    const responsePromise = client.api.v1.sites.productFeatures.updateFeature('featureName', {
      tenantTag: 'tenantTag',
      schemaName: 'schemaName',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('updateFeature: required and optional params', async () => {
    const response = await client.api.v1.sites.productFeatures.updateFeature('featureName', {
      tenantTag: 'tenantTag',
      schemaName: 'schemaName',
      body: {},
    });
  });
});
