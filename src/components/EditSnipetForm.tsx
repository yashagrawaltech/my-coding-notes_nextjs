'use client';

import React, { useState } from 'react';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { CodeiumEditor } from '@codeium/react-code-editor';
import { Button } from './ui/button';
import { saveSnipet } from '@/actions';

const EditSnipetForm = ({
  snipet,
}: {
  snipet: { title: string; code: string; id: string };
}) => {
  const [title, setTitle] = useState(snipet.title);
  const [code, setCode] = useState(snipet.code);

  const handleCodeChange = (newCode: string | undefined) => {
    if (newCode !== undefined) {
      setCode(newCode);
    }
  };

  const saveSnipetAction = saveSnipet.bind(null, {
    id: snipet.id,
    title,
    code,
  });

  return (
    <form action={saveSnipetAction} className="mt-4 flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <Label htmlFor="title">Title</Label>
        <Input
          id="title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-2">
        <CodeiumEditor
          value={code}
          onChange={handleCodeChange}
          language="javascript"
          theme="vs-dark"
        />
      </div>
      <div className="w-full flex items-center gap-2">
        <Button className="bg-green-700 hover:bg-green-800  ml-auto">
          Save
        </Button>
      </div>
    </form>
  );
};

export default EditSnipetForm;
