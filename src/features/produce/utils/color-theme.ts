export function colorTheme(label: string) {
    const bgcolors = {
        one: "009F66",
        two: "0E3A25",
        three: "106EFD",
        four: "FC90B9",
        five: "91B820",
    };

    const colorOneLabels = [
        "Baby Butter",
        "Baby Romaine",
        "Baby Kale",
        "Basil",
        "Cilantro",
        "Parsley",
        "Avocado Ranch",
    ];
    const colorTwoLabels = [
        "Crispy Leaf",
        "Mixed Greens",
        "Spinach",
        "Bok Choy",
        "Zesty Caesar",
        "Balsamic",
    ];
    const colorThreeLabels = ["Spring Mix"];
    const colorFourLabels = ["Berries"];
    const colorFiveLabels = ["Mustard Frills"];

    if (colorOneLabels.includes(label)) {
        return bgcolors.one;
    } else if (colorTwoLabels.includes(label)) {
        return bgcolors.two;
    } else if (colorThreeLabels.includes(label)) {
        return bgcolors.three;
    } else if (colorFourLabels.includes(label)) {
        return bgcolors.four;
    } else if (colorFiveLabels.includes(label)) {
        return bgcolors.five;
    } else {
        return "#0000";
    }
}