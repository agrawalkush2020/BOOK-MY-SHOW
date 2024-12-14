"use client";

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
        Contact Us
      </h1>

      <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Get in Touch</h2>

        <p className="text-gray-600 mb-4">
          If you have any questions or need further assistance, feel free to reach out to us.
        </p>

        <div className="mt-6">
          <h3 className="text-xl font-semibold text-gray-700">Contact Information</h3>
          <p className="text-gray-600 mt-2">
            CEO: <strong>Kushagra Agrawal</strong>
          </p>
          <p className="text-gray-600 mt-2">
            Phone: <a href="tel:+1234567890" className="text-blue-600">+91- 8529708049</a>
          </p>
          <p className="text-gray-600 mt-2">
            Support Email: <a href="mailto:agrawalkush2024@gmail.com" className="text-blue-600">agrawalkush2024@gmail.com</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
