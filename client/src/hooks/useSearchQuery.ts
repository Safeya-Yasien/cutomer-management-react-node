import { useSearch } from "@/context/useSearchContext";
import type { ICustomer } from "@/types/customer.types";
import { useQuery } from "@tanstack/react-query";
import { useDebounce } from "@uidotdev/usehooks";

const apiUrl = `${import.meta.env.VITE_API_URL}/customers`;

interface ISearchResponse {
  msg: string;
  success: boolean;
  data: ICustomer[];
}

const useSearchQuery = () => {
  const { search, setShouldSearch } = useSearch();
  const debouncedSearchTerm = useDebounce(search, 500);

  const searchQuery = useQuery<ISearchResponse, Error>({
    queryKey: ["customers", debouncedSearchTerm],
    queryFn: async () => {
      try {
        const response = await fetch(
          `${apiUrl}/search?search=${debouncedSearchTerm}`
        );

        if (!response.ok) {
          throw new Error(`Request failed: ${response.status}`);
        }

        return await response.json();
      } catch (err) {
        console.error("Search fetch error:", err);
        throw err;
      }
    },
    enabled: debouncedSearchTerm.trim().length > 0,
    meta: {
      onSuccess: () => {
        setShouldSearch(false);
      },
    },
  });

  return searchQuery;
};

export default useSearchQuery;
