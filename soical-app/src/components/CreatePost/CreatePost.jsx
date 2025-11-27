import { Card, CardBody, CardFooter, Divider, useDisclosure, Input, Skeleton } from "@heroui/react";
import CreatePostModal from '../CreatePost/CreatePostModal';
import { useContext} from 'react';
import { userContext } from '../../context/userContext';

export default function CreatePost({ allPosts }) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const { user, isLoading } = useContext(userContext)


    return (
        <>
            <CreatePostModal callback={allPosts} isOpen={isOpen} onOpenChange={onOpenChange} />
            <Card className="p-3">

                <CardBody >
                    {
                        isLoading ?
                            <div className="flex items-center gap-2">
                                <div>
                                    <Skeleton className="flex rounded-full w-12 h-12 shrink-0" />
                                </div>
                                <div className="w-full flex flex-col gap-2">
                                    <Skeleton className="h-3 w-3/5 rounded-lg" />
                                    <Skeleton className="h-3 w-4/5 rounded-lg" />
                                </div>
                            </div> :
                            <div className="flex gap-2 align-center">
                                <div className="size-12 rounded-full overflow-hidden">

                                    <img src={user?.photo} alt={user?.name} className="w-12 h-12 rounded-full object-cover" />

                                </div>
                                <Input onClick={onOpen} isReadOnly
                                    placeholder={`what is in your mind? ${user?.name || ''}`} type="text" />
                            </div>
                    }
                </CardBody>
                <Divider />
                <CardFooter className="flex gap-3">


                </CardFooter>
            </Card>

        </>
    );
}
