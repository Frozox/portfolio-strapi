install:
	@pnpm install
	
build:
	@pnpm run build

watch:
	@pnpm run watch

up@docker:
	@docker compose up -d

down@docker:
	@docker compose down

up:
	@make up@docker
	@pnpm run dev

up@back:
	@make up@docker
	@pnpm --filter @portfolio/strapi dev

up@front:
	@make up@docker
	@pnpm --filter @portfolio/astro dev