import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Swal from "sweetalert2";

const GiveMark = () => {
  const { id } = useParams(); // Get assignment ID from the URL
  const [submission, setSubmission] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/myassignment/${id}`)
      .then((res) => res.json())
      .then((data) => setSubmission(data));
  }, [id]);

  const handleGiveMark = (e) => {
    e.preventDefault();
    const form = e.target;
    const marksGiven = form.marksGiven.value;
    const feedback = form.feedback.value;

    fetch(`http://localhost:3000/myassignment/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        marksGiven,
        feedback,
        Status: "checked",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire("Success", "marks given successfully", "success");
      });
  };

  if (!submission) {
    return <p className="text-center">Loading...</p>;
  }

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white p-8 rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-4">Give Mark</h2>
      <p><strong>Title:</strong> {submission.title}</p>
      <p><strong>Submitted By:</strong> {submission.userEmail}</p>
      <p className="mt-2">
        <strong>Docs Link:</strong>{" "}
        <a href={submission.Docs} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
          Open Google Docs
        </a>
      </p>
      <p className="mt-2"><strong>Notes:</strong> {submission.description}</p>

      <form onSubmit={handleGiveMark} className="mt-6 space-y-4">
        <div>
          <label className="block mb-1">marksGiven</label>
          <input
            type="number"
            name="marksGiven"
            required
            className="w-full border px-4 py-2 rounded-md"
          />
        </div>
        <div>
          <label className="block mb-1">Feedback</label>
          <textarea
            name="feedback"
            required
            className="w-full border px-4 py-2 rounded-md"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-green-600 text-white px-6 py-2 rounded-md"
        >
          Submit Mark
        </button>
      </form>
    </div>
  );
};

export default GiveMark;
