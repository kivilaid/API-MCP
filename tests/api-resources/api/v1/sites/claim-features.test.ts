// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import SSs from 'sss';

const client = new SSs({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource claimFeatures', () => {
  // skipped: tests are disabled for the time being
  test.skip('list', async () => {
    const responsePromise = client.api.v1.sites.claimFeatures.list('tenantTag');
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
    const responsePromise = client.api.v1.sites.claimFeatures.retrieveFeature('featureName', {
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
    const response = await client.api.v1.sites.claimFeatures.retrieveFeature('featureName', {
      tenantTag: 'tenantTag',
      schemaName: 'schemaName',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('save: only required params', async () => {
    const responsePromise = client.api.v1.sites.claimFeatures.save('schemaName', { tenantTag: 'tenantTag' });
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
    const response = await client.api.v1.sites.claimFeatures.save('schemaName', {
      tenantTag: 'tenantTag',
      feature_name: { feature: 'config' },
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('setFeature: only required params', async () => {
    const responsePromise = client.api.v1.sites.claimFeatures.setFeature('featureName', {
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
  test.skip('setFeature: required and optional params', async () => {
    const response = await client.api.v1.sites.claimFeatures.setFeature('featureName', {
      tenantTag: 'tenantTag',
      schemaName: 'schemaName',
      additionalParams: {
        address: 'data.address',
        country: 'data.country',
        dateOfBirth: 'data.dateOfBirth',
        nationality: 'data.nationality',
        reference: 'data.reference',
      },
      cacheTtl: 86400,
      enabled: true,
      selectedLists: ['ALL'],
    });
  });
});
