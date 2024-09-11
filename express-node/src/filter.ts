// Function to filter names with more than 3 characters
export const filterNames = (names: string[]): string[] => {
  return names.filter((name) => name.length > 3);
};
