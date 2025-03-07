'use server';

import { prisma } from '@/lib/prisma';
import { Snipets } from '@prisma/client';
import { redirect } from 'next/navigation';

export const createSnipet = async (
  prevState: { message: string },
  data: FormData
) => {
  try {
    const title = data.get('title') as string;
    const code = data.get('code') as string;

    if (typeof title !== 'string' || !title)
      throw new Error('title is required');
    if (typeof code !== 'string' || !code) throw new Error('code is required');

    await prisma.snipets.create({
      data: {
        title,
        code,
      },
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : 'An unknown error occurred';
    return { message };
  }

  redirect('/');
};

export const saveSnipet = async (snipet: Snipets) => {
  await prisma.snipets.update({
    where: {
      id: snipet.id,
    },
    data: {
      title: snipet.title,
      code: snipet.code,
    },
  });

  redirect(`/snipets/${snipet.id}`);
};

export const deleteSnipet = async (id: string) => {
  await prisma.snipets.delete({
    where: {
      id,
    },
  });

  redirect(`/`);
};
