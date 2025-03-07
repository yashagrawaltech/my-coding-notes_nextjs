import EditSnipetForm from '@/components/EditSnipetForm';
import { prisma } from '@/lib/prisma';
import { notFound } from 'next/navigation';

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;

  const snipet = await prisma.snipets.findUnique({
    where: {
      id,
    },
  });

  if (!snipet) return notFound();

  return (
    <div className="w-full h-full px-24 py-8">
      <h1 className="text-2xl uppercase font-bold">Edit Code</h1>
      <EditSnipetForm snipet={snipet} />
    </div>
  );
};

export default page;
