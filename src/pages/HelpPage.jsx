import React from "react";
import { Link } from "react-router-dom";
import ColoredDivider from "../components/ColoredDivider";
import Divider from "../components/Divider";
import { FaQuestionCircle } from "react-icons/fa";
import Accordion from "../components/Accordion";
const HelpPage = () => {
  return (
    <div
      className="pt-20 container px-6 lg:px-12
      mx-auto justify-start
    flex flex-col gap-2"
    >
      <h4 className="text-[32px] text-white flex items-center gap-2">
        Frequently asked Questions
      </h4>
      <div className="mb-2">
        <ColoredDivider />
      </div>
      <Accordion
        title="What is Movieverse?"
        content=" The Movieverse is vast and ever-evolving, and we strive to keep our
        archive updated with the latest information. Our team of cinephiles
        meticulously curates data on movies, serials, and their creators to
        bring you a user-friendly experience. With our easy navigation, you can
        quickly find information about a specific film, explore the filmography
        of your favorite actors, or learn about new releases that are making
        waves in the industry."
      />
      <Divider />
      <Accordion
        title="What Makes Movieverse different from other Resources & Websites?"
        content="We pride ourselves on providing a
        completely free platform where you can access
        up-to-date information about your favorite 
        films.Unlike other movie databases, our 
        commitment to offering the latest data means 
        you'll always be in the loop about new releases
        , cast updates, and industry news.Whether you're
        a casual viewer or a die-hard cinephile, 
        The Movieverse caters to everyone, ensuring 
        that you have the best movie experience 
        possible.Join our community today and discover 
        why we are better than the rest!"
      />
      <Divider />
      <Accordion
        title="How do I Search on Movieverse?"
        content="You can Search for the Movie and 
        TV Shows you want by using the Search icon 
        at the bottom of the page or on the left 
        side of the menu at the top of the page.
        "
      />
      <Divider />
      <Accordion
        title="How can I Contact you?"
        content="At the bottom of the page, you can access our contact page through the contact option."
      />
      <Divider />
      <Accordion
        title="Where does the Moviverse information come From?"
        content="We pride ourselves on providing comprehensive and accurate information sourced from the TMDB database, a trusted resource in the entertainment industry.Whether you're a casual viewer looking for a quick synopsis or a die-hard fan seeking in-depth details about your favorite films and shows, we aim to cater to everyone.Our easy-to-navigate platform allows you to explore a vast array of content, from classic cinema to the latest releases."
      />
      <Divider />
      <Accordion
        title="What does the name 'Movieverse' Mean? "
        content="Movieverse is a fictitious Name consisting of the Combination of the word Movie and Universe."
      />
      <Divider />
      <Accordion
        title="Where can I learn more about Movieverse Privacy Policy?"
        content="At the bottom of the page, you can access our Privacy Policy page through the Privacy Policy option to Read and know more about our Privacy policies."
      />
      <Divider />
      <Accordion
        title="How to search for Movies or Tv shows that I Want?"
        content="You can Search for the Movie and TV Shows you want by using the Search icon at the bottom of the page or on the left side of the menu at the top of the page."
      />
      <Divider />
      <div className="flex justify-center flex-col items-center">
        <p className="text-lg">Do You have another Question?</p>
        <div className="flex text-lg items-center gap-2">
          <p>Share with us Here</p>
          <Link
            className="hover:text-white text-2xl drop-shadow-md bg-gradient-to-r from-neutral-600 via-neutral-700 rounded-full to-neutral-600"
            to={"/contact"}
          >
            <FaQuestionCircle />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HelpPage;
