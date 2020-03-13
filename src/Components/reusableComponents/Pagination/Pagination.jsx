import React from "react";

const  Pagination = (props) => {
    const pages = [1, 2, 3, 4, 5, 6, 7];
    const handlePageChange = p => {
        props.onUsersPageChange(p);
        props.fetchUsers(p);
    };
    return (
        <div className="pagination">
            {pages.map(p => (
                <span
                    key={p}
                    className={
                        props.currentPage === p ? "pagination__pageActive" : "pagination__page"
                    }
                    onClick={() => {
                        handlePageChange(p);
                    }}
                >
            {p}
          </span>
            ))}
        </div>
    )
};

export default Pagination;