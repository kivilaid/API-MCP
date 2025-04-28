// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import SSs, { toFile } from 'sss';

const client = new SSs({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource staticDocuments', () => {
  // skipped: tests are disabled for the time being
  test.skip('list', async () => {
    const responsePromise = client.api.v1.sites.staticDocuments.list('tenantTag');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('delete: only required params', async () => {
    const responsePromise = client.api.v1.sites.staticDocuments.delete('path', { tenantTag: 'tenantTag' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('delete: required and optional params', async () => {
    const response = await client.api.v1.sites.staticDocuments.delete('path', { tenantTag: 'tenantTag' });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveContent: only required params', async () => {
    const responsePromise = client.api.v1.sites.staticDocuments.retrieveContent('path', {
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
  test.skip('retrieveContent: required and optional params', async () => {
    const response = await client.api.v1.sites.staticDocuments.retrieveContent('path', {
      tenantTag: 'tenantTag',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('upload', async () => {
    const responsePromise = client.api.v1.sites.staticDocuments.upload('tenantTag');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('upload: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.api.v1.sites.staticDocuments.upload(
        'tenantTag',
        { files: [await toFile(Buffer.from('# my file contents'), 'README.md')], folder: 'folder' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(SSs.NotFoundError);
  });
});
