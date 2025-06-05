# Changelog

## 0.1.0-alpha.2 (2025-06-05)

Full Changelog: [v0.1.0-alpha.1...v0.1.0-alpha.2](https://github.com/kivilaid/API-MCP/compare/v0.1.0-alpha.1...v0.1.0-alpha.2)

### Chores

* update SDK settings ([7daabe7](https://github.com/kivilaid/API-MCP/commit/7daabe7bf50353fca8135577cc8860c0f96d2c5d))

## 0.1.0-alpha.1 (2025-06-05)

Full Changelog: [v0.0.1-alpha.0...v0.1.0-alpha.1](https://github.com/kivilaid/API-MCP/compare/v0.0.1-alpha.0...v0.1.0-alpha.1)

### Features

* **api:** api update ([6dc1d0b](https://github.com/kivilaid/API-MCP/commit/6dc1d0bc745f63049a1df3312870a6b1842ddcc9))
* **api:** manual updates ([bab4990](https://github.com/kivilaid/API-MCP/commit/bab4990332748d03cde2fdd34d828100f6873210))
* **client:** add withOptions helper ([17debe1](https://github.com/kivilaid/API-MCP/commit/17debe159596f496181682f31eaab738972fffa9))
* **mcp:** include http information in tools ([0eab17d](https://github.com/kivilaid/API-MCP/commit/0eab17d2bdc061c2dbe19757febbb35f35f6a018))
* **mcp:** support dynamically discovering and invoking tools for APIs with many endpoints ([7d9aca0](https://github.com/kivilaid/API-MCP/commit/7d9aca0805f69230a851de0f223e2aa029634361))
* more gracefully handle $refs and work around schema limitations ([6e4868f](https://github.com/kivilaid/API-MCP/commit/6e4868fba3b93e6815e835ccf662f1901b827ce3))


### Bug Fixes

* **client:** always overwrite when merging headers ([0b8e7e5](https://github.com/kivilaid/API-MCP/commit/0b8e7e593003de87b3a2eb217148a519a8d7ba85))
* **mcp:** explicitly include zod and zod-to-json-schema in package.json ([b11ff38](https://github.com/kivilaid/API-MCP/commit/b11ff3860109ee4ebf2dfdedc99fb176cadb1931))
* **mcp:** fix cursor schema transformation issue with recursive references ([8344be8](https://github.com/kivilaid/API-MCP/commit/8344be83d7220e64e32aab10f026343d09ed5fdb))
* **mcp:** include description in dynamic tool search ([882bd15](https://github.com/kivilaid/API-MCP/commit/882bd15d18ba29e0e3f50c82a6a44b1dfeea23a1))
* **mcp:** remove ajv dependency so MCP servers are more compatible with Cloudflare Workers ([ac8afec](https://github.com/kivilaid/API-MCP/commit/ac8afec1823293912f3d9a09e56fef2a1c1bfc56))


### Chores

* **build:** automatically build subpackages if present ([62bb651](https://github.com/kivilaid/API-MCP/commit/62bb651ea3b53044631973d470b33968d3575feb))
* **client:** drop support for EOL node versions ([4479f33](https://github.com/kivilaid/API-MCP/commit/4479f332fb1ddc5749f372c7635a8c1f2f171950))
* configure new SDK language ([2722ebb](https://github.com/kivilaid/API-MCP/commit/2722ebb48431afe04f2eabc744def26bcfecc22a))
* configure new SDK language ([1e9c01d](https://github.com/kivilaid/API-MCP/commit/1e9c01d1db12c0718541f44b29fb54f62e01d687))
* **docs:** grammar improvements ([5e91f6f](https://github.com/kivilaid/API-MCP/commit/5e91f6f8e9e70f20adfc6be42246634c77ab8330))
* improve publish-npm script --latest tag logic ([2c25668](https://github.com/kivilaid/API-MCP/commit/2c25668bf6e91f6da3bb6c021de773e24361c15f))
* **internal:** codegen related update ([bed7cd0](https://github.com/kivilaid/API-MCP/commit/bed7cd0e2d8ef9f002d0c04c4aad63da41cdd99d))
* **internal:** codegen related update ([fa47b0b](https://github.com/kivilaid/API-MCP/commit/fa47b0b07ef24e6628437d96bddf95959d6434f4))
* **internal:** codegen related update ([e344cc7](https://github.com/kivilaid/API-MCP/commit/e344cc75d386441f137f8f3b744fdda6769cb074))
* **internal:** refactor utils ([b5197e4](https://github.com/kivilaid/API-MCP/commit/b5197e41911f9d128dd5f1dcc576a7e8a31a4fa2))
* **internal:** share typescript helpers ([4d85a01](https://github.com/kivilaid/API-MCP/commit/4d85a01f089a75b88a4d73416bb3c8c5ef8bff47))
* **mcp:** remove duplicate assignment ([f41fa50](https://github.com/kivilaid/API-MCP/commit/f41fa505d0998fe4f2070f17ea2c4ff618bba0f8))
* **package:** remove engines ([a584cf0](https://github.com/kivilaid/API-MCP/commit/a584cf0292e5ecbef2c34b5823912985c3e24d43))
* **tests:** use node 22 for CI tests ([bc59a82](https://github.com/kivilaid/API-MCP/commit/bc59a829a272069836dcfcb1b4c8d81864dab34b))
* update SDK settings ([f1ceeda](https://github.com/kivilaid/API-MCP/commit/f1ceeda9c63b777f68cf894f24c1b4af54a8ab6a))


### Documentation

* add examples to tsdocs ([505b3b1](https://github.com/kivilaid/API-MCP/commit/505b3b15e52190e4c1247fe281c69161ef3e567b))
* **readme:** fix typo ([9fdbd43](https://github.com/kivilaid/API-MCP/commit/9fdbd430842b3b47f50496416ed3ca639bc8cec0))
