import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { prisma } from '@/lib/prisma';
import Link from 'next/link';

export default async function Home() {
  const snipets = await prisma.snipets.findMany();

  return (
    <>
      <header className="sticky top-0 left-0 w-full bg-gray-900 px-24 py-4">
        My Coding Notes - Next.js App
      </header>
      <main className="w-full h-full px-24 py-8">
        <div className="w-full flex items-center justify-between">
          <h4 className="text-2xl uppercase font-bold">Snipets</h4>{' '}
          <Button className="bg-green-700 hover:bg-green-800">
            <Link href={'/snipets/new'}>New</Link>
          </Button>
        </div>

        <div className="w-full h-full mt-4 flex flex-col gap-4">
          {snipets.length > 0 &&
            snipets.map((s) => {
              return (
                <Card key={s.id} className="bg-transparent text-white">
                  <CardHeader>
                    <CardTitle className="text-2xl">{s.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{s.code}</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant={'link'} className="ml-auto text-white">
                      <Link href={`/snipets/${s.id}`}>View</Link>
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}
        </div>
      </main>
    </>
  );
}
