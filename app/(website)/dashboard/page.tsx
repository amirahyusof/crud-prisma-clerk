import React from 'react';
import { UserButton } from '@clerk/nextjs';

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <UserButton />
      <p>Hello World</p>
    </div>
  )
}

export default Dashboard