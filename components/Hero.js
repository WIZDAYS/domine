export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-end overflow-hidden">

      {/* 배경 이미지 영역 — 포토샵 작업물 여기에 */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-bg.jpg"
          alt="DOMINE Hero"
          className="w-full h-full object-cover object-center"
        />
        {/* 하단 그라디언트 */}
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, rgba(10,10,10,0.3) 0%, rgba(10,10,10,0.0) 40%, rgba(10,10,10,0.8) 80%, rgba(10,10,10,1) 100%)' }} />
      </div>

      {/* 히어로 텍스트 */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-8 pb-24">
        <p className="text-domine-gray text-sm tracking-[0.4em] uppercase mb-4">
          Domain Mining
        </p>
        <h1 className="font-display text-5xl md:text-7xl font-light text-white leading-tight mb-6"
          style={{ letterSpacing: '-0.02em' }}>
          Every Domain<br />Has a Shape.
        </h1>
        <p className="text-domine-gray text-base md:text-lg max-w-lg leading-relaxed">
          Curated selection of exceptional digital assets.<br />
          Each domain represents a unique identity.
        </p>
      </div>
    </section>
  )
}
