import { withNativeFederation } from '@softarc/native-federation/config';

export default withNativeFederation({
  name: 'mfe1',
  exposes: { './component': './src/component.ts' },
  shared: {},
});
