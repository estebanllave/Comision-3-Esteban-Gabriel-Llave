import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
// para hacer el signout importo
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "Post", href: "/post", current: false },
  { name: "New Post", href: "/add-post", current: false },
  { name: "Profile", href: "/profile", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavbarPrivate() {
  const {signout } = useAuth();

  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                {/* <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-8 w-auto"
                    src=""
                    alt="Your Company"
                  />
                </div> */}
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "rounded-md px-3 py-2 text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* <button
                  type="button"
                  className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button> */}

                {/* Profile dropdown */}
                {/* <h3 className="text-white">
                  Binevenido: {JSON.stringify(user.username)}
                </h3> */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="data:image/jpeg;base64,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"
                        alt=""
                      />
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
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            onClick={() => signout()}
                            to="/login"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Sign out
                          </Link>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
