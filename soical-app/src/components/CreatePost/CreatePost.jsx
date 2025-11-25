import { Card,  CardBody, CardFooter, Divider, useDisclosure, Input } from "@heroui/react";
import CreatePostModal from '../CreatePost/CreatePostModal';

export default function CreatePost() {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    return (
        <>

            <CreatePostModal isOpen={isOpen} onOpenChange={onOpenChange} />
            <Card className="p-3">

                <CardBody >
                    <div className="flex gap-2 align-center">
                        <div className="size-12 rounded-full overflow-hidden">
                            <img className="" src="https://th.bing.com/th/id/OIP.R87PbOkdc695AAZ-_qrLYwHaHk?w=206&h=210&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" alt="" />
                        </div>
                        <Input onClick={onOpen} isReadOnly placeholder="what is in your mind?" type="text" />
                    </div>
                </CardBody>
                <Divider />
                <CardFooter className="flex gap-3">


                </CardFooter>
            </Card>

        </>
    );
}
