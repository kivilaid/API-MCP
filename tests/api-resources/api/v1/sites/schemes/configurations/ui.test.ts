// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import SSs from 'sss';

const client = new SSs({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource ui', () => {
  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = client.api.v1.sites.schemes.configurations.ui.update('version', {
      tenantTag: 'tenantTag',
      type: 'type',
      name: 'name',
      body: '{}',
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
  test.skip('update: required and optional params', async () => {
    const response = await client.api.v1.sites.schemes.configurations.ui.update('version', {
      tenantTag: 'tenantTag',
      type: 'type',
      name: 'name',
      body: '{}',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveByVersion: only required params', async () => {
    const responsePromise = client.api.v1.sites.schemes.configurations.ui.retrieveByVersion('version', {
      tenantTag: 'tenantTag',
      type: 'type',
      name: 'name',
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
  test.skip('retrieveByVersion: required and optional params', async () => {
    const response = await client.api.v1.sites.schemes.configurations.ui.retrieveByVersion('version', {
      tenantTag: 'tenantTag',
      type: 'type',
      name: 'name',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveLatest: only required params', async () => {
    const responsePromise = client.api.v1.sites.schemes.configurations.ui.retrieveLatest('name', {
      tenantTag: 'tenantTag',
      type: 'type',
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
  test.skip('retrieveLatest: required and optional params', async () => {
    const response = await client.api.v1.sites.schemes.configurations.ui.retrieveLatest('name', {
      tenantTag: 'tenantTag',
      type: 'type',
    });
  });
});
