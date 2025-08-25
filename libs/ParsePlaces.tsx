import { VALID_CATEGORY } from "./data";

export const ParseRoute = (path: string) => {
    if (!path) return null;

    // Case 1: "{prefix}-in-{city}"
    const pattern = /^(.+)-in-(.+)$/;
    const match = path.match(pattern);

    if (match) {
        const prefix = match[1].toLowerCase();
        const city = match[2].toLowerCase();

        if (VALID_CATEGORY.includes(prefix)) {
            return { prefix, city };
        }
        return null;
    }

    // Case 2: only a slug without "-in-"
    const prefix = path.toLowerCase();
    if (VALID_CATEGORY.includes(prefix)) {
        return { prefix, city: null };
    }

    return null;
};
