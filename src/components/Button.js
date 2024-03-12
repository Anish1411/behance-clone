import { useState, Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { MdArrowDropDown } from 'react-icons/md';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Button({ onCategoryChange }) {
    const [selectedOption, setSelectedOption] = useState('All');

    const handleMenuClose = () => {
        console.log('Selected option:', selectedOption);
    };

    const handleMenuItemClick = (option) => {
        console.log(option);
        setSelectedOption(option);
        onCategoryChange(option)
        console.log(option);
    };

    return (
        <Menu as="div" className="relative inline-block text-left" onClose={handleMenuClose}>
            <div>
                <Menu.Button className="inline-flex  justify-center gap-x-1.5 rounded-xl bg-white px-5 py-3 text-lg font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-200">
                    {selectedOption}
                    <MdArrowDropDown className="-mr-1 h-6 w-5 text-gray-400" aria-hidden="true" />
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg  ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        {['All', 'Recommended', 'Curated', 'Most Appreciated', 'Most Viewed', 'Most Discussed', 'Most Recent'].map((option) => (
                            <Menu.Item key={option}>
                                {({ active }) => (
                                    <button
                                        type="button"
                                        onClick={() => handleMenuItemClick(option)}
                                        className={classNames(
                                            active ? 'bg-[#0057ff] text-gray-900' : 'text-gray-700',
                                            'block w-full px-4 py-2 text-left text-sm'
                                        )}
                                    >
                                        {option}
                                    </button>
                                )}
                            </Menu.Item>
                        ))}
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}