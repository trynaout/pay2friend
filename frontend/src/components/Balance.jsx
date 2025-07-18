export const Balance = ({ value }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-secondary-100">
      <div className="text-lg font-medium text-secondary-600">Your balance</div>
      <div className="text-3xl font-bold text-primary-600 mt-2">₹ {value}</div>
    </div>
  );
};
