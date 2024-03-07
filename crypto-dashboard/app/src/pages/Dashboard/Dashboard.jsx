import DashboardLayout from "../../components/DashboardLayout";
import PortfolioSection from "./components/PortfolioSection";
import PricingSection from "../../pages/Dashboard/components/PricingSection";
import Transaction from "./components/Transaction";
import { Grid, GridItem } from "@chakra-ui/react";
import InfoCard from "./components/InfoCard";

const Dashboard = ({}) => {
  return (
    <DashboardLayout title="Dashboard">
      <Grid
      gridTemplateColumns={{
        base: "repeat(1, 1fr)",
        xl: "repeat(2, 1fr)"
      }}
      gap="6"
      >
        <GridItem colSpan={{
          base: 1,
          xl: 2,
        }}>
          <PortfolioSection />
        </GridItem>
        <GridItem colSpan={1}>
          <PricingSection />
        </GridItem>
        <GridItem colSpan={1}>
          <Transaction />
        </GridItem>
        <GridItem colSpan={1}>
          <InfoCard 
          inverted={false}
          imgUrl="/dot_bg.svg"
          tagText="Loan"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, voluptates!"
          />
        </GridItem>
        <GridItem colSpan={1}>
          <InfoCard
          inverted={true}
           imgUrl="/grid_bg.svg"
           tagText="Contact"
           text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, voluptates!" />
        </GridItem>
      </Grid>
    </DashboardLayout>
  );
};

export default Dashboard;
