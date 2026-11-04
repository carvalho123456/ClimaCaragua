import { createFileRoute } from "@tanstack/react-router";
import AuthPage from "@/pages/Auth";

export const Route = createFileRoute("/auth")({
  head: () => ({
    meta: [
      { title: "Entrar | CLIMACARAGUA" },
      {
        name: "description",
        content: "Acesse sua conta para enviar relatos de alagamentos e deslizamentos em Caraguatatuba.",
      },
      { property: "og:title", content: "Entrar | CLIMACARAGUA" },
      { property: "og:description", content: "Acesse sua conta para enviar relatos na sua região." },
       { property: "og:type", content: "website" },
       { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AuthPage,
});
