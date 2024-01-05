import { Disclosure, Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import classNames from "@/components/modules/classNames";
import { navigation } from "@/app/dashboard/routes/navigation";
import { userNavigation } from "@/app/dashboard/routes/userNavigation";
import { useUserStore } from "@/zustand/useUserStore";

export default function DashboardLayout({ current, handleSave }) {
  const user = useUserStore((state) => state.user);
  const logout = useUserStore((state) => state.logout);

  return (
    <Disclosure
      as="nav"
      className="sticky top-0 z-50 bg-gray-800 border-b border-slate-600"
    >
      {({ open }) => (
        <>
          <div className="px-4 py-2 sm:px-6 lg:px-8">
            <div className="flex flex-row items-center justify-end md:justify-between">
              <div className="hidden md:w-4/5 lg:w-full md:overflow-y-hidden md:overflow-x-auto md:space-x-4 md:ml-10 md:items-baseline md:flex md:flex-row md:justify-start">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    className={classNames(
                      current === item.name
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "rounded-md flex flex-row items-center justify-center "
                    )}
                    href={item.href}
                  >
                    <span
                      className="flex flex-row items-center justify-center p-4 text-sm font-medium text-center"
                      onClick={() => handleSave(item.name)}
                    >
                      {item.name}
                    </span>
                  </Link>
                ))}
              </div>

              {/* Profile dropdown */}
              <Menu as="div" className="hidden rounded-full md:block">
                <Menu.Button className="flex flex-row items-center max-w-xs text-sm bg-gray-800 rounded-full">
                  <span className="sr-only">Open user menu</span>
                  <div className="flex flex-row items-center justify-center w-10 h-10 text-white border border-gray-700 rounded-full">
                    {`${user?.name?.split(" ")[0][0]}` +
                      `${user?.name?.split(" ")[1][0]}`}
                  </div>
                </Menu.Button>

                <Menu.Items className="absolute right-0 z-10 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  {userNavigation.map((item) => (
                    <Menu.Item key={item.name}>
                      {({ active }) => (
                        <Link
                          href={item.href}
                          className={classNames(
                            active ? "bg-gray-100" : "",
                            "block px-4 py-2 text-sm text-gray-700"
                          )}
                        >
                          {item.name}
                        </Link>
                      )}
                    </Menu.Item>
                  ))}
                  <Menu.Button
                    onClick={() => {
                      logout();
                    }}
                    className="flex flex-row items-center justify-start w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Sign out
                  </Menu.Button>
                </Menu.Items>
              </Menu>
              <div className="flex p-2 -mr-2 md:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-gray-800 rounded-md hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block w-6 h-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block w-6 h-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>
          <Disclosure.Panel className=" md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  <span onClick={() => handleSave(item.name)}>{item.name}</span>
                </Link>
              ))}
            </div>
            <div className="pt-4 pb-3 border-t border-gray-700">
              <div className="flex items-center px-5">
                <div className="flex flex-row items-center justify-center flex-shrink-0 w-10 h-10 text-white border border-gray-700 rounded-full ">
                  {`${user?.name?.split(" ")[0][0]}` +
                    `${user?.name?.split(" ")[1][0]}`}
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium leading-none text-white">
                    {user?.name}
                  </div>
                  <div className="text-sm font-medium leading-none text-gray-400">
                    {user?.email}
                  </div>
                </div>
              </div>
              <div className="px-2 mt-3 space-y-1">
                {userNavigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className="block px-3 py-2 text-base font-medium text-gray-400 rounded-md hover:bg-gray-700 hover:text-white"
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
                <Disclosure.Button
                  onClick={() => {
                    logout();
                  }}
                  className="block px-3 py-2 text-base font-medium text-gray-400 rounded-md hover:bg-gray-700 hover:text-white"
                >
                  Sign out
                </Disclosure.Button>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
