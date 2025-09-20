import { Button } from "@/components/ui/button";

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));
export default async function HomePage() {
  await delay(1000);
  return <>{/* <Button>Button</Button> */}</>;
}
