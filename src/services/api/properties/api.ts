import axios from "axios";
import { unstable_cache } from "next/cache";

const API_URl = process.env.NEXT_PUBLIC_API_URL;

export const fetchProperty = unstable_cache(
  async () => {
    const response = await axios.get(`http://localhost:3001/property`);
    return response.data;
  },
  ["property"],
  { revalidate: 60, tags: ["property"] },
);

export const fetchPropertyId = async (propertyId: string) => {
  const response = await axios.get(
    `http://localhost:3001/property/${propertyId}`,
  );
  return response.data;
};
