/** @typedef {import("next").NextConfig} NextConfig */

/**
 * @typedef {Object} ParaglideAdapter
 * @property {string} paraglideDir
 */

/**
 * @param {ParaglideAdapter & import("next").NextConfig} config
 * @returns {import("next").NextConfig}
 */
export function paraglideAdapter({paraglideDir, ...config}) {
    /** @type {import("next").NextConfig} */
    const updatedConfig = 
    {
        ...config,
        experimental: {
            ...config?.experimental,
            turbo: {
                ...config?.experimental?.turbo,
                resolveAlias: {
                    ...config?.experimental?.turbo?.resolveAlias,
                    "$paraglide/runtime.js": `${paraglideDir}/runtime`,
                }
            }
        }
    }

    return updatedConfig
}
