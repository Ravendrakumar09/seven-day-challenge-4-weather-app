import React from "react";
import Navbar from "./components/navbar";
import Leftbar from "./components/leftbar";
import Rightbar from "./components/rightbar";
import Footer from "./components/footer";

export default function page() {
  return (
    <div
      className="flex flex-col bg-cover bg-no-repeat bg-center bg-blue-400"
      // style={{ backgroundImage: "url('/cloud.jpeg')" }}
    >
      <div>
        <Navbar />
      </div>
      <div className="flex justify-between sm:flex-col">
        <Leftbar/>
        <Rightbar /> 
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
