import { useGetMe } from "../../queries/useGetMe";

interface HeaderLink {
  url: string;
  label: string;
}

const unauthLinks: HeaderLink[] = [];

const authLinks: HeaderLink[] = [
  {
    url: "/activity",
    label: "Activity",
  },

  {
    url: "/logout",
    label: "Logout",
  },
];

const Header = () => {
  const user = useGetMe();

  const links = !!user ? authLinks : unauthLinks;

  return (
    <div className="bg-contessa-700 flex h-32 items-center justify-center gap-6 px-8">
      <div className="h-12 w-12 bg-white" />

      {links.map((link) => (
        <a href={link.url} className="text-xl text-white">
          {link.label}
        </a>
      ))}
    </div>
  );
};

export default Header;
