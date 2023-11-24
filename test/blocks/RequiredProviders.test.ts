import { arg4 } from '..';
import { RequiredProviders } from '../../src/blocks';

test('RequiredProviders', () => {
  const requiredProviders = new RequiredProviders(arg4);
  expect(requiredProviders.toTerraform()).toMatchSnapshot();
  expect(() => requiredProviders.attr('attr')).toThrow();
});
