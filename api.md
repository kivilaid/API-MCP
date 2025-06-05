# Auth

Types:

- <code><a href="./src/resources/auth/auth.ts">AuthLoginResponse</a></code>
- <code><a href="./src/resources/auth/auth.ts">AuthLogoutResponse</a></code>
- <code><a href="./src/resources/auth/auth.ts">AuthRefreshTokenResponse</a></code>

Methods:

- <code title="post /auth/login/{tenant_tag}">client.auth.<a href="./src/resources/auth/auth.ts">login</a>(tenantTag, { ...params }) -> AuthLoginResponse</code>
- <code title="post /auth/logout/{tenant_tag}">client.auth.<a href="./src/resources/auth/auth.ts">logout</a>(tenantTag, { ...params }) -> AuthLogoutResponse</code>
- <code title="post /auth/refresh/{tenant_tag}">client.auth.<a href="./src/resources/auth/auth.ts">refreshToken</a>(tenantTag, { ...params }) -> AuthRefreshTokenResponse</code>

## Password

Types:

- <code><a href="./src/resources/auth/password.ts">PasswordInitiateResetResponse</a></code>
- <code><a href="./src/resources/auth/password.ts">PasswordResetResponse</a></code>

Methods:

- <code title="post /auth/password/forgot/{tenant_tag}">client.auth.password.<a href="./src/resources/auth/password.ts">initiateReset</a>(tenantTag, { ...params }) -> PasswordInitiateResetResponse</code>
- <code title="post /auth/password/reset/{tenant_tag}">client.auth.password.<a href="./src/resources/auth/password.ts">reset</a>(tenantTag, { ...params }) -> PasswordResetResponse</code>

# Mfa

Types:

- <code><a href="./src/resources/mfa.ts">MfaSetupResponse</a></code>
- <code><a href="./src/resources/mfa.ts">MfaVerifyResponse</a></code>

Methods:

- <code title="post /mfa/setup/{tenant_tag}">client.mfa.<a href="./src/resources/mfa.ts">setup</a>(tenantTag, { ...params }) -> MfaSetupResponse</code>
- <code title="post /mfa/verify/{tenant_tag}">client.mfa.<a href="./src/resources/mfa.ts">verify</a>(tenantTag, { ...params }) -> MfaVerifyResponse</code>

# User

Types:

- <code><a href="./src/resources/user.ts">UserRetrieveProfileResponse</a></code>

Methods:

- <code title="get /user/profile">client.user.<a href="./src/resources/user.ts">retrieveProfile</a>() -> UserRetrieveProfileResponse</code>
