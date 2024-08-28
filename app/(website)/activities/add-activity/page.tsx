import { Card } from "@/components/ui/card";
import { CreateActivity } from "./add-form";

export default function NewTask(){
  return(
    <section>
      <div>
        <h1 className="text-2xl">Create Activity</h1>
        <p className="font-medium mb-6">Fill in the details to plan your activity</p>
      </div>

      <Card className="mt-4 p-4 border rounded-lg">
        <CreateActivity />
      </Card>
    </section>
  )
}