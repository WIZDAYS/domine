import Hero from '@/components/Hero'
import DomainGrid from '@/components/DomainGrid'
import domains from '@/data/domains.json'

export default function Home() {
  return (
    <>
      <Hero />
      <DomainGrid domains={domains} />
    </>
  )
}
