interface inputProps {
  name: string;
  placeholder?: string;
  disabled?: boolean;
}

export function Input({ name, placeholder, disabled }: inputProps) {
  return (
    <div className="mt-4">
      <label
        htmlFor={name}
        className="block text-md font-thin capitalize text-gray-700"
      >
        {name}
      </label>
      <input
        disabled={disabled}
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black focus:border-transparent"
        type={name != "password" && name != "email" ? "text" : name === "password" ? "password" : "email"}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
}
