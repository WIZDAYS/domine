import DomainGrid from '@/components/DomainGrid'
import domains from '@/data/domains.json'

export const metadata = {
  title: 'Collection — DOMINE',
}

export default function CollectionPage() {
  return (
    <div className="pt-32">
      <div className="max-w-7xl mx-auto px-8 mb-16">
        <p className="text-domine-gray text-xs tracking-[0.4em] uppercase mb-4">
          All Domains
        </p>
        <h1 className="font-display text-5xl md:text-6xl font-light text-white">
          Collection
        </h1>
      </div>
      <DomainGrid domains={domains} />
    </div>
  )
}
