const Input = () => {
  return (
    <div className="relative w-full">
      <input
        required
        className="peer w-full border border-input bg-background px-3 pt-6 pb-2 text-sm rounded-md focus:border-primary focus:ring-1 focus:ring-primary outline-none"
      />
      <label className="absolute left-3 top-4 text-muted-foreground text-sm transition-all peer-focus:top-2 peer-focus:text-xs peer-focus:text-primary peer-valid:top-2 peer-valid:text-xs">
        Username
      </label>
    </div>
  );
};
export default Input;
