import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { SliceZone } from "@prismicio/react";

export default async function Services() {
  const client = createClient();
  const page = await client.getByUID("page", "services");

  return <SliceZone slices={page.data.slices} components={components} />;
}
