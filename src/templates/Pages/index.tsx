import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'
import LinkWrapper from 'components/LinkWrapper'
import Seo from 'components/seo'

import * as S from './styles'

export type PageTemplateProps = {
  heading: string
  body: string
}

export default function PageTemplate({ heading, body }: PageTemplateProps) {
  return (
    <S.Content>
      <Seo title={`${heading}`} />
      <LinkWrapper href="/">
        <CloseOutline size={32} />
      </LinkWrapper>

      <S.Heading>{heading}</S.Heading>

      <S.Body>
        <div dangerouslySetInnerHTML={{ __html: body }} />
      </S.Body>
    </S.Content>
  )
}
