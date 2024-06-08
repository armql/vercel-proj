import {useState, useEffect, ReactNode} from 'react';

function ErrorFallback({ error }: {error: Error}) {
    return (
        <div role="alert">
            <p>Oops! Something went wrong:</p>
            <pre>{error.message}</pre>
            <button onClick={() => window.location.reload()}>Try again</button>
        </div>
    );
}

function ErrorBoundary({ children } : {children: ReactNode}) {
    const [error, setError] = useState(null);

    useEffect(() => {
        if (error) {
            console.error("Uncaught error:", error);
            setError(error);
        }
    }, [error]);

    return (
        error ? <ErrorFallback error={error} /> : children
    );
}

export default ErrorBoundary;