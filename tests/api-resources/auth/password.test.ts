// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import SSs from 'sss';

const client = new SSs({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource password', () => {
  // skipped: tests are disabled for the time being
  test.skip('initiateReset: only required params', async () => {
    const responsePromise = client.auth.password.initiateReset('tenant_tag', { email: 'dev@stainless.com' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('initiateReset: required and optional params', async () => {
    const response = await client.auth.password.initiateReset('tenant_tag', { email: 'dev@stainless.com' });
  });

  // skipped: tests are disabled for the time being
  test.skip('reset: only required params', async () => {
    const responsePromise = client.auth.password.reset('tenant_tag', {
      token: 'token',
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
  test.skip('reset: required and optional params', async () => {
    const response = await client.auth.password.reset('tenant_tag', {
      token: 'token',
      password: 'password',
      passwordConfirmation: 'passwordConfirmation',
    });
  });
});
