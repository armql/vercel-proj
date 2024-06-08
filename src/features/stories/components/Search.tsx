import { MagnifyingGlass } from "@phosphor-icons/react";
import { ChangeEvent, useState, KeyboardEvent } from "react";
import { zFilters } from "../stores/zFilters.ts";
import { useConditionalEffect } from "../../../hooks/useConditionalEffect.ts";

export default function Search() {
  const [rawSearchTerm, setRawSearchTerm] = useState("");
  const { setSearchTerm, selectedTab } = zFilters();
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setRawSearchTerm(e.target.value);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setSearchTerm(rawSearchTerm);
    }
  };

  const handleClick = () => {
    setSearchTerm(rawSearchTerm);
  };

  useConditionalEffect(
    () => {
      return () => {
        setSearchTerm("");
        setRawSearchTerm("");
      };
    },
    rawSearchTerm.length > 0,
    [selectedTab]
  );

  return (
    <div className="border w-full overflow-hidden border-blue-600 relative">
      <input
        type="text"
        placeholder="Search"
        value={rawSearchTerm}
        onChange={handleSearch}
        onKeyDown={handleKeyDown}
        className="placeholder-black font-semibold uppercase py-4 tracking-tight w-full h-full px-4 font-mono focus:outline-none bg-transparent"
      />
      <button
        type="button"
        title="Search"
        onClick={handleClick}
        className="absolute right-0 top-0 bottom-0 text-black px-4 py-3"
      >
        <MagnifyingGlass size={24} weight="bold" />
      </button>
    </div>
  );
}
