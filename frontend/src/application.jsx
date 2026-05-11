import {useState, useEffect} from "react";

function Apply({listingId, email, companyName}) {
  const [alreadyApplied, setAlreadyApplied] = useState(false);

  //check if user already applied
  useEffect(() =>{
    const applied = JSON.parse(localStorage.getItem("applied") || "[]");
    if (applied.includes(listingId)) {
      setAlreadyApplied(true);
    }
  }, [listingId]);

  // saves the application in localstorage
  function saveApplication(listingId) {
    return new Promise((resolve) =>{
      const applied = JSON.parse(localStorage.getItem("applied") || "[]");
      applied.push(listingId);
      localStorage.setItem("applied", JSON.stringify(applied));
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
