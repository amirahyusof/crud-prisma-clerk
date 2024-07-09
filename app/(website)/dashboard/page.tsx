import React from 'react';
import { currentUser } from '@clerk/nextjs/server';
import prisma from '@/lib/prisma';


const Dashboard = async () => {
  const user = await currentUser()
  const creator = user?.firstName || ''
  const categories = await prisma.category.findMany({
    where: {
      creator: creator
    }
  });

  return (
   <section className="p-24 space-y-6 min-h-screen flex flex-col">
    <div>
      Add Category
    </div>
    {categories && categories.length > 0 ? (
      <>
      </>
    ) : (
      <>
        <div>
          Add a category today!
        </div>
      </>
    )}
   </section>
  )
}

export default Dashboard