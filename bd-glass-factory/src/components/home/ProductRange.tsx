export default function ProductRange() {
  const products = [
    "Glass Sheets",
    "Tempered Glass",
    "Laminated Glass",
    "Insulated Glass",
    "Low-E Glass",
    "Curtain Wall Glass",
    "Glass Railings",
    "Glass Partitions",
    "Shower Room Glass",
    "Decorative & Craft Glass",
    "Glass for Doors and Windows",
    "Custom Project Glass",
  ];

  return (
    <section className="section bg-white">
      <div className="container-page">
        <div className="text-center mb-12">
          <h2 className="text-brand-dark mb-4">One China Glass Factory, Multiple Glass Solutions</h2>
          <p className="text-brand-muted-dark text-body-lg max-w-3xl mx-auto">
            Whether you are working on residential buildings, commercial projects, curtain walls,
            villas, hotels, offices, or interior decoration, BD-Glass provides a wide range of
            processed glass products to match different design, safety, insulation, and aesthetic needs.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {products.map((product) => (
            <div
              key={product}
              className="flex items-center gap-3 bg-brand-gray/5 border border-gray-100 rounded-lg px-4 py-3.5 hover:border-brand-blue/30 hover:bg-brand-blue/5 transition-all duration-200"
            >
              <span className="w-1.5 h-1.5 bg-brand-blue rounded-full shrink-0" />
              <span className="text-brand-dark text-sm font-medium">{product}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
