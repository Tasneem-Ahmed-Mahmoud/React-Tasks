import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
    Checkbox,
    Input,
    Link,
    Textarea,
    Divider
} from "@heroui/react";
import { useRef, useState } from "react";
import { IoMdPhotos } from "react-icons/io";
import { file } from "zod";




export default function CreatePostModal({ isOpen, onOpenChange }) {
    const fileInput = useRef(null);
    const [selectedFile, setSelectedFile] = useState(null);
    function openFileInput() {
        fileInput.current.click();
        console.log(fileInput.current);
    }
    function getFile() {
        console.log(fileInput.current.files);
        const file = fileInput.current.files[0];
        console.log(file);
        setSelectedFile(URL.createObjectURL(file));
    }
    return (
        <>
            {/* <Button color="primary" onPress={onOpen}>
        Open Modal
      </Button> */}
            <Modal isOpen={isOpen} placement="top-center" onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">
                                <h5>Create Post</h5>
                            </ModalHeader>

                            <ModalBody className="p-4">
                                <Divider />
                                <Textarea minRows={`${!selectedFile ? '50' : ''}`} placeholder="what is in your mind?" />
                                {selectedFile && <img src={selectedFile} alt="Post" className="w-full h-50" />}
                                <Divider />

                                <div className=" flex gap-2 items-center">
                                    <span className="font-semibold">Add to your post</span>
                                    <IoMdPhotos onClick={openFileInput} className="text-2xl text-green-500 cursor-pointer" />
                                    <input onChange={getFile} ref={fileInput} type="file" className="hidden" />

                                </div>

                            </ModalBody>
                            <Divider />
                            <ModalFooter>

                                <Button color="primary" className="w-full">
                                    Post
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
