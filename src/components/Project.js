import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
export default function Project() {
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    sanityClient.fetch(`*[_type == "project"]{
      
    }`)
  })
  
  return;
}
