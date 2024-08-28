import { Button } from "@/components/ui/button";
import { PlusIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export function CreateTask(){
  return(
    <div>
      <Button asChild>
        <Link href="">
          <PlusIcon /> 
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
        <Link href="">Update</Link>
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
      <Button asChild>
        <Link href="">Delete</Link>
      </Button>
    </div>
  )
}