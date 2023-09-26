import { StaticImageData } from "next/image";
import { URL } from "url";

type Project = {
  title: string;
  img: StaticImageData;
  description: string;
  github?: URL;
  link?: URL;
  tech: string[];
  context: string;
  status: string;
  contributions?: string[] | undefined;
};

type Projects = {
  [year: string]: Project[]; // Assuming 'Project' is your project type
};
