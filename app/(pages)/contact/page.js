import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { SliceZone } from "@prismicio/react";

export default async function Contact() {
  const client = createClient();
  const page = await client.getByUID("page", "contact");

  return <SliceZone slices={page.data.slices} components={components} />;
}
