import { Fragment } from "react";
import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const navLinks = [
  {
    name: "Home",
    to: "carousel",
    duration: 400,
  },
  {
    name: "Poson Zone",
    to: "poson-zone",
    duration: 400,
  },
  {
    name: "Our Mentors",
    to: "mentors",
    duration: 400,
  },
  { name: "Our Team", to: "committee", duration: 400 },
  {
    name: "Our Work",
    to: "our-work",
    duration: 400,
  },
];

const Header = () => {
  return (
    <Popover className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-0 py-3 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <RouterLink
              to="/"
              className="text-2xl font-medium text-black hover:text-gray-900 list-none"
            >
              SLIIT Interactive Media
            </RouterLink>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden md:flex space-x-7">
            {navLinks.map((item) => (
              <li
                key={item.name}
                className="text-base font-normal text-gray-500 hover:text-gray-900 mt-1 list-none cursor-pointer"
              >
                <Link
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={item.duration}
                  delay={100}
                  activeClass="font-medium text-black"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </Popover.Group>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {navLinks.map((item) => (
                    <li
                      key={item.name}
                      to={item.to}
                      // eslint-disable-next-line react/no-unknown-property
                      duration={500}
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    >
                      <span className="ml-3 text-base font-medium text-gray-700 cursor-pointer">
                        <Link
                          to={item.to}
                          spy={true}
                          smooth={true}
                          offset={50}
                          duration={500}
                          delay={100}
                        >
                          {item.name}
                        </Link>
                      </span>
                    </li>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default Header;
