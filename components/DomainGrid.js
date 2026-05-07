import DomainCard from './DomainCard'

export default function DomainGrid({ domains }) {
  return (
    <section className="max-w-7xl mx-auto px-8 py-24">

      {/* 섹션 헤더 */}
      <div className="flex items-end justify-between mb-16">
        <div>
          <p className="text-domine-gray text-xs tracking-[0.4em] uppercase mb-3">
            Current Collection
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-white">
            The Gallery
          </h2>
        </div>
        <p className="text-domine-gray text-sm hidden md:block">
          {domains.filter(d => d.status !== 'sold').length} domains available
        </p>
      </div>

      {/* 도메인 그리드 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-domine-border">
        {domains.map((domain) => (
          <div key={domain.slug} className="bg-domine-black">
            <DomainCard domain={domain} />
          </div>
        ))}
      </div>
    </section>
  )
}
