"use client";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
        About Us
      </h1>

      <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Welcome to Our Website!
        </h2>

        <p className="text-gray-600 mb-4">
          We are a passionate team dedicated to providing the best services and
          solutions for our users. Our platform is designed to deliver
          exceptional user experiences and help you achieve your goals more
          efficiently.
        </p>

        <p className="text-gray-600 mb-4">
          Our mission is to continuously innovate and improve, ensuring that we
          stay ahead of the curve in an ever-changing digital landscape. Whether
          you're here to explore, learn, or engage, we're committed to making
          your experience with us valuable and enjoyable.
        </p>

        <p className="text-gray-600 mb-4">
          Thank you for visiting our site. We appreciate your trust and support.
        </p>
      </div>
    </div>
  );
};

export default About;
