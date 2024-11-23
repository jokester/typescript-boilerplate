import fsp from 'node:fs/promises';
import path from 'node:path'

async function updatePackageManifest(versionManifestPath: string, packageManifestPath: string) {

    const versionManifest: any = JSON.parse(await fsp.readFile(versionManifestPath, { encoding: 'utf-8' }))

    const packageManifest: any = JSON.parse(await fsp.readFile(packageManifestPath, { encoding: 'utf-8' }))

    // console.debug(versionManifest)
    // console.debug(packageManifest)

    const referedDeps = new Set<string>(Object.keys(packageManifest.dependencies || {}))
    const referedDevDeps = new Set<string>(Object.keys(packageManifest.devDependencies || {}))

    for (const [d, v] of Object.entries(versionManifest.dependencies )) {
        if (referedDeps.has(d)) {
            packageManifest.dependencies[d] = v
        }
        if (referedDevDeps.has(d)) {
            packageManifest.devDependencies[d] = v
        }
    }
    await fsp.writeFile(packageManifestPath, JSON.stringify(packageManifest, null, 2))
}
async function main() {
    const versionManifestPath = path.join(__dirname, "../shared-config/package.json")

    for (const dir of [
        '..',
        '../empty',
        '../next',
        '../hono-worker',
        '../preact-spa',
    ]) {
        const packageManifestPath = path.join(__dirname, `${dir}/package.json`)
        await updatePackageManifest(versionManifestPath, packageManifestPath)
        console.log(`updated ${packageManifestPath}`)
    }

}

setTimeout(main)
