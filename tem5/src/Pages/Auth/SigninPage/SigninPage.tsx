import Signin from "../../../component/Auth/Signin/Signin";
import PageMeta from "../../../component/common/PageMeta/PageMeta";

const SigninPage = () => {
  return (
    <>
      <PageMeta
        title="Sign In | SassCandy"
        description="Select the ideal plan for your business. From startups to scaling enterprises, we have the perfect solution to support your growth."
      />
      <div className="pt-32 sm:pt-56 pb-10 px-4 bg-grey dark:bg-darkmode">
        <div className="container mx-auto max-w-lg overflow-hidden rounded-lg bg-white dark:bg-darklight text-center px-8 py-14 sm:px-12 md:px-16">
          <Signin />
        </div>
      </div>
    </>
  );
};

export default SigninPage;
