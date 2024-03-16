import CardContainer from "@/components/cardContainer";
import Container from "@/components/container";
import DetailsContainer from "@/components/detailsContainer";
import Navbar from "@/components/nav";

export default function Home() {
  return (
    <div className="font-poppins bg-white min-h-[100vh] text-black">
      <Container>
        <Navbar title="Welcome Dexter Admin," />
        <CardContainer />
        <DetailsContainer />
      </Container>
    </div>
  );
}
