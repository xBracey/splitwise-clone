import LoginRegisterBox from "../../components/LoginRegisterBox";
import { useGetMe } from "../../queries/useGetMe";

export const Home = () => {
  const user = useGetMe();

  if (user) {
    return (
      <div className="flex h-full w-full items-center justify-center"></div>
    );
  }

  return (
    <div
      className="flex w-full items-center justify-center"
      style={{ height: "calc(100vh - 128px)" }}
    >
      <LoginRegisterBox />
    </div>
  );
};
