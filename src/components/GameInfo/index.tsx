import { AddShoppingCart, FavoriteBorder } from 'styled-icons/material-outlined'

import Button from 'components/Button'
import Heading from 'components/Heading'
import Ribbon from 'components/Ribbon'

import * as S from './styles'

export type GameInfoProps = {
	title: string
	description: string
	price: string
}

const GameInfo = ({ title, description, price }: GameInfoProps) => (
	<S.Wrapper>
		<Heading color="black">{title}</Heading>
		<Ribbon>{`$${price}`}</Ribbon>
		<S.Description>{description}</S.Description>
		<S.ButtonWrapper>
			<Button icon={<AddShoppingCart />} size="large">
				Add to cart
			</Button>
			<Button icon={<FavoriteBorder />} size="large" minimal>
				Wishlist
			</Button>
		</S.ButtonWrapper>
	</S.Wrapper>
)

export default GameInfo
