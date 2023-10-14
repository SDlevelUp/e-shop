import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

export default function CommonModal({
    modalTitle,
    mainContent,
    showButtons,
    buttonComponent,
    show,
    setShow,
    showModalTitle
}) {
    return (
        <Transition.Root show={show} as={Fragment}>
            <Dialog as="div" className={"relative z-10"} onClose={setShow}>
                <Transition.Child
                    as={Fragment}
                    enter="transform transition-transform ease-in-out duration-500"
                    enterFrom="translate-x-2 opacity-0"
                    enterTo="translate-x-0 opacity-100"
                    leave="transform transition-transform ease-in-out duration-500"
                    leaveFrom="translate-x-0 opacity-100"
                    leaveTo="translate-x-2 opacity-0"
                >
                    <div className="fixed inset-0 flex items-center justify-center transform origin-center">
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity sm:bg-opacity-50 md:bg-opacity-25 lg:bg-opacity-10 xl:bg-opacity-5" />
                    </div>
                </Transition.Child>
                <div className="fixed inset-0 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="fixed inset-y-0 right-0 flex max-w-full pl-10">
                            <Transition.Child
                                as={Fragment}
                                enter="transform transition-transform ease-in-out duration-500"
                                enterFrom="translate-x-full opacity-0"
                                enterTo="translate-x-0 opacity-100"
                                leave="transform transition-transform ease-in-out duration-500"
                                leaveFrom="translate-x-0 opacity-100"
                                leaveTo="translate-x-full opacity-0"
                            >
                                <Dialog.Panel className={"w-screen max-w-md"}>
                                    <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                                        <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6 ">
                                            {
                                                showModalTitle ? <div className="flex items-start justify-between flex-col">
                                                    <Dialog.Title>{modalTitle}</Dialog.Title>
                                                </div> : null
                                            }
                                            <div className="mt-28">{mainContent}</div>
                                        </div>
                                        {showButtons ? (
                                            <div className="border-none px-4 py-6 sm:px-6">
                                                {buttonComponent}
                                            </div>
                                        ) : null}
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    );
}