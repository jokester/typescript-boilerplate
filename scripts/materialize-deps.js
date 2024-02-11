const path = require('node:path')
const fsp = require('node:fs/promises')

function setUnspecifiedVersions(variantDepMap, rootDepMap, rootDevDepMap) {
    if (!(variantDepMap)) {
        return
    }

    for (const [k, v] of Object.entries(variantDepMap)) {
        if (v === '*') {
            const filledV = variantDepMap[k] = rootDepMap?.[k] || rootDevDepMap?.[k]
            if (!filledV) {
                console.warn(`could not fill version for ${k}`)
            }
        }
    }
}

async function main(archiveRoot, variant) {
    const rootManifest = path.join(archiveRoot, 'package.json')

    const variantManifest = path.join(archiveRoot, variant, 'package.json')

    const rootManifestContent = JSON.parse(await fsp.readFile(rootManifest, 'utf-8'))

    const variantManifestContent = JSON.parse(await fsp.readFile(variantManifest, 'utf-8'))

    console.debug(`filling dep version from ${rootManifest} into ${variantManifest} `)

    console.debug(variantManifestContent)
    console.debug(rootManifestContent)

    setUnspecifiedVersions(variantManifestContent.dependencies, rootManifestContent.dependencies, rootManifestContent.devDependencies)
    setUnspecifiedVersions(variantManifestContent.devDependencies, rootManifestContent.dependencies, rootManifestContent.devDependencies)
}

if (require.main=== module) {
    const [_node, _script, archiveRoot, variant] = process.argv
    main(archiveRoot, variant)
}