import {create} from 'zustand';

type FiltersProps = {
    selectedCategories: (number | string)[];
    selectedIngredients: (number | string)[];
    selectedTime: (number | string)[];
    searchTerm: string;
    setSearchTerm: (term: string) => void;
    setSelectedCategories: (categories: (number | string)[]) => void;
    setSelectedIngredients: (ingredients: (number | string)[]) => void;
    setSelectedTime: (time: (number | string)[]) => void;
};

export const zFilters = create<FiltersProps>((set) => ({
    selectedCategories: [],
    selectedIngredients: [],
    selectedTime: [],
    searchTerm: "",
    setSearchTerm: (term) => set({searchTerm: term}),
    setSelectedCategories: (categories) => set({selectedCategories: categories}),
    setSelectedIngredients: (ingredients) => set({selectedIngredients: ingredients}),
    setSelectedTime: (time) => set({selectedTime: time}),
}));