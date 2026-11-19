export default function StatCard({
  title,
  value,
  change,
  icon: Icon,
  color = 'blue'
}) {
  return (
    <div className="stat-card">
      <div className={`stat-icon ${color}`}>
        <Icon size={23} />
      </div>

      <div>
        <p>{title}</p>
        <h2>{value}</h2>
        {change && <small>{change}</small>}
      </div>
    </div>
  );
}