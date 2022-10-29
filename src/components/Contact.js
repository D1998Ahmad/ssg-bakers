import React from "react";

const Contact = () => {
  return (
    <div className="grid grid-cols-1 gap-2 md:border-r">
      <div className=" flex justify-around">
        <div className="text-3xl font-bold">Contacts</div>
      </div>
      <div className="address flex justify-around">
        <div>Address</div>
        <div className="w-40">
          22, Baker Street,
          <br /> Conan Doyle Road <br /> London, UK-400043
        </div>
      </div>
      <div className="phone flex justify-around">
        <div>Phone</div>
        <div className="w-40">+91-8168121212</div>
      </div>
      <div className="email flex justify-around">
        <div>Email</div>
        <div className="w-40">ssg.baker@gmail.com</div>
      </div>
    </div>
  );
};

export default Contact;
