import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import Button from "../Button/Button";

const CmrSettings = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col px-3 py-4">
        <div className="flex items-center">
          <span>Settings</span>{" "}
          <span className="px-2">
            <IoIosArrowForward />
          </span>
          <span>CMR</span>
        </div>
        <div className="py-2 border-b border-gray-300 mt-7">General</div>
        <div className="py-2 border-b border-gray-300 mt-7">
          <span className="font-bold">Default settings</span>
        </div>
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Name company
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              Nazwa firmy
            </dd>
          </div>

          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Second name company
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              Nazwa firmy
            </dd>
          </div>

          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Street
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              ul. Ulica
            </dd>
          </div>

          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Number
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              1
            </dd>
          </div>
          <div
            className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Zipcode
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              99-999
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              City
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              City
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Country
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              Poland
            </dd>
          </div>
        </dl>
        <div className="flex justify-between py-8 border-b border-gray-300">
          <span>Branding</span>
          <div>
            <span>Change logo</span>
          </div>
        </div>
        <div className="py-2 border-b border-gray-300 mt-7">
          <span className="font-bold">Carriers</span>
        </div>
        <div className="py-2 border-b border-gray-300">
          <form>
            <div className="flex justify-between">
              <label>
                Carrier Name:
                <input type="text" name="name" />
              </label>
              <Button bg="bg-gray-700" type="submit">
                Add Carrier
              </Button>
            </div>
          </form>
        </div>
        <div className="py-2 border-b border-gray-300">
          <ul>
            {/* Replace this with your list of carriers */}
            <li className="flex justify-between py-2">
              <span>DHL</span>
              <Button>Edit</Button>
            </li>
            <li className="flex justify-between py-2">
              <span>ITALY</span>
              <Button>Edit</Button>
            </li>
            <li className="flex justify-between py-2">
              <span>DHL</span>
              <Button>Edit</Button>
            </li>
            <li className="flex justify-between py-2">
              <span>DHL</span>
              <Button>Edit</Button>
            </li>
            <li className="flex justify-between py-2">
              <span>DHL</span>
              <Button>Edit</Button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CmrSettings;
