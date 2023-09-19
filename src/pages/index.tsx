import { PublicationSortCriteria,useExplorePublicationsQuery } from "@/graphql/generated"

export default function Home() {
  const {data,isLoading,error}=useExplorePublicationsQuery(
    {
      endpoint: 'https://api-mumbai.lens.dev',
      fetchParams:{
        headers:{
          "content-type":"application/json",
        }
      },
    },
    {
      request:{
        sortCriteria:PublicationSortCriteria.TopCollected,
      },
    }
  
  );

  console.log({
    data,
    isLoading,
    error,
  });
  return (
    <main>Hello World
      
    </main>
      
      
    
  )
}
