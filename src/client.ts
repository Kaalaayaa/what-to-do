import { createClient } from "@sanity/client";

const client = createClient({
    projectId: "dc0rks7l",
    dataset: "production",
    useCdn: true,
    apiVersion: "2023-06-17"
});

export default client;