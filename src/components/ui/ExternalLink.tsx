import './style.css'

type Props = {
  title: string;
  description: string;
  href: string;
};

export default function ExternalLink({href, title}: Props) {
  return (
    <a
      className="sm:w-[250px] btn inline-block bg-transparent p-2 transition-colors rounded-md font-semibold text-md"
      href={href}
      rel="noreferrer"
      target="_blank"
    >{title} <span className="ml-2 inline-block">→</span>
    </a>
  );
}
