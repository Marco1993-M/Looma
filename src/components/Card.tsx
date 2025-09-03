// src/components/Card.tsx
export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow hover:shadow-md transition">
      {children}
    </div>
  );
}
