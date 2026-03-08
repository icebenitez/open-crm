import { render } from '@testing-library/react';

import OrgCrmFeatureContacts from './feature-contacts';

describe('OrgCrmFeatureContacts', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<OrgCrmFeatureContacts />);
    expect(baseElement).toBeTruthy();
  });
});
