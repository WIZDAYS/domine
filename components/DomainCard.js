import Link from 'next/link'

export default function DomainCard({ domain }) {
  return (
    <Link href={`/collection/${domain.slug}`}>
      <div className="group relative border border-domine-border bg-domine-card hover:border-domine-gold
        transition-all duration-500 cursor-pointer overflow-hidden">

        {/* 동물 이미지 */}
        <div className="relative h-64 overflow-hidden bg-domine-dark">
          {domain.image ? (
            <img
              src={domain.image}
              alt={domain.name}
              className="w-full h-full object-cover object-center
                group-hover:scale-105 transition-transform duration-700"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-domine-border text-6xl font-display">?</span>
            </div>
          )}
          {/* 이미지 하단 그라디언트 */}
          <div className="absolute inset-0"
            style={{ background: 'linear-gradient(to bottom, transparent 50%, rgba(26,26,26,1) 100%)' }} />
        </div>

        {/* 카드 정보 */}
        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h3 className="font-display text-2xl text-white group-hover:text-domine-gold
                transition-colors duration-300">
                {domain.name}
              </h3>
              <span className="text-domine-gray text-xs tracking-[0.3em] uppercase mt-1 block">
                {domain.category}
              </span>
            </div>
            {/* 상태 배지 */}
            <span className={`text-xs tracking-widest uppercase px-3 py-1 border ${
              domain.status === 'sold'
                ? 'border-domine-gray text-domine-gray'
                : 'border-domine-gold text-domine-gold'
            }`}>
              {domain.status === 'sold' ? 'Sold' : 'Available'}
            </span>
          </div>

          {/* 설명 */}
          <p className="text-domine-gray text-sm leading-relaxed mb-6">
            {domain.description}
          </p>

          {/* 하단 가격/CTA */}
          <div className="flex items-center justify-between pt-4 border-t border-domine-border">
            <div>
              {domain.price ? (
                <span className="text-white text-lg">
                  $ {domain.price.toLocaleString()}
                </span>
              ) : (
                <span className="text-domine-gold text-sm tracking-widest uppercase">
                  Make an Offer
                </span>
              )}
            </div>
            <span className="text-domine-gray text-xs tracking-widest uppercase
              group-hover:text-white transition-colors duration-300">
              View →
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}
