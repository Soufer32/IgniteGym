import { VStack, Image, Text, Center, Heading, ScrollView } from 'native-base';

import * as yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
import BackgroundImg from '@assets/background.png';
import LogoSvg from '@assets/logo.svg';
import { Input } from '@components/Input';
import { Button } from '@components/Button';
import { useNavigation } from '@react-navigation/native';
import { yupResolver } from '@hookform/resolvers/yup';

type FormDataProps = {
	name: string;
	email: string;
	password: string;
	password_confirm: string;
}

const signUpSchema = yup.object({
	name: yup.string().required('Informe o nome.'),
	email: yup.string().required('Informe o email.').email('E-mail inválido'),
	password: yup.string().required('Informe a senha.').min(6, 'A senha deve ter pelo menos 6 dígitos.'),
	password_confirm: yup.string().required('Confirme a senha.').oneOf([yup.ref('password'),null], 'A confirmação da senha não confere.')
})

export function SignUp() {

	const { control, handleSubmit, formState: { errors } } = useForm<FormDataProps>({
		resolver: yupResolver(signUpSchema)
	});

	const navigation = useNavigation();

	function handleGoBack() {
		navigation.goBack();
	}

	function handleSingUp(data: any) {
		console.log(data)
	}

	return (
		<ScrollView
			contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}
		>
			<VStack
				flex={1}
				px={10}
			>
				<Image
					source={BackgroundImg}
					defaultSource={BackgroundImg}
					alt='Pessoas fazendo exercícios'
					resizeMode='contain'
					position='absolute'
				/>
				<Center my={24}>
					<LogoSvg />

					<Text
						color='gray.100'
						fontSize='sm'
					>
						Treine sua mente e o seu corpo
					</Text>
				</Center>

				<Center>
					<Heading
						color='gray.100'
						fontSize='xl'
						mb={6}
						fontFamily='heading'
					>
						Crie sua Conta
					</Heading>

					<Controller
						control={control}
						name='name'						
						render={({ field: { onChange, value } }) => (
							<Input
								placeholder='Nome'
								value={value}
								onChangeText={onChange}
								errorMessage={errors.name?.message}
							/>
						)}
					/>					

					<Controller
						control={control}
						name='email'						
						render={({ field: { onChange, value } }) => (
							<Input
								placeholder='E-mail'
								keyboardType='email-address'
								autoCapitalize='none'
								value={value}
								onChangeText={onChange}
								errorMessage={errors.email?.message}
							/>
						)}
					/>

					<Controller
						control={control}
						name='password'
						render={({ field: { onChange, value } }) => (

							<Input
								placeholder='Senha'
								secureTextEntry
								value={value}
								onChangeText={onChange}
								errorMessage={errors.password?.message}
							/>
						)}
					/>

					<Controller
						control={control}
						name='password_confirm'
						render={({ field: { onChange, value } }) => (

							<Input
								placeholder='Confirme a Senha'
								secureTextEntry
								value={value}
								onChangeText={onChange}
								onSubmitEditing={handleSubmit(handleSingUp)}
								returnKeyType='send'
								errorMessage={errors.password_confirm?.message}
							/>
						)}
					/>

					<Button
						title='Criar e acessar'
						onPress={handleSubmit(handleSingUp)}
					/>
				</Center>

				<Button
					mt={12}
					title='Voltar para o login'
					variant='outline'
					onPress={handleGoBack}
				/>

			</VStack>
		</ScrollView>
	)
}