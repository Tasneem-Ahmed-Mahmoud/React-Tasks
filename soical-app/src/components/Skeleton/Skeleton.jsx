
import { Skeleton as SkeletonUI, Card } from "@heroui/react";
export default function Skeleton() {
    return (
        <>


            <Card className=" space-y-5 p-4" radius="lg">

               <div className="flex items-center gap-2">
                 <div>
                    <SkeletonUI className="flex rounded-full w-12 h-12 shrink-0" />
                </div>
                <div className="w-full flex flex-col gap-2">
                    <SkeletonUI className="h-3 w-3/5 rounded-lg" />
                    <SkeletonUI className="h-3 w-4/5 rounded-lg" />
                </div>
               </div>
                <SkeletonUI className="rounded-lg">
                    <div className="h-24 rounded-lg bg-default-300" />
                </SkeletonUI>
                <div className="space-y-3">
                    <SkeletonUI className="w-3/5 rounded-lg">
                        <div className="h-3 w-3/5 rounded-lg bg-default-200" />
                    </SkeletonUI>
                    <SkeletonUI className="w-4/5 rounded-lg">
                        <div className="h-3 w-4/5 rounded-lg bg-default-200" />
                    </SkeletonUI>
                    <SkeletonUI className="w-2/5 rounded-lg">
                        <div className="h-3 w-2/5 rounded-lg bg-default-300" />
                    </SkeletonUI>
                </div>
            </Card>


        </>
    )
}
