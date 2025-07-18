export function InputBox({ label, placeholder, onChange }) {
  return (
    <div>
      <div className="text-sm font-medium text-left py-2 text-secondary-700">{label}</div>
      <input
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-4 py-2 border rounded-lg border-secondary-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all duration-200"
      />
    </div>
  );
}
