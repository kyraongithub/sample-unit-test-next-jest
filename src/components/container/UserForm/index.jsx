import React, { useState } from 'react';
import Input from '@/components/ui/Input';
import Typography from '@/components/ui/Typography';
import Button from '@/components/ui/Button';

const UserForm = () => {
  const [name, setname] = useState('');
  const [email, setemail] = useState('');

  const onUserSubmit = () => {
    console.log('User submitted');
  };

  return (
    <div>
      <Typography type="h1">Add a user</Typography>
      <Input
        value={name}
        onChange={(e) => setname(e.target.value)}
        label="Name"
        type="text"
        placeholder="Enter name"
      />
      <br />
      <br />
      <Input
        value={email}
        onChange={(e) => setemail(e.target.value)}
        label="Email"
        type="text"
        placeholder="Enter email"
      />
      <br />
      <br />
      <Button onClick={onUserSubmit}>Submit</Button>
    </div>
  );
};

export default UserForm;
