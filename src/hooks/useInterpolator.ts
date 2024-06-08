type InterpolatorProps = {
    x: number;
    up: number;
    down: number;
};

type InterpolationParams = {
    x: number;
    x1: number;
    x2: number;
    y1: number;
    y2: number;
};

export default function useInterpolator({ x, up, down }: InterpolatorProps) {
    const interpolate = ({ x, x1, x2, y1, y2 }: InterpolationParams) => {
        return y1 + ((x - x1) * (y2 - y1)) / (x2 - x1);
    };

    const value = interpolate({ x: x, x1: up, x2: down, y1: 50, y2: 0 });

    return { value };
}
