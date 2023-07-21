import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
    overwrite: true,
    schema: 'src/generated/schema.graphql',
    generates: {
      'src/generated/types.ts': {
        config: {
          emitLegacyCommonJSImports: false,
          namingConvention: "keep",
          avoidOptionals: true,
          strictScalars: true,
          scalars: {
            Any: 'any',
            U8: 'number',
            U16: 'number',
            U32: 'number',
            U64: 'string',
            U128: 'string',
            U256: 'string',
            Address: 'string'
          }
        },
        plugins: [
          'typescript',
        ]
      }
    }
  };

export default config
