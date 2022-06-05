import { Link } from "@remix-run/react";

interface CardProps {
  title: string;
  exerpt: string;
  image: string;
  link: string;
}

export const Card = ({ title, exerpt, image, link }: CardProps) => {
  return (
    <div className="card bg-base-100 shadow-xl lg:card-side">
      <figure>
        <img src={image} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{exerpt}</p>
        <div className="card-actions justify-end">
          <Link to={link} className="btn btn-primary">
            More Details
          </Link>
        </div>
      </div>
    </div>
  );
};
