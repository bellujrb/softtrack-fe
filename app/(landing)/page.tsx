import { TeamCard } from "@/components/card-team";

const LandingPage = () => {
  return (
    <div>
      <p className="text-center font-bold mb-6 text-2xl">Nossa Equipe</p>
      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <TeamCard
          image="https://github.com/RafaelRMJesus.png"
          github="RafaelRMJesus"
          name="Rafael Jesus - RM98296"
          description="Head of Frontend "
        />
        <TeamCard
          image="https://github.com/bellujrb.png"
          name="Belluzzo - RM99282"
          description="Head of Global, Discovery, Pitch"
        />
        <TeamCard
          image="https://github.com/Gplatini.png"
          name= "Platini - RM551212"
          description="Frontend Developer"
        />
        <TeamCard
          image="https://github.com/rebeca.png"
          name="Gabriel Tavares - RM97753"
          description="Head of Back-end Developer & Pitch"
        />
        <TeamCard
          image="https://github.com/isabela.png"
          name="Breno - RM550434"
          description="Back-end Developer & Pitch"
        />
      </div>
    </div>
  );
};

export default LandingPage;
