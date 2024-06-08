import {zFilters} from "../stores/zFilters.ts";
import Search from "./Search.tsx";

interface TabProps {
    categories: {
        id: number;
        name: string;
    }[];
}

export default function Tab({categories}: TabProps) {
    const { selectedTab, setSelectedTab} = zFilters();


    function handleTab(tab: number) {
        setSelectedTab(tab);
    }

    return (
        <div className="flex w-full gap-2 flex-row items-center justify-between py-0 sm:flex-row sm:py-6">
            <div className="flex overflow-auto hide-scrollbar flex-row md:w-[2400px] w-[400px] justify-evenly">
                {categories && categories.map((tab) => (
                    <ul
                        key={tab.id}
                        onClick={() => handleTab(tab.id)}
                        className={`grid w-full grid-cols-1 md:min-w-[200px] min-w-[150px] items-center justify-center gap-4 border-b-2 py-2 transition-all duration-300 ${selectedTab === tab.id ? "border-blue-500" : "border-blue-100"}`}
                    >
                        <li className="cursor-pointer truncate py-2 text-center font-libre text-[11px] font-medium uppercase hover:border-blue-600 text-sm tracking-tight">
                            {tab.name}
                        </li>
                    </ul>
                ))}
            </div>
            <Search/>
        </div>
    );
}
