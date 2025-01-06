import { delay } from "framer-motion";

export const variants = {
    initial: {
        opacity: 0,
        x: -100,
    },
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            delay: 0.25,
            staggerChildren: 0.3,
            delayChildren: 0.3,
            duration: 0.7,
            ease: "easeIn",
        },
    },
};

export const childVariants = {
    initial: {
        opacity: 0,
        x: -50,
    },
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.3,
        },
    },
};

export const variantTitle = {
    initial: {
        opacity: 0,
        y: -100,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1.2,
            ease: "easeOut",
        },
    },
};

export const variantTitle2 = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1.2,
            ease: "easeOut",
        },
    },
};

export const variantContact = {
    initial: {
        opacity: 0,
        y: -100,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.8,
            duration: 1.2,
            ease: "easeOut",
        },
    },
};

export const variant1 = {
    initial: {
        opacity: 0,
        x: -100,
    },
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            ease: "easeIn",
            duration: 0.8,
        },
    },
};

export const variant2 = {
    initial: {
        opacity: 0,
        x: 100,
    },
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            ease: "easeIn",
            duration: 0.8,
        },
    },
};

export const parentVariant = {
    animate: {
        transition: {
            duration: 0.6,
            staggerChildren: 0.5,
            delayChildren: 0.4,
        },
    },
};
export const variantGrid = {
    initial: {
        opacity: 0,
        y: -100,
    },
    animate: (index) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            delay: 0.08 * index,
        },
    }),
};

export const variantGrid2 = {
    initial: {
        opacity: 0,
        x: -100,
    },
    animate: (index) => ({
        opacity: 1,
        x: 0,
        transition: {
            duration: 1,
            delay: 0.08 * index,
        },
    }),
};