pnpm init
tsc --init

add src/index.ts

pnpm add -D tsup   
pnpm add vitest
pnpm add @changesets/cli -D 
pnpm changeset init 
pnpm run build
pnpm test