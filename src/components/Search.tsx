import { MagnifyingGlass, X } from "@phosphor-icons/react";
import { zFilters } from "../features/recipes/store/zFilters.ts";
import {ChangeEvent,  useState} from "react";
import {useConditionalEffect} from "../hooks/useConditionalEffect.ts";

export default function Search() {
    const [rawSearchTerm, setRawSearchTerm] = useState("");
    const {  setSearchTerm, selectedIngredients, selectedTime } = zFilters();

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setRawSearchTerm(e.target.value);
    }

    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Enter') {
            setSearchTerm(rawSearchTerm);
        }
    }

    const handleClick = () => {
        setSearchTerm(rawSearchTerm);
    }

    useConditionalEffect(
        () => {
            return () => {
                setSearchTerm("");
                setRawSearchTerm("");
            };
        },
        rawSearchTerm.length > 0,
        [selectedIngredients, selectedTime, selectedIngredients]
    );


    return (
        <div className="border w-96 overflow-hidden border-green-600 relative">
            <input
                type="text"
                placeholder="Search"
                value={rawSearchTerm}
                onChange={handleSearch}
                onKeyDown={handleKeyDown}
                className="placeholder-black font-semibold uppercase py-4 tracking-tight w-full h-full px-4 font-mono focus:outline-none bg-transparent"/>
            <button
                type="button"
                onClick={handleClick}
                className="absolute right-0 top-0 bottom-0 text-black px-4 py-3">
                <MagnifyingGlass size={24} weight="bold"/>
            </button>
        </div>
    );
}