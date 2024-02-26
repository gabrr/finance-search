import { z } from "zod";
import React from "react";
import { useForm, SubmitHandler, SubmitErrorHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SearchIcon } from "src/components/atoms";

const searchSchema = z.object({
  query: z
    .string()
    .trim()
    .max(100, "Hey friend, don't type too much :)")
    .min(1),
});

interface SearchFormData {
  query: string;
}

interface SearchFormProps {
  onSubmit: (data: SearchFormData) => void;
  placeholder?: string;
  label?: string;
  className: string;
}

const SearchForm: React.FC<SearchFormProps> = ({
  onSubmit,
  placeholder,
  label,
  className,
}) => {
  const { register, handleSubmit } = useForm<SearchFormData>({
    resolver: zodResolver(searchSchema),
  });

  const onFormSubmit: SubmitHandler<SearchFormData> = (data) => {
    onSubmit?.(data);
  };

  const onErrors: SubmitErrorHandler<SearchFormData> = (errors) => {
    if (errors.query) {
      console.error(errors.query.message);
    }
  };

  return (
    <form
      role="search"
      aria-label="Site search"
      className={className}
      onSubmit={handleSubmit(onFormSubmit, onErrors)}
    >
      <label htmlFor="search" className="sr-only">
        {label || placeholder || "Search"}
      </label>

      <div className="relative border border-solid border-gray-300 rounded-lg">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none z-10">
          <SearchIcon />
        </div>

        <input
          type="search"
          {...register("query")}
          className="block w-full p-4 ps-10 text-sm text-gray-900 border focus:ring-4 focus:outline-none focus:ring-transparent rounded-lg backdrop-blur-[8px] bg-[rgba(255,255,255,0.2)]"
          placeholder={placeholder}
        />

        <button
          type="submit"
          className="text-gray-100 absolute right-2 top-1/2 translate-y-[-50%] bg-gray-500 hover:bg-gray-600 transition-colors focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs md:text-sm px-4 py-2"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
