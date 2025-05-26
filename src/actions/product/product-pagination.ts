'use server';

import { prisma } from '@/lib/prisma';

interface PaginationOptions {
  page?: number;
  limit?: number;
  categoryName?: string;
}

export const getPaginatedProducts = async ({
  page = 1,
  limit = 12,
  categoryName,
}: PaginationOptions) => {
  if (isNaN(Number(page))) page = 1;
  if (page < 1) page = 1;

  try {
    let whereCondition = {};

    if (categoryName) {
      whereCondition = {
        category: {
          name: {
            equals: categoryName,
            mode: 'insensitive',
          },
        },
      };
    }

    const products = await prisma.product.findMany({
      take: limit,
      skip: (page - 1) * limit,
      include: {
        ProductImage: {
          take: 2,
          select: {
            url: true,
          },
        },
      },
      where: whereCondition,
    });

    const totalCount = await prisma.product.count({
      where: whereCondition,
    });

    const totalPages = Math.ceil(totalCount / limit);

    return {
      currentPage: page,
      totalPages,
      products: products.map((product) => {
        const { ProductImage, ...rest } = product;
        return {
          ...rest,
          images: ProductImage.map((img) => img.url),
        };
      }),
    };
  } catch (error) {
    throw new Error('Can not execute' + error);
  }
};
