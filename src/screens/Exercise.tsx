import { Heading, HStack, Icon, VStack, Text, Image, Box, ScrollView } from 'native-base';
import { TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';
import { AppNavigatorRotesProps } from '@routes/app.routes';

import BodySvg from '@assets/body.svg'
import SeriesSVg from '@assets/series.svg'
import RepetionsSvg from '@assets/repetitions.svg'
import { Button } from '@components/Button';

export function Exercise() {
    const navigation = useNavigation<AppNavigatorRotesProps>();

    function handleGoBack() {
        navigation.goBack();
    }

    return (
        <VStack flex={1}>
            <VStack px={8} bg='gray.600' pt={12}>
                <TouchableOpacity
                    onPress={handleGoBack}
                >
                    <Icon as={Feather}
                        name='arrow-left'
                        color='green.500'
                        size={6}
                    />
                </TouchableOpacity>

                <HStack
                    justifyContent='space-between'
                    mt={4}
                    mb={8}
                    alignItems='center'
                >
                    <Heading
                        color='gray.100'
                        fontSize='lg'
                        flexShrink={1}
                        fontFamily='heading'
                    >
                        Puxada Frontal
                    </Heading>

                    <HStack alignItems='center'>
                        <BodySvg />

                        <Text
                            color='gray.200'
                            ml={1}
                            textTransform='capitalize'
                        >
                            Costas
                        </Text>
                    </HStack>
                </HStack>
            </VStack>
            <ScrollView>
                <VStack p={8}>
                    <Image
                        w='full'
                        h={80}
                        source={{ uri: 'http://conteudo.imguol.com.br/c/entretenimento/0c/2019/12/03/remada-unilateral-com-halteres-1575402100538_v2_600x600.jpg' }}
                        alt='Nome do exerc??cio'
                        mb={3}
                        resizeMode='cover'
                        rounded='lg'
                    />

                    <Box
                        bg='gray.600'
                        rounded='md'
                        pb={4}
                        px={4}
                    >
                        <HStack
                            justifyContent='space-around'
                            alignItems='center'
                            mb={6}
                            mt={5}
                        >
                            <HStack>
                                <SeriesSVg />
                                <Text color='gray.200' ml={2}>
                                    3 s??ries
                                </Text>
                            </HStack>

                            <HStack>
                                <RepetionsSvg />
                                <Text color='gray.200' ml={2}>
                                    3 repeti????es
                                </Text>
                            </HStack>
                        </HStack>

                        <Button title='Marcar como realizado' />
                    </Box>
                </VStack>
            </ScrollView>
        </VStack>
    )
}