import {create} from 'zustand';

type FiltersProps = {
    searchTerm: string;
    selectedTab: number;
    setSelectedTab: (tab: number) => void;
    setSearchTerm: (term: string) => void;
};

export const zFilters = create<FiltersProps>((set) => ({
    searchTerm: "",
    selectedTab: 1,
    setSelectedTab: (tab) => set({selectedTab: tab}),
    setSearchTerm: (term) => set({searchTerm: term}),
}));