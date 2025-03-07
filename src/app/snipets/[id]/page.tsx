import { deleteSnipet } from '@/actions';
import { Button } from '@/components/ui/button';
import { prisma } from '@/lib/prisma';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;

  const snipet = await prisma.snipets.findUnique({
    where: {
      id,
    },
  });

  if (!snipet) return notFound();

  const deleteSnipetAction = deleteSnipet.bind(null, snipet.id);

  return (
    <div className="w-full h-full px-24 py-8">
      <h1 className="text-2xl uppercase font-bold">{snipet.title}</h1>
      <div className="mt-4 flex flex-col gap-4">
        <pre className="w-full mt-4">
          <code className="bg-gray-800 w-full p-4 inline-block">
            {snipet.code}
          </code>
        </pre>
        <div className="flex items-center gap-2 ml-auto">
          <Button className="bg-green-700 hover:bg-green-800 ">
            <Link href={`/snipets/${snipet.id}/edit`}>Edit</Link>
          </Button>
          <form action={deleteSnipetAction}>
            <Button variant={'destructive'}>Delete</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
