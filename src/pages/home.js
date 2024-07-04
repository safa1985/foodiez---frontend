import React from "react";

const Home = () => {
  return (
    <section className="bg-gray-900 min-h-screen flex flex-col justify-between">
      <section className="flex-grow">
        <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2 gap-8">
            <div className="relative z-10 lg:py-16 flex items-center justify-center">
              <div className="relative h-64 sm:h-80 lg:h-full w-full rounded-lg overflow-hidden shadow-xl">
                <img
                  alt="Delicious Food"
                  src="https://www.moderngentlemanmagazine.com/wp-content/uploads/2023/08/gentlemen-Culinary-Travel.png"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="relative flex items-center bg-gray-800 p-8 sm:p-16 lg:p-24 rounded-lg shadow-xl">
              <div>
                <h2 className="text-4xl font-bold text-white sm:text-5xl mb-6">
                  Welcome to Chef Masters
                </h2>
                <p className="mt-4 text-gray-300 leading-relaxed">
                  Discover a world where culinary dreams come true. Chef Masters
                  is your gateway to exquisite recipes, culinary tips, and a
                  vibrant community of food enthusiasts. Whether you're a
                  seasoned chef or a kitchen novice, you'll find the inspiration
                  and resources to elevate your cooking.
                </p>
                <p className="mt-4 text-gray-300 leading-relaxed">
                  Join us and start your culinary journey today!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-800 py-16">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Unleash Your Inner Chef
            </h2>
            <p className="mt-4 text-gray-300 leading-relaxed">
              Explore a world of flavors with our extensive recipe collection.
              From traditional dishes to modern cuisine, find inspiration for
              your next culinary creation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col items-center">
              <img
                alt="Culinary Adventure"
                src="https://img.freepik.com/premium-photo/person-cooking-food-wok-stove_1133497-6832.jpg"
                className="h-64 w-full rounded-lg object-cover shadow-lg transform hover:scale-105 transition duration-300"
              />
              <p className="mt-4 text-gray-300 leading-relaxed text-center">
                Dive into a culinary adventure with our step-by-step recipes.
                Create restaurant-quality dishes in the comfort of your own
                home.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                alt="Community of Food Lovers"
                src="https://img1.wsimg.com/isteam/ip/713e6a7d-d350-4414-8064-846d9a95656c/5baaac8c-0fbf-4300-a0ab-e300fa394dc3.jpg"
                className="h-64 w-full rounded-lg object-cover shadow-lg transform hover:scale-105 transition duration-300"
              />
              <p className="mt-4 text-gray-300 leading-relaxed text-center">
                Connect with a vibrant community of food lovers. Share your
                recipes, get feedback, and inspire others with your culinary
                creations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-900 py-16">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Elevate Your Cooking Skills
            </h2>
            <p className="mt-4 text-gray-300 leading-relaxed">
              At Chef Masters, we're committed to helping you succeed in the
              kitchen. From expert cooking tips to comprehensive recipe guides,
              you'll find everything you need to elevate your culinary skills.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col items-center">
              <img
                alt="Step-by-Step Recipes"
                src="https://as1.ftcdn.net/v2/jpg/05/86/19/94/1000_F_586199407_dtkxYTk8pL26UvFIP3vgVwhnDr42LII7.jpg"
                className="h-64 w-full rounded-lg object-cover shadow-lg transform hover:scale-105 transition duration-300"
              />
              <p className="mt-4 text-gray-300 leading-relaxed text-center">
                Our step-by-step recipes are designed to be easy to follow,
                ensuring that you can create delicious dishes with confidence.
                No matter your skill level, you'll find recipes that suit your
                needs.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                alt="Cooking Tips and Tricks"
                src="https://img.freepik.com/premium-photo/stepbystep-visual-guide-man-cooking-food-grill-kitchen-professional-male-chef-kitchen-making-elaborated-dish-ai-generated_538213-35436.jpg"
                className="h-64 w-full rounded-lg object-cover shadow-lg transform hover:scale-105 transition duration-300"
              />
              <p className="mt-4 text-gray-300 leading-relaxed text-center">
                Learn from the best with our collection of cooking tips and
                tricks. Our experts share their secrets to help you improve your
                cooking skills and make the most of your time in the kitchen.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-800 py-8">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="mx-auto mt-6 max-w-md text-center text-gray-300 leading-relaxed">
            Join our community and start your culinary adventure today!
          </p>

          <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
            <li>
              <a
                className="text-gray-400 transition hover:text-gray-200"
                href="/about"
              >
                About
              </a>
            </li>
            <li>
              <a
                className="text-gray-400 transition hover:text-gray-200"
                href="/categories"
              >
                Categories
              </a>
            </li>
            <li>
              <a
                className="text-gray-400 transition hover:text-gray-200"
                href="/recipes"
              >
                Recipes
              </a>
            </li>
            <li>
              <a
                className="text-gray-400 transition hover:text-gray-200"
                href="/profile"
              >
                My Profile
              </a>
            </li>
          </ul>

          <ul className="mt-12 flex justify-center gap-6 md:gap-8">
            <li>
              <a
                href="#"
                rel="noreferrer"
                target="_blank"
                className="text-gray-400 transition hover:text-gray-200"
              >
                <span className="sr-only">Facebook</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="#"
                rel="noreferrer"
                target="_blank"
                className="text-gray-400 transition hover:text-gray-200"
              >
                <span className="sr-only">Instagram</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="#"
                rel="noreferrer"
                target="_blank"
                className="text-gray-400 transition hover:text-gray-200"
              >
                <span className="sr-only">Twitter</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="#"
                rel="noreferrer"
                target="_blank"
                className="text-gray-400 transition hover:text-gray-200"
              >
                <span className="sr-only">GitHub</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </section>
  );
};

export default Home;
