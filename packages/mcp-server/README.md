# SSs TypeScript MCP Server

It is generated with [Stainless](https://www.stainless.com/).

## Installation

### Building

Because it's not published yet, clone the repo and build it:

```sh
git clone git@github.com:stainless-sdks/sss-typescript.git
cd sss-typescript
./scripts/bootstrap
./scripts/build
```

### Running

```sh
# set env vars as needed
export SSS_API_KEY="My API Key"
node ./packages/mcp-server/dist/index.js
```

> [!NOTE]
> Once this package is [published to npm](https://app.stainless.com/docs/guides/publish), this will become: `npx -y sss-mcp`

### Via MCP Client

[Build the project](#building) as mentioned above.

There is a partial list of existing clients at [modelcontextprotocol.io](https://modelcontextprotocol.io/clients). If you already
have a client, consult their documentation to install the MCP server.

For clients with a configuration JSON, it might look something like this:

```json
{
  "mcpServers": {
    "sss_api": {
      "command": "node",
      "args": ["/path/to/local/sss-typescript/packages/mcp-server", "--client=claude", "--tools=dynamic"],
      "env": {
        "SSS_API_KEY": "My API Key"
      }
    }
  }
}
```

## Exposing endpoints to your MCP Client

There are two ways to expose endpoints as tools in the MCP server:

1. Exposing one tool per endpoint, and filtering as necessary
2. Exposing a set of tools to dynamically discover and invoke endpoints from the API

### Filtering endpoints and tools

You can run the package on the command line to discover and filter the set of tools that are exposed by the
MCP Server. This can be helpful for large APIs where including all endpoints at once is too much for your AI's
context window.

You can filter by multiple aspects:

- `--tool` includes a specific tool by name
- `--resource` includes all tools under a specific resource, and can have wildcards, e.g. `my.resource*`
- `--operation` includes just read (get/list) or just write operations

### Dynamic tools

If you specify `--tools=dynamic` to the MCP server, instead of exposing one tool per endpoint in the API, it will
expose the following tools:

1. `list_api_endpoints` - Discovers available endpoints, with optional filtering by search query
2. `get_api_endpoint_schema` - Gets detailed schema information for a specific endpoint
3. `invoke_api_endpoint` - Executes any endpoint with the appropriate parameters

This allows you to have the full set of API endpoints available to your MCP Client, while not requiring that all
of their schemas be loaded into context at once. Instead, the LLM will automatically use these tools together to
search for, look up, and invoke endpoints dynamically. However, due to the indirect nature of the schemas, it
can struggle to provide the correct properties a bit more than when tools are imported explicitly. Therefore,
you can opt-in to explicit tools, the dynamic tools, or both.

See more information with `--help`.

All of these command-line options can be repeated, combined together, and have corresponding exclusion versions (e.g. `--no-tool`).

Use `--list` to see the list of available tools, or see below.

### Specifying the MCP Client

Different clients have varying abilities to handle arbitrary tools and schemas.

You can specify the client you are using with the `--client` argument, and the MCP server will automatically
serve tools and schemas that are more compatible with that client.

- `--client=<type>`: Set all capabilities based on a known MCP client

  - Valid values: `openai-agents`, `claude`, `claude-code`, `cursor`
  - Example: `--client=cursor`

Additionally, if you have a client not on the above list, or the client has gotten better
over time, you can manually enable or disable certain capabilities:

- `--capability=<name>`: Specify individual client capabilities
  - Available capabilities:
    - `top-level-unions`: Enable support for top-level unions in tool schemas
    - `valid-json`: Enable JSON string parsing for arguments
    - `refs`: Enable support for $ref pointers in schemas
    - `unions`: Enable support for union types (anyOf) in schemas
    - `formats`: Enable support for format validations in schemas (e.g. date-time, email)
    - `tool-name-length=N`: Set maximum tool name length to N characters
  - Example: `--capability=top-level-unions --capability=tool-name-length=40`
  - Example: `--capability=top-level-unions,tool-name-length=40`

### Examples

1. Filter for read operations on cards:

```bash
--resource=cards --operation=read
```

2. Exclude specific tools while including others:

```bash
--resource=cards --no-tool=create_cards
```

3. Configure for Cursor client with custom max tool name length:

```bash
--client=cursor --capability=tool-name-length=40
```

4. Complex filtering with multiple criteria:

```bash
--resource=cards,accounts --operation=read --tag=kyc --no-tool=create_cards
```

## Importing the tools and server individually

```js
// Import the server, generated endpoints, or the init function
import { server, endpoints, init } from "sss-mcp/server";

// import a specific tool
import listExcelCalculatorsV1APISites from "sss-mcp/tools/api/v1/sites/list-excel-calculators-v1-api-sites";

// initialize the server and all endpoints
init({ server, endpoints });

// manually start server
const transport = new StdioServerTransport();
await server.connect(transport);

// or initialize your own server with specific tools
const myServer = new McpServer(...);

// define your own endpoint
const myCustomEndpoint = {
  tool: {
    name: 'my_custom_tool',
    description: 'My custom tool',
    inputSchema: zodToJsonSchema(z.object({ a_property: z.string() })),
  },
  handler: async (client: client, args: any) => {
    return { myResponse: 'Hello world!' };
  })
};

// initialize the server with your custom endpoints
init({ server: myServer, endpoints: [listExcelCalculatorsV1APISites, myCustomEndpoint] });
```

## Available Tools

The following tools are available in this MCP server.

### Resource `api.v1.sites`:

- `list_excel_calculators_v1_api_sites` (`read`): Get list of excel calculators

### Resource `api.v1.sites.features`:

- `update_sites_v1_api_features` (`write`): Update tenant features
- `list_sites_v1_api_features` (`read`): Get tenant features
- `retrieve_broker_feature_sites_v1_api_features` (`read`): If no auth token provided only publicly available features can be shown
- `retrieve_feature_sites_v1_api_features` (`read`): If no auth token provided only publicly available features can be shown

### Resource `api.v1.sites.claim_features`:

- `list_sites_v1_api_claim_features` (`read`): Get tenant claim features - internal purposes only, used by deploy automation tool
- `retrieve_feature_sites_v1_api_claim_features` (`read`): Get claim feature
- `save_sites_v1_api_claim_features` (`write`): Save claim features - internal purposes only, used by deploy automation tool
- `set_feature_sites_v1_api_claim_features` (`write`): Set claim feature

### Resource `api.v1.sites.public`:

- `list_features_sites_v1_api_public` (`read`): Get tenant public features

### Resource `api.v1.sites.products`:

- `create_sites_v1_api_products` (`write`): Creates stubs for product schemas, schema features and product features
- `copy_sites_v1_api_products` (`write`): Copies existing product schemas, scheme features and product features to a new product

### Resource `api.v1.sites.product_features`:

- `list_sites_v1_api_product_features` (`read`): Get tenant product features
- `list_by_schema_sites_v1_api_product_features` (`read`): Get tenant product features for specific product
- `list_configured_products_sites_v1_api_product_features` (`read`): Get list of configured tenant products
- `retrieve_feature_sites_v1_api_product_features` (`read`): Get specific product feature
- `set_sites_v1_api_product_features` (`write`): Set tenant product features
- `update_feature_sites_v1_api_product_features` (`write`): Update specific product feature

### Resource `api.v1.sites.schemes`:

- `retrieve_latest_version_sites_v1_api_schemes` (`read`): Get latest scheme version

### Resource `api.v1.sites.schemes.configurations`:

- `create_schemes_sites_v1_api_configurations` (`write`): Create a scheme
- `list_schemes_sites_v1_api_configurations` (`read`): Get schemes list of latest version
- `list_by_type_schemes_sites_v1_api_configurations` (`read`): Get schemes list of latest version by type
- `retrieve_by_version_schemes_sites_v1_api_configurations` (`read`): Get JSON scheme by version
- `retrieve_latest_schemes_sites_v1_api_configurations` (`read`): Get latest version JSON scheme

### Resource `api.v1.sites.schemes.configurations.ui`:

- `update_configurations_schemes_sites_v1_api_ui` (`write`): Update UI scheme
- `retrieve_by_version_configurations_schemes_sites_v1_api_ui` (`read`): Get UI scheme by version
- `retrieve_latest_configurations_schemes_sites_v1_api_ui` (`read`): Get latest version UI scheme

### Resource `api.v1.sites.scheme_features`:

- `list_sites_v1_api_scheme_features` (`read`): Get tenant scheme features - internal purposes only, used by deploy automation tool
- `check_enabled_sites_v1_api_scheme_features` (`read`): Check which features are enabled schema type
- `retrieve_feature_sites_v1_api_scheme_features` (`read`): Get scheme feature
- `save_sites_v1_api_scheme_features` (`write`): Save scheme features - internal purposes only, used by deploy automation tool
- `set_feature_sites_v1_api_scheme_features` (`write`): Set scheme feature

### Resource `api.v1.sites.static_documents`:

- `list_sites_v1_api_static_documents` (`read`): Get list of static documents
- `delete_sites_v1_api_static_documents` (`write`): Delete static document
- `retrieve_content_sites_v1_api_static_documents` (`read`): Get static document content
- `upload_sites_v1_api_static_documents` (`write`): Upload static document(s)
