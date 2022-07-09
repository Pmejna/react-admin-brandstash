import * as React from 'react';
import { SWRConfig } from 'swr';
const swrConfig = {
//  revalidateOnFocus: false,
//  shouldRetryOnError: false
}

export interface SWRProps {
    children: React.ReactNode;
}

export const SWRConfigProvider: React.FC<SWRProps> = ({ children }) => <SWRConfig value={swrConfig}>{children}</SWRConfig>