export default function SectionTitle({ children, icon }) {
  const Icon = icon
  return (
    <h2 className="text-3xl md:text-4xl font-bold tracking-tight flex items-center gap-3">
      {Icon ? <Icon className="w-8 h-8" /> : null}
      {children}
    </h2>
  )
}
