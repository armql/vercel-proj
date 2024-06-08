import {useState, useEffect, useRef} from 'react';
import {CaretDown} from "@phosphor-icons/react";
import {zFilters} from "../features/recipes/store/zFilters.ts";

interface Option {
    id: string | number;
    value: string;
}

interface DropdownProps {
    options: Option[];
    placeholder: string;
    type: 'category' | 'ingredient' | 'timespan';
}

function Dropdown({options, type, placeholder}: DropdownProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const {setSelectedCategories, setSelectedIngredients, setSelectedTime} = zFilters();

    const toggling = () => setIsOpen(!isOpen);

    const typeToSetFunction = {
        category: setSelectedCategories,
        ingredient: setSelectedIngredients,
        timespan: setSelectedTime,
    };

    const onOptionClicked = (value: Option) => () => {
        setSelectedOptions(prevSelectedOptions => {
            if (prevSelectedOptions.find(option => option.id === value.id)) {
                const newSelectedOptions = prevSelectedOptions.filter(option => option.id !== value.id);
                typeToSetFunction[type](newSelectedOptions.map(option => option.id));
                return newSelectedOptions;
            } else {
                const newSelectedOptions = [...prevSelectedOptions, value];
                typeToSetFunction[type](newSelectedOptions.map(option => option.id));
                return newSelectedOptions;
            }
        });
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="relative md:w-64 w-80" ref={dropdownRef}>
            <button type="button"
                    className={`flex w-full flex-row items-center justify-between py-4 border-b  px-2 ${isOpen ? "border-green-600" : "border-green-400"}`}
                    onClick={toggling}>
                <div className="font-mono font-semibold tracking-wide truncate">{placeholder} {selectedOptions.length <= 0 || (
                    <span
                        className="bg-sky-950 text-white px-2 py-1 text-sm rounded-full">{selectedOptions.length}</span>
                )}</div>
                <div className="flex justify-center items-center">
                    <p><CaretDown size={20} className={`transition-all duration-500 ${isOpen ? "rotate-180" : ""}`} weight="bold"/></p>
                </div>
            </button>
            {isOpen && (
                <ul className="absolute z-50 py-2 mt-2 rounded-sm left-0 right-0 bg-[#E5EEFD]  backdrop-blur-sm w-full">
                    {options.map(option => (
                        <li className="px-3 flex items-center gap-2  font-mono py-2 hover:text-green-900 cursor-pointer"
                            key={option.id} onClick={onOptionClicked(option)}>
                            {selectedOptions.find(selectedOption => selectedOption.id === option.id) ? (
                                <div className="w-3 h-3 bg-sky-950 rounded-sm"/>
                            ) : (
                                <div className="w-3 h-3 border-sky-950 border rounded-sm"/>
                            )} {option.value}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Dropdown;