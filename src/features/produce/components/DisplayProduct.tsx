import {useState} from "react";
import Tab from "./Tab.tsx";
import Card from "./Card.tsx";
import {useQuery} from "react-query";
import {supabase} from "../../../client/supa.ts";

export default function DisplayProduct() {
    const [selectedTab, setSelectedTab] = useState(1);

    const fetchProducts = async () => {
        let {data: products, error} = await supabase
            .from('products')
            .select(`
            *,
            reviews (
                *
            )
        `);

        if (error) throw error;
        return products;
    }

    const {data: products, isLoading} = useQuery('products', fetchProducts);

    if (isLoading) return 'Loading...';

    return (
        <div className="h-full w-full bg-stone-100">
            <div
                className="flex w-full flex-col items-center justify-center px-0 md:px-[24px] lg:px-[40px] xl:px-[100px]">
                <Tab selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
                <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12">
                    {products && products.filter((data) => data.category_id === selectedTab).map(
                        (data) => (
                            <div
                                key={data.id}
                                className="flex h-[800px] w-full flex-wrap items-center justify-around gap-12 overflow-y-auto py-8"
                            >
                                <Card response={data}/>
                            </div>
                        ),
                    )}
                </div>
            </div>
        </div>
    );
}
