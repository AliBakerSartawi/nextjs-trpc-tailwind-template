/**
 * This file contains tRPC's HTTP response handler
 */
import * as trpcNext from "@trpc/server/adapters/next";
import { createContext } from "src/server/context";
import { appRouter } from "src/server/routers";

export default trpcNext.createNextApiHandler({
	router: appRouter,
	/**
	 * @link https://trpc.io/docs/context
	 */
	createContext,
	/**
	 * @link https://trpc.io/docs/error-handling
	 */
	onError({ error }) {
		if (error.code === "INTERNAL_SERVER_ERROR") {
			// send to bug reporting
			console.error("Something went wrong", error);
		}
	},
	/**
	 * Enable query batching
	 */
	batching: {
		enabled: true,
	},
	/**
	 * @link https://trpc.io/docs/caching#api-response-caching
	 */
	// responseMeta() {
	//   // ...
	// },
});
