interface inputProps {
    name: string;
    placeholder?: string;
}

export function Input({ name, placeholder }: inputProps) {
    return (
        <div className="mt-4">
        <label htmlFor={name} className="block text-md font-semibold capitalize text-gray-700">{name}</label>
        <input
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black focus:border-transparent"
            type="text"
            name={name}
            placeholder={placeholder}
        />
        </div>
    );
}