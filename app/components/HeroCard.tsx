import { Link } from "@remix-run/react";

interface HeroCardProps {
  title: string;
  exerpt: string;
  image: string;
  link: string;
}

export const HeroCard = ({ title, exerpt, image, link }: HeroCardProps) => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={image}
          alt={title}
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">{title}</h1>
          <p className="py-6">{exerpt}</p>
          <Link to={link} className="btn btn-primary">
            More Details
          </Link>
        </div>
      </div>
    </div>
  );
};
