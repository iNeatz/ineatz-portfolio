import AnimatedResume from "@/components/Resume/AnimatedResume";
import { createClient } from "@/prismicio";

export default async function Resume() {
  const client = createClient();
  const page = await client.getByUID("page", "resume");

  return <AnimatedResume slices={page.data.slices} />;
}
