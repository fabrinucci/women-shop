interface Props {
  totalPages: number;
  currentPage: number;
}

export const generatePagination = ({ totalPages, currentPage }: Props) => {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  if (currentPage <= 3) {
    return [1, 2, 3, 4, '...', totalPages - 1, totalPages];
  }

  if (currentPage >= totalPages - 2) {
    if (currentPage === totalPages - 2) {
      return [
        1,
        2,
        '...',
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages,
      ];
    }
    return [1, 2, '...', totalPages - 2, totalPages - 1, totalPages];
  }

  return [1, 2, '...', currentPage, '...', totalPages - 1, totalPages];
};
