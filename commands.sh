pnpm init
tsc --init

add src/index.ts

pnpm add -D tsup   
pnpm add vitest
pnpm add @changesets/cli -D 
pnpm changeset init 
pnpm run build
pnpm test
add .npmignore
pnpm changeset #to add new release changeset (basically a readme file added to the previous )
pnpm changeset version
# You have to configure your repository - Settings -> Action -> General -> Workflow permissions and choose read and write permissions