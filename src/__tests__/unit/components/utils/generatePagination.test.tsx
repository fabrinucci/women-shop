import { describe, expect, test } from 'vitest';
import { generatePagination } from '@/utils';

describe('generatePagination', () => {
  test('Should return all pages when totalPages <= 7', () => {
    expect(generatePagination({ totalPages: 5, currentPage: 3 })).toEqual([
      1, 2, 3, 4, 5,
    ]);
    expect(generatePagination({ totalPages: 7, currentPage: 1 })).toEqual([
      1, 2, 3, 4, 5, 6, 7,
    ]);
  });

  test('Should return what is expected when currentPage <= 3', () => {
    expect(generatePagination({ totalPages: 10, currentPage: 3 })).toEqual([
      1,
      2,
      3,
      4,
      '...',
      9,
      10,
    ]);

    expect(generatePagination({ totalPages: 15, currentPage: 1 })).toEqual([
      1,
      2,
      3,
      4,
      '...',
      14,
      15,
    ]);
  });

  test('Should return what is expected when currentPage >= (totalPages - 2)', () => {
    expect(generatePagination({ totalPages: 20, currentPage: 18 })).toEqual([
      1,
      2,
      '...',
      17,
      18,
      19,
      20,
    ]);

    expect(generatePagination({ totalPages: 20, currentPage: 19 })).toEqual([
      1,
      2,
      '...',
      18,
      19,
      20,
    ]);

    expect(generatePagination({ totalPages: 20, currentPage: 20 })).toEqual([
      1,
      2,
      '...',
      18,
      19,
      20,
    ]);
  });

  test('Should return intermediate pages when currentPage is in the middle', () => {
    expect(generatePagination({ totalPages: 10, currentPage: 5 })).toEqual([
      1,
      2,
      '...',
      5,
      '...',
      9,
      10,
    ]);
    expect(generatePagination({ totalPages: 20, currentPage: 12 })).toEqual([
      1,
      2,
      '...',
      12,
      '...',
      19,
      20,
    ]);
  });
});
