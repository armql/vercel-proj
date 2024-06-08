export const calculateAverageRating = (reviews: any[]) => {
    if (reviews.length === 0) return 0;
    const sum = reviews.reduce((total, review) => total + review.stars, 0);
    return sum / reviews.length;
};