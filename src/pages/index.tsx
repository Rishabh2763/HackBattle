import { PublicationSortCriteria,useExplorePublicationsQuery } from "@/graphql/generated"
import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import useLogin from "../lib/auth/useLogin";
export default function Home() {
  // const {data,isLoading,error}=useExplorePublicationsQuery(
  //   {
  //     request:{
  //       sortCriteria:PublicationSortCriteria.TopCollected,
  //     },
  //   }
  
  // );

  // console.log({
  //   data,
  //   isLoading,
  //   error,
  // });
  const address=useAddress();
  const {mutate:requestLogin}=useLogin();
  if(!address) return(<ConnectWallet/>)

  return (

    <button onClick={()=>requestLogin()}>Login</button>
    
      
      
    
  )
}
