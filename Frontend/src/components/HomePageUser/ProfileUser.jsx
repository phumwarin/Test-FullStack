export default function ProfileUser() {
    return (
        <>
            <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
            <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
              Your Profile
            </h2>
              <center><div className="size-40 mt-8 grid justify-items-center">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div></center>
            <form className="mt-4 space-y-4 lg:mt-5 md:space-y-5" action="#">

              <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Name
                    </label>
                </div>
              {/* <Link
                to="/"
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Reset passwod
              </Link> */}
            </form>
          </div>
        </div>
      </section>
        </>
    )
}