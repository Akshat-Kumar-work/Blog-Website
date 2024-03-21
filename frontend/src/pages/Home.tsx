const Home = () => {
  return (
    <div className=" flex  flex-col  p-10 mt-4 justify-center  text-2xl   items-center  ">
      <div className=" font-bold mb-5">Welcome to Blog Verse </div>

      <img className="min-w-[30%] rounded-lg" src="/homeImg.jpg"></img>

      <div className=" flex  mt-4 flex-col md:p-8 md:m-3 space-y-3 font-medium opacity-50  bg-slate-200 ">
        <div className=" ">
          Welcome to our blog platform! Powered by cutting-edge technologies
          including React, Cloudflare Workers, Hono, PostgreSQL, and Prisma, our
          website redefines the essence of serverless backend solutions. 
        </div>

      <div>While
          many platforms prioritize the user interface, we take a different
          approach, concentrating on the robustness and efficiency of our
          backend infrastructure.</div>
        <div>
          At the heart of our platform lies a serverless backend
          of Cloudflare Workers, we ensure unparalleled speed and scalability with Hono
        </div>

    
      </div>
    </div>
  );
};

export default Home;
