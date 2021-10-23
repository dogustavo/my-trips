import Image from 'next/image'
import * as S from './styles'

import LinkWrapper from 'components/LinkWrapper'
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'
import { useRouter } from 'next/dist/client/router'

export type PlacesTemplateProps = {
  place: Place
}

type Place = {
  slug: string
  name: string
  description?: {
    html: string
  }
  gallery: ImageProps[]
}

type ImageProps = {
  url: string
  width: number
  height: number
}

export default function PlacesTemplate({ place }: PlacesTemplateProps) {
  const router = useRouter()

  if (router.isFallback) return null

  return (
    <S.Content>
      <LinkWrapper href="/">
        <CloseOutline size={32} aria-label="Go back to map" />
      </LinkWrapper>

      <S.Wrapper>
        <S.Container>
          <S.Body
            dangerouslySetInnerHTML={{ __html: place?.description?.html || '' }}
          />

          <S.Gallery>
            {place.gallery.map((image, index) => (
              <Image
                key={`photo-${index}`}
                src={image.url}
                alt={place.name}
                width={1000}
                height={600}
                quality={75}
              />
            ))}
          </S.Gallery>
        </S.Container>
      </S.Wrapper>
    </S.Content>
  )
}
