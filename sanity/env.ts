function assertValue<T>(v: T | undefined, errorMessage: string): T {
    if (v === undefined) {
        throw new Error(errorMessage)
    }
    return v
}

export const API_VERSION = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2023-05-26"

export const DATASET = assertValue(
    process.env.NEXT_PUBLIC_SANITY_DATASET,
    "Missing environment variable: NEXT_PUBLIC_SANITY_DATASET"
);

export const PROJECT_ID = assertValue(
    process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    "Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID"
);

export const USE_CDN = false;

