export const sortData = (data, sortConfig) => {
    let sortableData = [...data];
    if (sortConfig !== null) {
      sortableData.sort((a, b) => {
        // Jeśli obie wartości są puste, zwróć 0
        if (!a[sortConfig.key] && !b[sortConfig.key]) return 0;
        // Jeśli tylko a jest puste, zwróć 1, co oznacza, że a jest większe (puste wartości są na końcu)
        if (!a[sortConfig.key]) return 1;
        // Jeśli tylko b jest puste, zwróć -1, co oznacza, że a jest mniejsze (puste wartości są na końcu)
        if (!b[sortConfig.key]) return -1;

        // Jeśli żadna z wartości nie jest pusta, porównaj je normalnie
        if (
          typeof a[sortConfig.key] === "number" &&
          typeof b[sortConfig.key] === "number"
        ) {
          return sortConfig.direction === "ascending"
            ? a[sortConfig.key] - b[sortConfig.key]
            : b[sortConfig.key] - a[sortConfig.key];
        } else {
          if (a[sortConfig.key] < b[sortConfig.key]) {
            return sortConfig.direction === "ascending" ? -1 : 1;
          }
          if (a[sortConfig.key] > b[sortConfig.key]) {
            return sortConfig.direction === "ascending" ? 1 : -1;
          }
        }
        return 0;
      });
    }
    return sortableData;
  };