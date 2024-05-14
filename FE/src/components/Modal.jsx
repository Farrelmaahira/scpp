import Button from "./Button";

const Footer = (props) => {
  const { children } = props;
  return <>{children}</>;
};

const Modal = (props) => {
  const { active, unactivate, title, children } = props;
  return (
    <>
      <div
        className={`fixed inset-0 flex justify-center items-center transition-colors ${
          active ? "visible bg-black/30" : "invisible"
        }`}
      >
        <div className="bg-white w-1/2 min-h-96  rounded-lg shadow-lg flex flex-col">
          {/* MODAL HEADER */}
          <div className="p-3 border-b flex flex-row justify-between">
            <h1 className="text-2xl font-semibold">{title}</h1>
            <Button
              onClick={unactivate}
              type="button"
              className="box-content p-2 rounded border-none text-neutral-500 hover:text-neutral-800 hover:no-underline hover:shadow-lg focus:text-neutral-800 focus:opacity-100 focus:shadow-none focus:outline-none dark:text-neutral-400 dark:hover:text-neutral-300 dark:focus:text-neutral-300"
            >
              <span className="[&>svg]:h-6 [&>svg]:w-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </span>
            </Button>
          </div>
          {/* MODAL BODY */}
          <div className="p-3">{children}</div>
          {/* MODAL FOOTER */}
          <div className="mt-5">
            <Footer></Footer>
          </div>
        </div>
      </div>
    </>
  );
};

export default {
  Modal,
  Footer,
};
