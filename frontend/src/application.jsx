import {useState, useEffect} from "react";
import {storageAvailable} from "./storageAvailable.jsx"

function Apply({listingId, jobTitle, email, companyName}) {
  const [alreadyApplied, setAlreadyApplied] = useState(false);
  const [storageError, setStorageError] = useState(false)


  //check if user already applied
  useEffect(() =>{
    if (storageAvailable("localStorage")) {
      const applied = JSON.parse(localStorage.getItem("applied") || "[]");
      if (applied.includes(listingId)) {
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
        const applied = JSON.parse(localStorage.getItem("applied") || "[]");
        applied.push(listingId);
        localStorage.setItem("applied", JSON.stringify(applied));
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
