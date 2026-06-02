import {useState, useEffect} from "react";

function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      e.name === "QuotaExceededError" &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
}


function Apply({listingId, email, companyName}) {
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
    const subject = "Sollicitatie afstudeerproject - " + companyName;
    window.location.href = "mailto:" + email + "?subject=" + encodeURIComponent(subject);

    // wait until the application is saved
    await saveApplication(listingId);
    setAlreadyApplied(true);
  }

  return (
    <div>
      <button
        className="projects-details-button"
        onClick={handleApply} disabled={alreadyApplied}>
        {alreadyApplied ? "Aangemeld" : "Solliciteer"}
      </button>
    </div>
  );
}

export default Apply;
