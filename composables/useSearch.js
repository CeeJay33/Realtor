import { useState } from "#app";

export function useSearch() {
  // Shared state for search query
  const searchQuery = useState("searchQuery", () => "");

  // Method to filter properties
  const filterProperties = (propertiesData) => {
    if (!searchQuery.value) return propertiesData;
    return propertiesData.filter((property) => {
      const address = property?.property?.address; // Safely access address
      return (
        typeof address === "string" &&
        address.toLowerCase().includes(searchQuery.value.toLowerCase())
      );
    });
  };

  return {
    searchQuery,
    filterProperties,
  };
}
