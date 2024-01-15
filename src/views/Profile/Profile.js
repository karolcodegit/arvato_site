import React, { useContext } from "react";
import { AuthContext } from "../../services/firebase/Auth";
import Box from "../../components/Box/Box";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import Form from "../../components/Form/Form";
import team1 from "../../assets/images/team-1.jpg";
import Title from "../../components/Common/Title/Title";
import Paragraph from "../../components/Common/Paragraph/Paragraph";
import Details from "../../components/Common/SetingsDetailsTable/SetingsDetailsTable";

const Profile = () => {
  const { currentUser, userDetails } = useContext(AuthContext);
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
              <Details title="Full name" value={`${userDetails.Name} ${userDetails.Surname}`} />
              <Details title="Email address" value={currentUser.email} />
              <Details title="Group" value={userDetails.Group} />
            </dl>
            </div>
          </div>
        </div>
      </Box>
    </>
  );
};

export default Profile;
