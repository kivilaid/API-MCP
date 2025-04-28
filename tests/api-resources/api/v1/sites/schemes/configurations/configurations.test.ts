// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import SSs from 'sss';

const client = new SSs({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource configurations', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.api.v1.sites.schemes.configurations.create('name', {
      tenantTag: 'tenantTag',
      type: 'type',
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
  test.skip('create: required and optional params', async () => {
    const response = await client.api.v1.sites.schemes.configurations.create('name', {
      tenantTag: 'tenantTag',
      type: 'type',
      body: '{}',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('list', async () => {
    const responsePromise = client.api.v1.sites.schemes.configurations.list('tenantTag');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.api.v1.sites.schemes.configurations.list(
        'tenantTag',
        { name: 'name' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(SSs.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('listByType: only required params', async () => {
    const responsePromise = client.api.v1.sites.schemes.configurations.listByType('type', {
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
  test.skip('listByType: required and optional params', async () => {
    const response = await client.api.v1.sites.schemes.configurations.listByType('type', {
      tenantTag: 'tenantTag',
      name: 'name',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveByVersion: only required params', async () => {
    const responsePromise = client.api.v1.sites.schemes.configurations.retrieveByVersion('version', {
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
    const response = await client.api.v1.sites.schemes.configurations.retrieveByVersion('version', {
      tenantTag: 'tenantTag',
      type: 'type',
      name: 'name',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveLatest: only required params', async () => {
    const responsePromise = client.api.v1.sites.schemes.configurations.retrieveLatest('name', {
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
    const response = await client.api.v1.sites.schemes.configurations.retrieveLatest('name', {
      tenantTag: 'tenantTag',
      type: 'type',
    });
  });
});
