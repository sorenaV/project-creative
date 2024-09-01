"use client";

import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

function CacheProviderContainer({ children }: { children: JSX.Element }) {
  return <CacheProvider value={cacheRtl}>{children}</CacheProvider>;
}

export default CacheProviderContainer;
