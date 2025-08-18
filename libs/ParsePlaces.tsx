export const ParseRoute = (path: string) => {
    if (!path) return null;

    // Case 1: "{prefix}-in-{city}"
    const pattern = /^(.+)-in-(.+)$/;
    const match = path.match(pattern);

    if (match) {
        const prefix = match[1].toLowerCase();
        const city = match[2].toLowerCase();
        return { prefix, city };
    }

    // Case 2: only a slug without "-in-"
    return { prefix: path.toLowerCase(), city: null };
};
