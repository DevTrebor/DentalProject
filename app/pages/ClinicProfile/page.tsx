'use client';

import TiltedCard from './components/TiltedCard';

export default function Page() {
  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center p-10">
      {/* 👨‍⚕️ About Section */}
      <section className="w-full max-w-6xl flex flex-col lg:flex-row items-center justify-center">
        {/* Left: Image / Video */}
        <div className="flex justify-center w-full lg:w-1/2">
          <video
            className="rounded-lg shadow-2xl w-full max-w-md"
            src="/upload/aboutus.mp4"
            controls
            autoPlay
            loop
            muted
          />
        </div>

        {/* Right: Text content */}
        <div className="relative bg-gray-300 text-[#1a1a1a] rounded-md shadow-md p-8 mt-8 lg:mt-0 lg:ml-[-60px] max-w-xl leading-relaxed border border-gray-100">
          {/* 🏷️ "About us" heading centered at top of card */}
          <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
            About us
          </h1>

          <p>
            Welcome to <strong>Heavenly Touch Dental Clinic</strong>, your trusted partner in achieving a healthier, brighter smile.
          </p>

          <p className="mt-4">
            At Heavenly Touch Dental Clinic, we believe that dental care should be more than just treatment — it should be a comforting experience guided by gentle hands and a caring heart. Under the expert care of <strong>Dr. Nel Rugas</strong>, our clinic is dedicated to providing top-quality dental services with a personal touch that makes every patient feel at ease.
          </p>

          <p className="mt-4">
            Our mission is to help you achieve and maintain optimal oral health through comprehensive, compassionate, and affordable dental care. Whether you’re visiting us for a routine check-up, a smile makeover, or advanced restorative treatment, we’re here to ensure your comfort and satisfaction every step of the way.
          </p>

          <p className="mt-4">
            With modern facilities, state-of-the-art equipment, and a welcoming atmosphere, we strive to make every visit relaxing and rewarding. Dr. Nel Rugas and the entire Heavenly Touch team take pride in building lasting relationships with our patients — rooted in trust, transparency, and genuine care.
          </p>

          <p className="mt-4">
            Because at Heavenly Touch Dental Clinic, your smile truly deserves a heavenly touch.
          </p>
        </div>
      </section>
    </main>
  );
}
