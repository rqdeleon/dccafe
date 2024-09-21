import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { siteData } from '@/app/lib/site-data';


import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { SmartDatetimeInput } from '@/components/ui/smart-calendar';




const Signin = () => {
    let [isOpen, setIsOpen] = useState(false)

    const closeModal = () => {
        setIsOpen(false)
    }

    const openModal = () => {
        setIsOpen(true)
    }
    
    const [date, setDate] = useState(new Date())

    return (
      <>
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <div className='hidden md:block'>
            <button type="button" className='flex justify-end text-xl font-medium bg-bgpink text-pink py-4 px-4 lg:px-8 navbutton rounded-full hover:text-white hover:bg-pink' onClick={openModal}>
                Book a table
            </button>
          </div>
        </div>

        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                      <div className="w-full max-w-md space-y-8">
                        <div>
                          <div className="flex items-center justify-center">
                            <Image src="/images/Logo/dccafe.png" alt="logo" width={46} height={46} />
                            <Link href="/" className='text-2xl font-semibold text-black ml-4'>
                                {siteData.name}
                            </Link>
                          </div>
                          <h2 className="mt-10 text-center text-3xl font-bold tracking-tight text-lightgrey">
                              Reserve your table
                          </h2>
                        </div>
                        <form className="grid w-full items-start gap-6">
                          <div className="grid gap-3">
                            <Label htmlFor="email">Email or Phone</Label>
                            <Input id="email" type="text" placeholder="e.g. name@mail.com or 09568746321" />
                          </div>
                          <div className="grid gap-3">
                            <Label htmlFor="temperature">Number of person</Label>
                            <Input id="temperature" type="number" placeholder="2" />
                          </div>
                          <div className="grid gap-3">
                            <div className="grid gap-3">
                            <Label htmlFor="top-p">Date</Label>
                            <SmartDatetimeInput
                              name="datetime"
                              value={date}
                              onValueChange={(e) => setDate(e)}
                              placeholder="e.g. tomorrow at 3pm"
                            />

                            </div>
                          </div>

                          <div>
                              <button
                                  type="submit"
                                  className="group relative flex w-full justify-center rounded-md border border-transparent bg-pink py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                              >
                                  Send
                              </button>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="mt-4 flex justify-end">
                        <button
                            type="button"
                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            onClick={closeModal}
                        >
                            Got it, thanks!
                        </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </>
    )
}

export default Signin;
