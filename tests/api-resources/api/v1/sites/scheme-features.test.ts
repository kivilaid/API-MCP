// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import SSs from 'sss';

const client = new SSs({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource schemeFeatures', () => {
  // skipped: tests are disabled for the time being
  test.skip('list', async () => {
    const responsePromise = client.api.v1.sites.schemeFeatures.list('tenantTag');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('checkEnabled: only required params', async () => {
    const responsePromise = client.api.v1.sites.schemeFeatures.checkEnabled('schemaType', {
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
  test.skip('checkEnabled: required and optional params', async () => {
    const response = await client.api.v1.sites.schemeFeatures.checkEnabled('schemaType', {
      tenantTag: 'tenantTag',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveFeature: only required params', async () => {
    const responsePromise = client.api.v1.sites.schemeFeatures.retrieveFeature('featureName', {
      tenantTag: 'tenantTag',
      schemaType: 'schemaType',
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
    const response = await client.api.v1.sites.schemeFeatures.retrieveFeature('featureName', {
      tenantTag: 'tenantTag',
      schemaType: 'schemaType',
      schemaName: 'schemaName',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('save: only required params', async () => {
    const responsePromise = client.api.v1.sites.schemeFeatures.save('schemaName', {
      tenantTag: 'tenantTag',
      schemaType: 'schemaType',
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
  test.skip('save: required and optional params', async () => {
    const response = await client.api.v1.sites.schemeFeatures.save('schemaName', {
      tenantTag: 'tenantTag',
      schemaType: 'schemaType',
      autocomplete: [{ foo: 'bar' }],
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('setFeature: only required params', async () => {
    const responsePromise = client.api.v1.sites.schemeFeatures.setFeature('featureName', {
      tenantTag: 'tenantTag',
      schemaType: 'schemaType',
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
  test.skip('setFeature: required and optional params', async () => {
    const response = await client.api.v1.sites.schemeFeatures.setFeature('featureName', {
      tenantTag: 'tenantTag',
      schemaType: 'schemaType',
      schemaName: 'schemaName',
      body: [{ foo: 'bar' }],
    });
  });
});
