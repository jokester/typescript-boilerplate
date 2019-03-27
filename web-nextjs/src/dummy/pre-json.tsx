import * as React from 'react';

export const PreJson: React.FunctionComponent<{ value: any }> = ({ value }) => {
  return <pre>{JSON.stringify(value, null, 2)}</pre>;
};
