import  {Suspense, ReactNode} from 'react';
import LoaderFallback from "./LoaderFallback.tsx";
import ErrorFallback from "./ErrorFallback.tsx";

function CSuspense({children}: {children: ReactNode}) {
    return (
        <Suspense fallback={<LoaderFallback />}>
            <ErrorFallback>
            {children}
            </ErrorFallback>
        </Suspense>
    );
}

export default CSuspense;