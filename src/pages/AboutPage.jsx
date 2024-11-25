import React from "react";
import nav from "../assets/nav.png";
import ColoredDivider from "../components/ColoredDivider";
const AboutPage = () => {
  return (
    <div
      className="pt-20 container px-6 lg:px-12
      mx-auto justify-start
    flex flex-col gap-2"
    >
      <h4 className="text-[32px] text-white flex items-center gap-2">
        About
        <img src={nav} width={166} />
      </h4>
      <ColoredDivider />
      <p>
        Welcome to{" "}
        <span className="bg-gradient-to-r from-orange-600 via-orange-300 to-orange-100 text-transparent font-bold bg-clip-text">
          Movieverse
        </span>
        , your ultimate destination for an extensive archive of cinema
        knowledge! Here at{" "}
        <span className="bg-gradient-to-r from-blue-600 via-blue-300 to-blue-100 text-transparent font-bold bg-clip-text">
          Movieverse
        </span>
        , we believe that every movie and series has a story, not just on-screen
        but also behind the scenes. Our mission is to provide a comprehensive
        source of movie information that is accessible and engaging for
        everyone.
      </p>
      <div className="w-fit mx-auto mb-4 mt-2 flex space-x-2">
        <div className="h-2 w-2 rounded-full  bg-neutral-700"></div>
        <div className="h-2 w-2 rounded-full bg-neutral-500"></div>
        <div className="h-2 w-2 rounded-full bg-neutral-300"></div>
      </div>
      <p>
        In a world where entertainment is just a click away, we stand apart from
        streaming websites by offering a rich database dedicated solely to the
        world of cinema. Whether you are a film fanatic, a casual viewer, or
        someone who simply enjoys learning about movies, our platform is
        tailor-made for you. Our content ranges from detailed actors' data to
        insights about cast members, ensuring that you have access to everything
        you need to know about your favorite films and series.
      </p>
      <p>
        The Movies Universe is vast and ever-evolving, and we strive to keep our
        archive updated with the latest information. Our team of cinephiles
        meticulously curates data on movies, serials, and their creators to
        bring you a user-friendly experience. With our easy navigation, you can
        quickly find information about a specific film, explore the filmography
        of your favorite actors, or learn about new releases that are making
        waves in the industry.
      </p>
      <div className="w-fit mx-auto mb-4 mt-2 flex space-x-2">
        <div className="h-2 w-2 rounded-full  bg-neutral-700"></div>
        <div className="h-2 w-2 rounded-full bg-neutral-500"></div>
        <div className="h-2 w-2 rounded-full bg-neutral-300"></div>
      </div>
      <p>
        At{" "}
        <span className="bg-gradient-to-r from-green-600 via-green-300 to-green-100 text-transparent font-bold bg-clip-text">
          Movieverse
        </span>
        , we are committed to celebrating the art of cinema. Each entry is
        crafted to provide context and background, making it not just a resource
        but an exploration of the cinematic journey. We value the importance of
        understanding the people behind the camera and the stories that movies
        tell, which is why we delve deep into the world of actors and their
        contributions to the movies universe.
      </p>
      <div className="w-fit mx-auto mb-4 mt-2 flex space-x-2">
        <div className="h-2 w-2 rounded-full  bg-neutral-700"></div>
        <div className="h-2 w-2 rounded-full bg-neutral-500"></div>
        <div className="h-2 w-2 rounded-full bg-neutral-300"></div>
      </div>
      <p>
        We invite you to explore our vast collection of movies information,
        where you can discover hidden gems, learn about classic films, and even
        dive into lesser-known serials. Our goal is to foster a love for cinema
        that transcends generational gaps, bringing together film lovers of all
        ages.
      </p>
      <div className="w-fit mx-auto mb-4 mt-2 flex space-x-2">
        <div className="h-2 w-2 rounded-full  bg-neutral-700"></div>
        <div className="h-2 w-2 rounded-full bg-neutral-500"></div>
        <div className="h-2 w-2 rounded-full bg-neutral-300"></div>
      </div>
      <p>
        Thank you for choosing{" "}
        <span className="bg-gradient-to-r from-pink-600 via-pink-300 to-pink-100 text-transparent font-bold bg-clip-text">
          Movieverse
        </span>{" "}
        as your go-to source for everything related to movies and serials. We
        hope to inspire your cinematic journey and enrich your understanding of
        the movies universe. Join us as we explore the captivating world of
        cinema, one film at a time!
      </p>
    </div>
  );
};

export default AboutPage;
