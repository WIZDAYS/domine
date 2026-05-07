export const metadata = {
  title: 'About — DOMINE',
}

export default function AboutPage() {
  return (
    <div className="pt-32 min-h-screen">
      <div className="max-w-3xl mx-auto px-8">
        <p className="text-domine-gray text-xs tracking-[0.4em] uppercase mb-4">
          Our Philosophy
        </p>
        <h1 className="font-display text-5xl md:text-6xl font-light text-white mb-16">
          About
        </h1>

        <div className="flex flex-col gap-12 text-domine-gray leading-relaxed">
          <div>
            <h2 className="text-white text-xl font-light mb-4 tracking-wide">
              Every Domain Has a Shape.
            </h2>
            <p>
              DOMINE is not a domain marketplace. It is a gallery of digital identities —
              each domain curated for its phonetic weight, visual character,
              and the brand potential it carries.
            </p>
          </div>

          <div>
            <h2 className="text-white text-xl font-light mb-4 tracking-wide">
              What is a Shaped Domain?
            </h2>
            <p>
              A shaped domain is one that already has a form — a feeling, an animal,
              a force of nature embedded in its sound and structure.
              We identify these domains and match them with the brands they were born for.
            </p>
          </div>

          <div>
            <h2 className="text-white text-xl font-light mb-4 tracking-wide">
              Safe Transactions
            </h2>
            <p>
              All high-value transactions are handled through Escrow.com —
              the global standard for secure domain transfers.
              Your investment is protected at every step.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
