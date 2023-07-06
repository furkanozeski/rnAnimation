import React, { PropsWithChildren } from 'react';

type SwipeableViewProps = PropsWithChildren & {
  children?: React.ReactNode | undefined,
  text: string,
  date?: Date,
  onDelete?: (value: string) => void,
  leadingIcon?: (value: string) => React.JSX.Element,
  trailingIcon?: () => React.JSX.Element,
}

export default SwipeableViewProps;

