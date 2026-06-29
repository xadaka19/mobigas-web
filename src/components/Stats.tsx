export default function Stats() {
  const stats = [
    { value: '10–40', unit: 'min', label: 'Average delivery time' },
    { value: '30', unit: 'days', label: 'Flexible repayment' },
    { value: '8km', unit: '', label: 'Delivery radius' },
    { value: '0', unit: '', label: 'Capital risk to vendors' },
  ]

  return (
    <section className="bg-[#F97316] py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map(({ value, unit, label }) => (
            <div key={label} className="text-center">
              <div className="text-4xl font-black text-white">
                {value}<span className="text-2xl">{unit}</span>
              </div>
              <div className="text-orange-100 text-sm mt-1">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
