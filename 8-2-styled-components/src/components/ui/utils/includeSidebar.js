export function includeSidebar({
  gap = "1rem",
  sidebarPosition = "last-child",
  sidebarWidth = "auto",
  minWidth = "50%",
}) {
  return `
  display: flex;
  flex-wrap: wrap;
  gap: ${gap};

  > * {
    flex-basis: ${sidebarWidth};
    flex-grow: 1;
  }

  > ${":" + sidebarPosition} {
    min-width: ${minWidth};
    flex-basis: 0;
    flex-grow: 999;
  }
`;
}
