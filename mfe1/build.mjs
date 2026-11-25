import { runEsBuildBuilder } from '@softarc/native-federation-esbuild';

const federation = await runEsBuildBuilder('federation.config.mjs', {
  outputPath: '../host/src/main/resources/static/mfe1',
  tsConfig: 'tsconfig.json',
  entryPoints: ['src/component.ts'],
  dev: false,
  watch: false,
});

await federation.close();
