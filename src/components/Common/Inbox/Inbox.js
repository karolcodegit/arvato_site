import React from "react";
import Box from "../../Box/Box";
import Title from "../Title/Title";
import { RightIcon } from "../Icons/Icons";

const Inbox = () => {
  const people = [
    {
      name: "Jane Cooper",
      email: "jane@jndjks.com",
      role: "Owner",
      lastSeen: "6h ago",
      lastSeenDateTime: "2021-01-27T16:35:00Z",
    },
    {
        name: "John Doe",
        email: "john@doe.com",
        role: "Admin",
        lastSeen: "2h ago",
        lastSeenDateTime: "2022-01-27T18:35:00Z",
      },
      {
        name: "Alice Johnson",
        email: "alice@johnson.com",
        role: "User",
        lastSeen: "1d ago",
        lastSeenDateTime: "2022-01-26T16:35:00Z",
      },
      {
        name: "Bob Smith",
        email: "bob@smith.com",
        role: "Owner",
        lastSeen: "3h ago",
        lastSeenDateTime: "2022-01-27T17:35:00Z",
      },
      {
        name: "Charlie Brown",
        email: "charlie@brown.com",
        role: "Admin",
        lastSeen: "5m ago",
        lastSeenDateTime: "2022-01-27T20:30:00Z",
      },
      {
        name: "Eve Adams",
        email: "eve@adams.com",
        role: "User",
        lastSeen: "10m ago",
        lastSeenDateTime: "2022-01-27T20:25:00Z",
      }
  ];
  return (
    <Box col>
      <Title tag="h3">Inbox</Title>
      <ul role="list" className="divide-y">
        {people.map((person) => (
          <li key={person.email} className="flex justify-between gap-x-6 py-5">
            <div className="flex min-w-0 gap-x-4">
              <img
                className="h-12 w-12 flex-none rounded-full bg-gray-50"
                src={person.imageUrl}
                alt=""
              />
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">
                  {person.name}
                </p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                  {person.email}
                </p>
              </div>
            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
              <p className="text-sm leading-6 text-gray-900">{person.role}</p>
              {person.lastSeen ? (
                <p className="mt-1 text-xs leading-5 text-gray-500">
                  Last seen{" "}
                  <time dateTime={person.lastSeenDateTime}>
                    {person.lastSeen}
                  </time>
                </p>
              ) : (
                <div className="mt-1 flex items-center gap-x-1.5">
                  <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  </div>
                  <p className="text-xs leading-5 text-gray-500">Online</p>
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
      <div className="py-3 flex items-center">
        <span className="px-3 text-gray-900 font-semibold">See more </span>
        <RightIcon className="text-gray-900 w-4 h-4" />
      </div>
    </Box>
  );
};

export default Inbox;
