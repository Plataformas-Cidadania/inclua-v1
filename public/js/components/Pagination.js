import React from 'react';
const MAX_ITEMS = 9;
const MAX_LEFT = (MAX_ITEMS - 1) / 2;

const Pagination = ({
  limit,
  total,
  offset,
  setOffset
}) => {
  const current = offset ? offset / limit + 1 : 1;
  const pages = Math.ceil(total / limit);
  const first = Math.max(current - MAX_LEFT, 1);

  function onPageChange(page) {
    setOffset((page - 1) * limit);
  }

  return /*#__PURE__*/React.createElement("ul", {
    className: "pagination"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("button", {
    onClick: () => onPageChange(current - 1),
    disabled: current === 1
  }, "Anterior")), Array.from({
    length: Math.min(MAX_ITEMS, pages)
  }).map((_, index) => index + first).map(page => /*#__PURE__*/React.createElement("li", {
    key: page
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onPageChange(page),
    className: page === current ? 'pagination__item--active' : null
  }, page))), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("button", {
    onClick: () => onPageChange(current + 1),
    disabled: current === pages
  }, "Pr\xF3xima")));
};

export default Pagination;