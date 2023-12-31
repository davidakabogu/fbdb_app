import PhotosUploader from "../PhotosUploader";
import { useEffect, useState } from "react";
import axios from "axios";
import AccountNav from "../AccountNav";
import { Navigate, useParams } from "react-router-dom";

export default function AthleteFormPage() {
  const { id } = useParams();
  const [addedPhoto, setAddedPhoto] = useState("");
  const [sport, setSport] = useState("");
  const [school, setSchool] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bio, setBio] = useState("");
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get("/biodata/" + id).then((response) => {
      const { data } = response;
      setAddedPhoto(data.photo);
      setSport(data.sport);
      setSchool(data.school);
      setName(data.name);
      setAge(data.age);
      setWeight(data.weight);
      setHeight(data.height);
      setBio(data.bio);
    });
  }, [id]);

  if (redirect) {
    return <Navigate to={"/account/biodata"} />;
  }

  async function saveAthlete(ev) {
    ev.preventDefault();
    const athleteData = {
      addedPhoto,
      sport,
      school,
      name,
      age,
      weight,
      height,
      bio,
    };
    if (id) {
      // update
      await axios.put("/biodata", {
        id,
        ...athleteData,
      });
      setRedirect(true);
    } else {
      // new place
      await axios.post("/biodata", athleteData);
      setRedirect(true);
    }
  }

  return (
    <div>
      <AccountNav />
      <form onSubmit={saveAthlete}>
        <h2 className="text-lg mt-4">Photo</h2>
        <p className="text-gray-500 text-sm"> Upload a picture </p>

        <PhotosUploader addedPhoto={addedPhoto} onChange={setAddedPhoto} />

        <h2 className=" text-lg mt-4">Sport</h2>
        <p className="text-gray-500 text-sm"> What sport do you play ? </p>
        <input
          type="text"
          value={sport}
          onChange={(ev) => setSport(ev.target.value)}
          placeholder=" e.g Football, Basketball, etc"
        />

        <h2 className=" text-lg mt-4">School</h2>
        <p className="text-gray-500 text-sm"> Institution of Education </p>
        <input
          type="text"
          value={school}
          onChange={(ev) => setSchool(ev.target.value)}
          placeholder=" e.g Tell the name of your school"
        />

        <h2 className="text-lg mt-4 ">Name</h2>
        <p className="text-gray-500 text-sm">Athlete name </p>
        <input
          type="text"
          value={name}
          onChange={(ev) => setName(ev.target.value)}
          placeholder="e.g not > 100 characters "
        />

        <h2 className="text-lg mt-4 ">Age</h2>
        <p className="text-gray-500 text-sm"> Kindly provide your DOB </p>
        <input
          type="text"
          value={age}
          onChange={(ev) => setAge(ev.target.value)}
          placeholder="e.g Date of Birth "
        />

        <h2 className="text-lg mt-4 ">Weight</h2>
        <p className="text-gray-500 text-sm">Weight in pounds </p>
        <input
          type="text"
          value={weight}
          onChange={(ev) => setWeight(ev.target.value)}
          placeholder="e.g (weight in kilograms) * 2  "
        />

        <h2 className="text-lg mt-4 ">Height</h2>
        <p className="text-gray-500 text-sm"> How tall are you ? </p>
        <input
          type="text"
          value={height}
          onChange={(ev) => setHeight(ev.target.value)}
          placeholder="e.g 6'2 "
        />

        <h2 className="text-lg mt-4 "> Bio </h2>
        <p className="text-gray-500 text-sm"> Athlete description </p>
        <textarea
          value={bio}
          onChange={(ev) => setBio(ev.target.value)}
        ></textarea>

        <div>
          <button className="bg-green-500 w-full rounded-xl mt-6 p-1">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
