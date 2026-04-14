import { useState, useEffect } from "react";
import api from "../api/axios";

export default function useContent() {
  const [content, setContent] = useState(null);

  useEffect(() => {
    api
      .get("/content")
      .then((r) => setContent(r.data))
      .catch(() => {});
  }, []);

  return content;
}
