import { usePathname, useRouter, useSearchParams } from "next/navigation";

export function useSearchParamsHandler() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  function updateSearchParam(key: string, value: string) {
    const params = new URLSearchParams(searchParams);

    if (value) params.set(key, value);
    else params.delete(key);

    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return { updateSearchParam };
}
