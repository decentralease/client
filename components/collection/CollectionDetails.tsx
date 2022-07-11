import React from 'react'

import { 
    VStack,
    Image,
    Heading,
    Text,
    Spinner,
    Skeleton,
} from '@chakra-ui/react';

import useCollectionDetails from '../../hooks/useCollectionDetails';


interface Props {
    contractAddress: string;
}

const CollectionDetails : React.FC<Props> = ({ contractAddress }) => {

    const { collection, loading } = useCollectionDetails(contractAddress);

    // if(loading) {
    //     <VStack>
    //         <Spinner 
    //             size='xl'
    //         />
    //     </VStack>
    // }
    // if(!collection) {
    //     return (
    //         <Skeleton 
    //             height='100px'
    //             startColor='gray.400'
    //         />
    //     );
    // }
    return (
        <Skeleton 
            isLoaded={!loading && Boolean(collection)}
            w={'100%'}
            minH={'150px'}
        >
            <VStack
                spacing={8}
            >
                <VStack>
                    <Image
                        alt="Logo Image"
                        src={collection && collection.thumbnailUrl}
                        maxHeight={'200px'}
                        borderRadius={'1rem'}
                    />
                </VStack>
                <VStack
                    alignItems='center'
                >
                    <Heading
                        textAlign='center'
                    >
                        {collection && collection.name}
                    </Heading>
                    <Text
                        textAlign='center'
                    >
                        {collection && collection.description}
                    </Text>
                </VStack>
            </VStack>
        </Skeleton>
    )
}

export default CollectionDetails