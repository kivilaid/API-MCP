// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import SSs from 'sss';

const client = new SSs({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource features', () => {
  // skipped: tests are disabled for the time being
  test.skip('update', async () => {
    const responsePromise = client.api.v1.sites.features.update('tenantTag');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('update: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.api.v1.sites.features.update('tenantTag', { body: {} }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(SSs.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('list', async () => {
    const responsePromise = client.api.v1.sites.features.list('tenantTag');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveBrokerFeature: only required params', async () => {
    const responsePromise = client.api.v1.sites.features.retrieveBrokerFeature('broker', {
      tenantTag: 'tenantTag',
      featureName: 'featureName',
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
  test.skip('retrieveBrokerFeature: required and optional params', async () => {
    const response = await client.api.v1.sites.features.retrieveBrokerFeature('broker', {
      tenantTag: 'tenantTag',
      featureName: 'featureName',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveFeature: only required params', async () => {
    const responsePromise = client.api.v1.sites.features.retrieveFeature('featureName', {
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
  test.skip('retrieveFeature: required and optional params', async () => {
    const response = await client.api.v1.sites.features.retrieveFeature('featureName', {
      tenantTag: 'tenantTag',
    });
  });
});
