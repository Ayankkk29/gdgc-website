
export default function AboutUs() {
  return (
    <div className="w-full min-h-screen bg-white p-6 md:p-12 flex flex-col items-center">
      {/* Title Section */}
      <div className="w-full flex flex-col items-start">
        <div className="flex items-center gap-4">
          <div className="text-yellow-500 text-4xl font-bold">||</div>
          <h1 className="text-3xl md:text-4xl font-bold">About Us</h1>
          <div className="text-yellow-500 text-3xl font-bold">●●●</div>
        </div>
      </div>

      {/* Black Bento Placeholder */}
      <div className="w-full h-52 bg-black rounded-2xl my-8"></div>

      {/* Content */}
      <div className="w-full max-w-4xl text-gray-800 space-y-4">
        <p>
          Google Developer Groups on Campus are university-based community groups for students
          interested in Google developer technologies. By joining a GDG, students grow their
          knowledge in peer-to-peer learning and build solutions for local communities.
        </p>

        <h2 className="text-xl font-semibold mt-4">Key Opportunities Provided by GDGx:</h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>In-Depth Technical Growth:</strong> Workshops, sessions, and real-world projects
            that enhance engineering confidence.
          </li>
          <li>
            <strong>Professional Mentorship:</strong> Guidance from experienced industry-level mentors
            and technical experts.
          </li>
          <li>
            <strong>Global Visibility:</strong> Exposure to global events, networking opportunities,
            and international collaboration.
          </li>
        </ul>

        {/* Collage Image */}
        <div className="w-full flex justify-center mt-6">
          <img src="/College.png" alt="College Collage" className="w-full max-w-xl rounded-xl shadow" />
        </div>
      </div>
    </div>
  );
}