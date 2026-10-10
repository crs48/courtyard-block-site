/** A square ring model, not a building feasibility or environmental simulation. */
export const courtyardGeometry = (court: number, floors: number, site = 40) => {
  if (![court, floors, site].every(Number.isFinite) || site <= 0 || court <= 0 || court >= site || !Number.isInteger(floors) || floors < 1) {
    throw new RangeError('Use a positive courtyard smaller than the site and at least one whole floor.');
  }
  const openArea = court ** 2;
  const footprint = site ** 2 - openArea;
  return { openArea, footprint, depth: (site - court) / 2, coverage: footprint / site ** 2 * 100, floorArea: footprint * floors, far: footprint * floors / site ** 2 };
};
