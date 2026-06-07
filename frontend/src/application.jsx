import {useState, useEffect} from "react";
import {storageAvailable} from "./storageAvailable.jsx"

function Apply({listingId, jobTitle, email, companyName}) {
  const [alreadyApplied, setAlreadyApplied] = useState(false);
  const [storageError, setStorageError] = useState(false)


  //check if user already applied
  useEffect(() =>{
    if (storageAvailable("localStorage")) {
      const saved = JSON.parse(localStorage.getItem("savedProjects") || "[]");
      const project = saved.find((p) => p.id === listingId); //check if this project already exists
        if (project?.applied){ //if it exists and applied is true disable the button
        setAlreadyApplied(true);
      }
    }else {
      setStorageError(true)
    }
  }, [listingId]);

  // saves the application in localstorage
  function saveApplication(listingId) {
    return new Promise((resolve) =>{
      if(storageAvailable("localStorage")) {
        const saved = JSON.parse(localStorage.getItem("savedProjects") || "[]");
        const exists = saved.find((p) => p.id === listingId); // check if the project already exists

        if (exists) { // project already saved, set applied to true
        const updated = saved.map((p)=> p.id === listingId ? {...p, applied: true} : p);
        localStorage.setItem("savedProjects", JSON.stringify(updated));
      } else {
          //project not yet saved,add it with true
          saved.push({id: listingId, title: jobTitle, companyName, applied: true});
          localStorage.setItem("savedProjects", JSON.stringify(saved));
        }
      } else {
        setStorageError(true);
      }
        resolve("saved");
    });
  }

  async function handleApply() {
    const subject = `Sollicitatie ${jobTitle} - ` + companyName;
    window.location.href = "mailto:" + email + "?subject=" + encodeURIComponent(subject);

    // wait until the application is saved
    await saveApplication(listingId);
    setAlreadyApplied(true);
  }

  return (
    <div>
      {/*if there is an error, show this*/}
      {storageError && <p>Aanmelden is niet mogelijk in deze browser</p>}
      <button
        className="projects-details-button"
        onClick={handleApply} disabled={alreadyApplied}>
        {alreadyApplied ? "Aangemeld" : "Solliciteer"}
      </button>
    </div>
  );
}

export default Apply;
