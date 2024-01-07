import React from "react";
import { AuthContext } from "../../utils/AuthContext";
import Box from "../../components/Box/Box";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import Form from "../../components/Form/Form";
import team1 from "../../assets/images/team-1.jpg";
import Title from "../../components/Title/Title";
import Paragraph from "../../components/Paragraph/Paragraph";

const Profile = () => {
  const { currentUser } = React.useContext(AuthContext);
  return (
    <>
      <Box>
          <Title tag="h3">Profile</Title>
      </Box>
      <Box margin="my-8" col>
        <div>
          <div className="p-4 sm:px-0">
            <Title tag="h3">Information account</Title>
            <Paragraph>Personal details and application</Paragraph>
            <div className="mt-6 border-t border-gray-100">
              <dl className="divide-y divide-gray-100">
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Full name
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    Karol Znojkiewicz
                  </dd>
                </div>

                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Email address
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {currentUser.email}
                  </dd>
                </div>

                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Group
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    Admin
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </Box>
    </>
  );
};

export default Profile;
