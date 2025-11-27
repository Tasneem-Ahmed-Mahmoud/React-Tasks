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
    Divider,
    form
} from "@heroui/react";
import { useRef, useState } from "react";
import { IoMdPhotos } from "react-icons/io";
import { file } from "zod";
import { createPost, updatePost } from "../../services/postServices";
import { ToastContainer, toast } from 'react-toastify';
import { ca } from "zod/v4/locales";




export default function CreatePostModal({ isOpen, onOpenChange, callback, post }) {
    const fileInput = useRef(null);
    const bodyInput = useRef(null);
    const [selectedFile, setSelectedFile] = useState(post?.image || null);
    const [formDataFile, setFormDataFile] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    function openFileInput() {
        fileInput.current.click();
        // console.log(fileInput.current);
    }
    function getFile() {
        //console.log(fileInput.current.files);
        const file = fileInput.current.files[0];
        setFormDataFile(file);
        //console.log(file);
        setSelectedFile(URL.createObjectURL(file));
    }

    // edit or create
    async function handlePost() {
        setIsLoading(true);
        try {
            const formData = new FormData();
            formData.append("body", bodyInput.current.value || " ");

            if (formDataFile) {
                formData.append("image", formDataFile);
            }

            let response;

            if (post) {
                response = await updatePost(post._id, formData);
            } else {
                response = await createPost(formData);
            }

            toast.success(response.data.message);
            onOpenChange(false);
            setFormDataFile(null);
            bodyInput.current.value = "";
            callback();

            console.log(response);
        } catch (error) {
            console.log(error);
            // toast.error(error.response.data.message);
        } finally {
            setIsLoading(false);
        }
    }


    return (
        <>
            {/* <Button color="primary" onPress={onOpen}>
        Open Modal
      </Button> */}
            <Modal isOpen={isOpen} placement="top-center" onOpenChange={() => {
                onOpenChange(false);
                //selectedFile = null;
                if (!post) {
                    setFormDataFile(null);
                }

                // bodyInput.current.value = "";
            }}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">
                                <h5>{post ? 'Edit Post' : 'Create Post'}</h5>
                            </ModalHeader>

                            <ModalBody className="p-4">
                                <Divider />
                                <Textarea defaultValue={post?.body || ''} ref={bodyInput} minRows={`${!selectedFile ? '50' : ''}`} placeholder="what is in your mind?" />
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

                                <Button isLoading={isLoading} onPress={handlePost} color="primary" className="w-full">
                                    {post ? 'Edit' : 'Create'}
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
