export const metadata = {
  title: 'Contact — DOMINE',
}

export default function ContactPage() {
  return (
    <div className="pt-32 min-h-screen">
      <div className="max-w-3xl mx-auto px-8">
        <p className="text-domine-gray text-xs tracking-[0.4em] uppercase mb-4">
          Get in Touch
        </p>
        <h1 className="font-display text-5xl md:text-6xl font-light text-white mb-16">
          Contact
        </h1>

        <form className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <label className="text-domine-gray text-xs tracking-[0.3em] uppercase">
              Name
            </label>
            <input
              type="text"
              className="bg-transparent border-b border-domine-border text-white py-3
                focus:outline-none focus:border-domine-gold transition-colors duration-300
                text-base"
              placeholder="Your name"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-domine-gray text-xs tracking-[0.3em] uppercase">
              Email
            </label>
            <input
              type="email"
              className="bg-transparent border-b border-domine-border text-white py-3
                focus:outline-none focus:border-domine-gold transition-colors duration-300
                text-base"
              placeholder="your@email.com"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-domine-gray text-xs tracking-[0.3em] uppercase">
              Domain of Interest
            </label>
            <input
              type="text"
              className="bg-transparent border-b border-domine-border text-white py-3
                focus:outline-none focus:border-domine-gold transition-colors duration-300
                text-base"
              placeholder="e.g. ij3n.com"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-domine-gray text-xs tracking-[0.3em] uppercase">
              Message
            </label>
            <textarea
              rows={4}
              className="bg-transparent border-b border-domine-border text-white py-3
                focus:outline-none focus:border-domine-gold transition-colors duration-300
                text-base resize-none"
              placeholder="Your message..."
            />
          </div>

          <button
            type="submit"
            className="self-start border border-domine-gold text-domine-gold
              px-12 py-4 text-xs tracking-[0.3em] uppercase
              hover:bg-domine-gold hover:text-black
              transition-all duration-300">
            Send Inquiry
          </button>
        </form>
      </div>
    </div>
  )
}
