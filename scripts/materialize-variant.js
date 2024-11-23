const path = require("node:path");
const fsp = require("node:fs/promises");

function setUnspecifiedVersions(variantDepMap, rootDepMap, rootDevDepMap) {
  if (!variantDepMap) {
    return;
  }

  for (const [k, v] of Object.entries(variantDepMap)) {
    if (v === "*") {
      const resolvedVersionSpec = rootDepMap?.[k] || rootDevDepMap?.[k] || "*";
      console.debug(`${k}: ${v} => ${resolvedVersionSpec}`);
      variantDepMap[k] = resolvedVersionSpec;
    }
  }
}

async function dereferenceSymlinks(variantRoot) {
  const entries = await fsp.readdir(variantRoot, { withFileTypes: true });

  for (const e of entries) {
    if (e.isSymbolicLink()) {
      const copyDest = path.join(variantRoot, e.name);
      const linkDest = await fsp.realpath(copyDest);
      if (path.dirname(linkDest) !== path.dirname(copyDest)) {
        await fsp.cp(linkDest, copyDest, { force: true });
        console.debug(`dereferencing symlink ${copyDest}`);
      }
    }
  }
}

async function main(archiveRoot, variant) {
  const rootManifest = path.join(archiveRoot, "package.json");

  const variantManifest = path.join(archiveRoot, variant, "package.json");

  const rootManifestContent = JSON.parse(
    await fsp.readFile(rootManifest, {encoding: "utf-8"}),
  );

  const variantManifestContent = JSON.parse(
    await fsp.readFile(variantManifest, {encoding: "utf-8"}),
  );

  // console.debug(variantManifestContent)
  // console.debug(rootManifestContent)

  console.debug(
    `filling dep version from ${rootManifest} into ${variantManifest} `,
  );
  setUnspecifiedVersions(
    variantManifestContent.dependencies,
    rootManifestContent.dependencies,
    rootManifestContent.devDependencies,
  );
  setUnspecifiedVersions(
    variantManifestContent.devDependencies,
    rootManifestContent.dependencies,
    rootManifestContent.devDependencies,
  );

  await fsp.writeFile(
    variantManifest,
    JSON.stringify(variantManifestContent, null, 2),
  );
  await dereferenceSymlinks(path.join(archiveRoot, variant));
}

if (require.main === module) {
  const [_node, _script, archiveRoot, variant] = process.argv;
  main(archiveRoot, variant).then(() => {
    console.info("done", archiveRoot, variant);
  });
}
