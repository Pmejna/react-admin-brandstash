import * as React from 'react';
import { SWRConfig } from 'swr';
const swrConfig = {
//  revalidateOnFocus: false,
//  shouldRetryOnError: false
}
export const SWRConfigProvider: React.FC = ({ children }) => <SWRConfig value={swrConfig}>{children}</SWRConfig>