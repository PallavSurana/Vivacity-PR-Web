import { useEffect, useState } from "react";
import HomePage from "./HomePage";
import RegistrationPage from "./RegistrationPage";

function getPath() {
  if (window.location.pathname.endsWith("/registration.html")) return "registration";
  return "home";
}

export default function App() {
  const [page, setPage] = useState(getPath);

  useEffect(() => {
    const navigate = () => setPage(getPath());
    const handleLink = event => {
      const link = event.target.closest("a[href]");
      if (!link || link.target === "_blank" || link.origin !== window.location.origin) return;
      const destination = new URL(link.href);
      if (!destination.pathname.endsWith("/") && !destination.pathname.endsWith("/index.html") && !destination.pathname.endsWith("/registration.html")) return;
      event.preventDefault();
      window.history.pushState({}, "", `${destination.pathname}${destination.hash}`);
      navigate();
      if (destination.hash) window.requestAnimationFrame(() => document.querySelector(destination.hash)?.scrollIntoView({ behavior: "smooth" }));
      else window.scrollTo({ top: 0, behavior: "smooth" });
    };
    window.addEventListener("popstate", navigate);
    document.addEventListener("click", handleLink);
    return () => { window.removeEventListener("popstate", navigate); document.removeEventListener("click", handleLink); };
  }, []);

  useEffect(() => {
    document.title = page === "registration" ? "Register | Vivacity '27" : "Vivacity '27 | LNMIIT Jaipur";
  }, [page]);

  if (page === "registration") return <RegistrationPage />;
  return <HomePage />;
}
