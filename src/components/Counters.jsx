import React from "react";

function Counters() {
  return (
    <section className="mt-20 bg-white">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 items-center gap-6">
          <div>
            <div className="border border-gray-200 rounded-lg flex flex-col gap-4 items-center justify-center px-4 py-8 shadow">
              <div className="p-2 bg-blue-700 rounded-full w-fit">
                <img
                  alt=""
                  width="32"
                  height="32"
                  src="https://themewagon.github.io/Pixelize/images/records/star.svg"
                />
              </div>
              <h4 className="text-center text-4xl heading-font font-bold">14</h4>
              <p className="text-center text-base font-normal">
                Total Years of Experience
              </p>
            </div>
          </div>
          <div>
            <div className="border border-gray-200 rounded-lg flex flex-col gap-4 items-center justify-center px-4 py-8 shadow">
              <div className="p-2 bg-blue-700 rounded-full w-fit">
                <img
                  alt="/images/records/user.svg"
                  width="32"
                  height="32"
                  src="https://themewagon.github.io/Pixelize/images/records/user.svg"
                />
              </div>
              <h4 className="text-center text-4xl heading-font font-bold">08</h4>
              <p className="text-center text-base font-normal">
                Years of experience in Frontend
              </p>
            </div>
          </div>
          <div>
            <div className="border border-gray-200 rounded-lg flex flex-col gap-4 items-center justify-center px-4 py-8 shadow">
              <div className="p-2 bg-blue-700 rounded-full w-fit">
                <img
                  alt=""
                  width="32"
                  height="32"
                  src="https://themewagon.github.io/Pixelize/images/records/cart.svg"
                />
              </div>
              <h4 className="text-center text-4xl heading-font font-bold">400+</h4>
              <p className="text-center text-base font-normal">
                Happy Clients
              </p>
            </div>
          </div>
          <div>
            <div className="border border-gray-200 rounded-lg flex flex-col gap-4 items-center justify-center px-4 py-8 shadow">
              <div className="p-2 bg-blue-700 rounded-full w-fit">
                <img
                  alt="/images/records/star.svg"
                  width="32"
                  height="32"
                  src="https://themewagon.github.io/Pixelize/images/records/star.svg"
                />
              </div>
              <h4 className="text-center text-4xl heading-font font-bold">1200+</h4>
              <p className="text-center text-base font-normal">
                Delivered websites and projects
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Counters;
