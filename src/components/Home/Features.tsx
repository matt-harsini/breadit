/* eslint-disable @next/next/no-img-element */
import {
  ClipboardDocumentIcon,
  DocumentPlusIcon,
  ArrowPathRoundedSquareIcon,
  UserIcon,
  ChevronDoubleUpIcon,
  CpuChipIcon,
} from "@heroicons/react/20/solid";

const features = [
  {
    name: "Create posts.",
    description:
      "Build your credibility by showing your expertise and knowledge in a specific domain.",
    icon: DocumentPlusIcon,
  },
  {
    name: "Follow developers.",
    description:
      "Curate your feed and follow developers that specialize in any tech stack.",
    icon: UserIcon,
  },
  {
    name: "Join communities.",
    description:
      "Discuss cutting edge technology from web development, embedded systems, and machine learning.",
    icon: ClipboardDocumentIcon,
  },
  {
    name: "Learn technologies.",
    description:
      "Everything you need to advance your career from courses crafted by experienced software engineers.",
    icon: CpuChipIcon,
  },
  {
    name: "Create your network.",
    description:
      "Engage with other developers by proving yourself and showcasing your skills.",
    icon: ArrowPathRoundedSquareIcon,
  },
  {
    name: "Gain experience.",
    description:
      "Collaborate with other developers to help solve challenging technical problems.",
    icon: ChevronDoubleUpIcon,
  },
];

export default function Features() {
  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-400">
            A software development community
          </h2>
          <h3 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Engage with experienced engineers.
          </h3>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Discover stories, expertise, and challenges from developers around
            the world.
          </p>
        </div>
      </div>
      <div className="relative overflow-hidden pt-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <img
            src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
            alt="App screenshot"
            className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-white/10"
            width={2432}
            height={1442}
          />
          <div className="relative" aria-hidden="true">
            <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-gray-900 pt-[7%]" />
          </div>
        </div>
      </div>
      <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
        <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
          {features.map((feature) => (
            <div key={feature.name} className="relative pl-9">
              <dt className="inline font-semibold text-white">
                <feature.icon
                  className="absolute left-1 top-1 h-5 w-5 text-indigo-500"
                  aria-hidden="true"
                />
                {feature.name}
              </dt>{" "}
              <dd className="inline">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
