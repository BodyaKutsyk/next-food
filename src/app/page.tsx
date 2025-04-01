import { Card } from "flowbite-react";
import { Search } from "./components/Search";

export default function Home() {
  return (
    <div className="flex w-full h-dvh items-center justify-center">
      <Card className="w-96 border-none">
        <Search />
      </Card>
    </div>
  );
}
