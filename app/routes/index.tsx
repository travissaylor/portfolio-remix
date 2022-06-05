import { Link } from "@remix-run/react";

import { useOptionalUser } from "~/utils";

export default function Index() {
  return (
    <div className="hero min-h-screen">
      <div className="hero-overlay bg-opacity-60" />
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hi, I'm Travis</h1>
          <p className="mb-5">
            I am a Software Engineer based in New York, New York.
          </p>
          <Link to="/projects" className="btn btn-primary">
            My Work
          </Link>
        </div>
      </div>
    </div>
  );
}
