export default function Section({ children, title, ...props }) {
  return (
    <section {...props}>
      <h3>{title}</h3>
      {children}
    </section>
  );
}
