'use client';

import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import CloseIcon from '@mui/icons-material/Close';

export default function CommonModal({
    mainContent,
    showButtons,
    buttonComponent,
    show,
    setShow,
}) {
    return (
        <Transition.Root show={show} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={setShow}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>
                <div className="fixed inset-0 flex items-center justify-center overflow-hidden">
                    <Transition.Child
                        as={Fragment}
                        enter="transform transition ease-in-out duration-500"
                        enterFrom="translate-x-full"
                        enterTo="translate-x-0"
                        leave="transform transition ease-in-out duration-500"
                        leaveFrom="translate-x-0"
                        leaveTo="translate-x-full"
                    >
                        <div className="w-screen max-w-md bg-white shadow-xl">
                            <div className="flex flex-col h-full">
                                <div className="px-4 py-6 sm:px-6">
                                    <div className="flex items-start justify-between">
                                        <Dialog.Title>
                                            Votre panier
                                        </Dialog.Title>
                                        <button
                                            onClick={() => setShow(false)}
                                            className="cursor-pointer"
                                        >
                                            <CloseIcon className="text-black" aria-hidden="true" />
                                        </button>
                                    </div>
                                    <div className="mt-20">{mainContent}</div>
                                </div>
                                {showButtons && (
                                    <div className="border-none px-4 py-6 sm:px-6">
                                        {buttonComponent}
                                    </div>
                                )}
                            </div>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    );
}