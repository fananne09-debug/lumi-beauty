'use client'
  export default function KBeautyWholesaleWebsite() {
  const products = [
    {
      name: 'Velvet Lip Tint',
      desc: 'Soft matte Korean-style lip tint with long-lasting color.',
      image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200&auto=format&fit=crop'
    },
    {
      name: 'Glow Cushion Foundation',
      desc: 'Lightweight glass-skin cushion foundation for natural glow.',
      image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1200&auto=format&fit=crop'
    },
    {
      name: 'Mood Eyeshadow Palette',
      desc: 'Low-saturation Korean aesthetic colors for everyday makeup.',
      image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1200&auto=format&fit=crop'
    }
  ]

  return (
    <div className="min-h-screen bg-[#f7f3ef] text-neutral-800 font-sans">
      <header className="border-b border-neutral-200 bg-white/70 backdrop-blur sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold tracking-wide">LUMI BEAUTY</h1>
            <p className="text-sm text-neutral-500">K-Beauty Wholesale Studio</p>
          </div>

          <nav className="hidden md:flex gap-8 text-sm text-neutral-600">
            <a href="#about" className="hover:text-black transition">About</a>
            <a href="#products" className="hover:text-black transition">Products</a>
            <a href="#services" className="hover:text-black transition">Wholesale</a>
            <a href="#contact" className="hover:text-black transition">Contact</a>
          </nav>
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-14 items-center">
        <div>
          <p className="uppercase tracking-[0.3em] text-sm text-neutral-500 mb-5">
            Korean Beauty Supplier
          </p>

          <h2 className="text-5xl md:text-6xl leading-tight font-light mb-8">
            Quiet Luxury
            <br />
            K-Beauty
          </h2>

          <p className="text-neutral-600 leading-8 text-lg max-w-xl mb-10">
            Curated Korean-inspired makeup products for global wholesale buyers.
            Minimal aesthetic, trend-focused packaging, and long-term brand collaboration.
          </p>

          <div className="flex gap-4">
            <button className="bg-black text-white px-7 py-3 rounded-2xl hover:opacity-90 transition">
              Request Catalog
            </button>

            <button className="border border-neutral-300 px-7 py-3 rounded-2xl hover:bg-white transition">
              View Products
            </button>
          </div>
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=1200&auto=format&fit=crop"
            alt="beauty"
            className="rounded-[2rem] shadow-2xl object-cover h-[650px] w-full"
          />
        </div>
      </section>

      <section id="about" className="max-w-5xl mx-auto px-6 py-20">
        <div className="bg-white rounded-[2rem] p-10 md:p-16 shadow-sm border border-neutral-100">
          <p className="uppercase tracking-[0.25em] text-sm text-neutral-400 mb-5">
            About Us
          </p>

          <h3 className="text-3xl md:text-4xl font-light mb-8 leading-relaxed">
            We focus on soft aesthetics, trend-sensitive product selection, and modern Korean beauty direction.
          </h3>

          <p className="text-neutral-600 leading-8 max-w-3xl">
            Our wholesale collections are inspired by Seoul beauty trends, clean visuals, and emotional branding.
            We work with overseas retailers, boutiques, and online beauty stores looking for elevated Korean-style cosmetics.
          </p>
        </div>
      </section>

      <section id="products" className="max-w-6xl mx-auto px-6 py-20">
        <div className="mb-14">
          <p className="uppercase tracking-[0.25em] text-sm text-neutral-400 mb-4">
            Featured Products
          </p>
          <h3 className="text-4xl font-light">Wholesale Collection</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.name}
              className="bg-white rounded-[2rem] overflow-hidden border border-neutral-100 shadow-sm hover:-translate-y-1 transition"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-80 w-full object-cover"
              />

              <div className="p-7">
                <h4 className="text-2xl font-light mb-3">{product.name}</h4>
                <p className="text-neutral-600 leading-7">{product.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="bg-white py-24 mt-12 border-y border-neutral-100">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'Low MOQ',
              text: 'Flexible order quantity for startups and boutique brands.'
            },
            {
              title: 'Custom Packaging',
              text: 'Support for logo printing and aesthetic packaging design.'
            },
            {
              title: 'Trend Research',
              text: 'Focused on Korean beauty trends and global market aesthetics.'
            }
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-[2rem] bg-[#f7f3ef] p-10"
            >
              <h4 className="text-2xl font-light mb-5">{item.title}</h4>
              <p className="text-neutral-600 leading-7">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="max-w-4xl mx-auto px-6 py-24 text-center">
        <p className="uppercase tracking-[0.25em] text-sm text-neutral-400 mb-5">
          Contact
        </p>

        <h3 className="text-4xl md:text-5xl font-light mb-8 leading-tight">
          Let’s Build Your Beauty Brand Together
        </h3>

        <p className="text-neutral-600 leading-8 mb-10 max-w-2xl mx-auto">
          Contact us for wholesale catalog, OEM/ODM inquiry, and Korean beauty product sourcing.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4">
          <input
            placeholder="Your Email"
            className="px-6 py-4 rounded-2xl border border-neutral-200 bg-white md:w-[320px]"
          />

          <button className="bg-black text-white px-8 py-4 rounded-2xl hover:opacity-90 transition">
            Send Inquiry
          </button>
        </div>
      </section>

      <footer className="border-t border-neutral-200 py-8 text-center text-sm text-neutral-500 bg-white">
        © 2026 LUMI BEAUTY — Korean Makeup Wholesale
      </footer>
    </div>
  )
}
