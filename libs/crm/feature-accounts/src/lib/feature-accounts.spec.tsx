import { render } from '@testing-library/react';

import OrgCrmFeatureAccounts from './feature-accounts';

describe('OrgCrmFeatureAccounts', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<OrgCrmFeatureAccounts />);
    expect(baseElement).toBeTruthy();
  });
});
