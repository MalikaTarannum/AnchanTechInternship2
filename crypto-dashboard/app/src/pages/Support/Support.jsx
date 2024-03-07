
import { AiTwotoneMessage } from "react-icons/ai";
import DashboardLayout from "../../components/DashboardLayout";
import ContactCard from "./components/ContactCard";
import SupportCard from "./components/SupportCard";
import { IoMdMail } from 'react-icons/io';
import InfoCard from "../Dashboard/components/InfoCard";
import { Stack } from "@chakra-ui/react";

const Support = () => {
  return (
  <DashboardLayout>
    <Stack spacing="5rem">
    <SupportCard
     leftComponent={< ContactCard/>}
     icon={IoMdMail}
     text="Lorem ipsum dolor sit amet consectetur adipisicing elit."
     title= "Contact Us"
    />
    <SupportCard
     leftComponent={
      <InfoCard 
      inverted={true}
      imgUrl="/grid_bg.svg"
      tagText="Contact"
      text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, voluptates!"
      />}
     icon={AiTwotoneMessage}
     text="Lorem ipsum dolor sit amet consectetur adipisicing elit."
     title= "Live Chat"
    />
    </Stack>
  </DashboardLayout>
  )
}

export default Support;
