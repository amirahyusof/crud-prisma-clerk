import { Button } from "@/components/ui/button";
import { PlusIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export function CreateTask(){
  return(
    <div>
      <Button asChild>
        <Link href="/activities/create">
          <PlusIcon />
          <span className="hidden md:block">Create Invoice</span>{' '} 
          Create New Task
        </Link>
      </Button>
    </div>
  )
}

export function ViewButton(){
  return(
    <div>
      <Button asChild>
        <Link href="">View</Link>
      </Button>
    </div>
  )
}

export function EditButton(){
  return(
    <div>
      <Button asChild>
        <Link href="">Edit</Link>
      </Button>
    </div>
  )
}

export function DeleteButton(){
  return(
    <div>
      <Button variant="destructive" asChild>
        <Link href="">Delete</Link>
      </Button>
    </div>
  )
}