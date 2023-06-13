pnpm init
tsc --init

add src/index.ts

pnpm add -D tsup   
pnpm add -D zod
pnpm add vitest
pnpm add @changesets/cli -D 
pnpm changeset init 
pnpm run build
pnpm test
add .npmignore
# You have to configure your repository - Settings -> Action -> General -> Workflow permissions and choose read and write permissions

pnpm run ci #before deploying
pnpm changeset #to add new release changeset (basically a readme file added to the previous )
pnpm changeset version
 git add . && git commit -m "added better structure" && git push   