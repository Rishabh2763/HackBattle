import React from 'react'
import { ConnectWallet, useAddress ,useNetworkMismatch,useSwitchChain,ChainId} from '@thirdweb-dev/react';
type Props = {}

const SignInButton = (props: Props) => {
  const address=useAddress();
  const isOnWrongNetwork=useNetworkMismatch();
  const switchChain=useSwitchChain();
  if(!address){
    return(
      <ConnectWallet/>
    )
  }

  if(isOnWrongNetwork){
    return (
      <button onClick={() => switchChain(ChainId.Mumbai)}>
      Switch Network
    </button>
    )
  }
  
}