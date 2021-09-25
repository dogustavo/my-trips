import Seo from 'components/seo'
import dynamic from 'next/dynamic'
import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline'
import { LinkWrapper } from 'components'

const Map = dynamic(() => import('components/Map'), { ssr: false })

const place = [
  {
    id: '2',
    name: 'Itapetininga',
    slug: 'itape',
    location: {
      latitude: -21.161046,
      longitude: -47.831223
    }
  }
]

export default function Home() {
  return (
    <>
      <LinkWrapper href="/about">
        <InfoOutline size={32} aria-label="About" />
      </LinkWrapper>
      <Seo title={'Home'} />
      <Map places={place} />
    </>
  )
}
