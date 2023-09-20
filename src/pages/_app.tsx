import '@/styles/globals.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {ThirdwebProvider,ChainId} from "@thirdweb-dev/react"
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  const desiredChainId=ChainId.Mumbai
  const queryClient=new QueryClient();
  return (
    <ThirdwebProvider>
      <QueryClientProvider client={queryClient}>

        <Component {...pageProps} />
      </QueryClientProvider>
    </ThirdwebProvider>  
  );
}
