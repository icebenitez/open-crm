import { render } from '@testing-library/react';

import OrgCrmFeatureDeals from './feature-deals';

describe('OrgCrmFeatureDeals', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<OrgCrmFeatureDeals />);
    expect(baseElement).toBeTruthy();
  });
});
