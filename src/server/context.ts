/* eslint-disable @typescript-eslint/no-unused-vars */
import type * as trpcNext from "@trpc/server/adapters/next";

interface CreateContextOptions
	extends Partial<trpcNext.CreateNextContextOptions> {}

/**
 * Inner function for `createContext` where we create the context.
 * This is useful for testing when we don't want to mock Next.js' request/response
 */
export async function createContextInner({ req, res }: CreateContextOptions) {
	return {
		req,
		res,
	};
}

export type Context = Awaited<ReturnType<typeof createContextInner>>;

/**
 * Creates context for an incoming request
 * @link https://trpc.io/docs/context
 */
export async function createContext(
	opts: trpcNext.CreateNextContextOptions,
): Promise<Context> {
	// for API-response caching see https://trpc.io/docs/caching

	return await createContextInner({
		req: opts.req,
		res: opts.res,
	});
}
