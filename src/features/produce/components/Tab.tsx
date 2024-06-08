import { supabase } from "../../../client/supa.ts";
import { useQuery } from "react-query";

export default function Tab({
  selectedTab,
  setSelectedTab,
}: {
  selectedTab: number;
  setSelectedTab: (tab: number) => void;
}) {
  const fetchCategories = async () => {
    let { data: categories, error } = await supabase
      .from("product_categories")
      .select("*");

    if (error) throw error;
    return categories;
  };

  const {
    data: categories,
    isLoading,
    error,
  } = useQuery("category_products", fetchCategories);

  if (isLoading) return "Loading...";
  if (error) return "An error has occurred: " + error.message;

  function handleTab(tab: number) {
    setSelectedTab(tab);
  }

  return (
    <div className="flex w-full flex-col items-center justify-center py-0 sm:flex-row sm:py-6">
      {categories &&
        categories.map((tab) => (
          <ul
            key={tab.id}
            onClick={() => handleTab(tab.id)}
            className={`grid w-full grid-cols-1 items-center justify-center gap-4 border-b-2 py-2 transition-all duration-300 ${
              selectedTab === tab.id ? "border-blue-500" : "border-blue-100"
            }`}
          >
            <li className="w-full cursor-pointer truncate py-2 text-center font-libre text-[11px] font-medium uppercase hover:border-blue-600 sm:text-xs">
              {tab.name}
            </li>
          </ul>
        ))}
    </div>
  );
}
