'use client';
import { createSnipet } from '@/actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useActionState } from 'react';
import ErrorComponent from './error';

const CreateSnipetComponent = () => {
  const [data, action] = useActionState(createSnipet, { message: '' });

  return (
    <div className="w-full h-full px-24 py-8">
      <h1 className="text-2xl uppercase font-bold">Create Snipet</h1>
      <form className="mt-4 flex flex-col gap-4" action={action}>
        {data.message ? (
          <ErrorComponent error={new Error(data.message)} />
        ) : null}

        <div className="flex flex-col gap-2">
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            name="title"
            placeholder="write your title here..."
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="code">Code</Label>
          <Textarea
            id="code"
            name="code"
            placeholder="write your code here..."
          />
        </div>
        <Button className="bg-green-700 hover:bg-green-800 ml-auto">Add</Button>
      </form>
    </div>
  );
};

export default CreateSnipetComponent;
