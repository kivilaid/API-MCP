// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import SSs from 'sss';

const client = new SSs({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource auth', () => {
  // skipped: tests are disabled for the time being
  test.skip('login: only required params', async () => {
    const responsePromise = client.auth.login('tenant_tag', {
      email: 'dev@stainless.com',
      password: 'password',
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
  test.skip('login: required and optional params', async () => {
    const response = await client.auth.login('tenant_tag', {
      email: 'dev@stainless.com',
      password: 'password',
      mfaCode: 'mfaCode',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('logout: only required params', async () => {
    const responsePromise = client.auth.logout('tenant_tag', { refreshToken: 'refreshToken' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('logout: required and optional params', async () => {
    const response = await client.auth.logout('tenant_tag', { refreshToken: 'refreshToken' });
  });

  // skipped: tests are disabled for the time being
  test.skip('refreshToken: only required params', async () => {
    const responsePromise = client.auth.refreshToken('tenant_tag', { refreshToken: 'refreshToken' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('refreshToken: required and optional params', async () => {
    const response = await client.auth.refreshToken('tenant_tag', { refreshToken: 'refreshToken' });
  });
});
