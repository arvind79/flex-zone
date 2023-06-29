import Card from "../UI/Card";

const Trainer = ({ id, name, image, job, socials }) => {
  return (
    <Card className={"trainer__card"}>
      <div className="trainer__image">
        <img src={image} alt="Trainer Image" />
      </div>
      <h3>{name}</h3>
      <p>{job}</p>
      <div className="trainer__socials">
        {socials.map(({ icon, link }, index) => {
          return (
            <a key={index} href={link} target="blank" rel="noopener noreffer">
              {icon}
            </a>
          );
        })}
      </div>
    </Card>
  );
};

export default Trainer;