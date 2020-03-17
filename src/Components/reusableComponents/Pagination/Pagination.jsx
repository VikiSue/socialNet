import React from "react";

const Pagination = ({ currentPage, onUsersPageChange, fetchUsers }) => {
  const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  let showedPages = [];
  if (currentPage === 1) {
    showedPages = [1, 2, "...", pages[pages.length - 1]];
  }
  if (currentPage === 2) {
    showedPages = [
      1,
      currentPage,
      currentPage + 1,
      "...",
      pages[pages.length - 1]
    ];
  }
  if (currentPage !== 1 && currentPage !== 2) {
    showedPages = [
      1,
      "...",
      currentPage - 1,
      currentPage,
      currentPage + 1,
      "...",
      pages[pages.length - 1]
    ];
  }
  if (currentPage === pages[pages.length - 3]) {
    showedPages = [
      1,
      "...",
      currentPage - 1,
      currentPage,
      currentPage + 1,
      pages[pages.length - 1]
    ];
  }
  if (currentPage === pages[pages.length - 2]) {
    showedPages = [1, "...", currentPage - 1, currentPage, currentPage + 1];
  }
  if (currentPage === pages[pages.length - 1]) {
    showedPages = [1, "...", currentPage - 1, currentPage];
  }

  const handlePageChange = p => {
    onUsersPageChange(p);
    fetchUsers(p);
  };

  return (
    <div className="pagination">
      {showedPages.map(p => (
        <span
          key={p}
          className={
            currentPage === p ? "pagination__pageActive" : "pagination__page"
          }
          onClick={
            p === "..."
              ? null
              : () => {
                  handlePageChange(p);
                }
          }
        >
          {p}
        </span>
      ))}
    </div>
  );
};

export default Pagination;
