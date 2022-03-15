import { useContext } from "react";
import { Tab } from "@headlessui/react";
import { UserContext } from "../context/UserContext";

export default function MyAccount() {
  const { user } = useContext(UserContext);

  return (
    <section className="bg-slate-100 py-12 px-4 font-cabinet min-h-screen">
      <div className="bg-white sm:max-w-2xl mx-auto p-10 rounded-xl">
        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-extrabold">My Account</h1>
          <div className="flex items-center">
            <img
              className="h-16 w-16 rounded-full mr-4"
              src={user.photoURL}
              alt={`User avatar for ${user.displayName}`}
            />
          </div>
        </div>
        <hr className="my-6" />
        <p className="text-xl font-bold mb-4">Saved Jobs:</p>
        <Tab.Group>
          <Tab.List className="flex p-1 space-x-1 bg-green-200 rounded-xl">
            <Tab className="w-full py-2.5 text-sm leading-5 font-medium text-blue-700 rounded-lg focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60">Saved</Tab>
            <Tab className="w-full py-2.5 text-sm leading-5 font-medium text-blue-700 rounded-lg focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60">Applied To</Tab>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>Content 1</Tab.Panel>
            <Tab.Panel>Content 2</Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </section>
  );
}
