import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  external: ['jsbi', 'tiny-invariant'],
  treeshake: true,
  splitting: true,
})
