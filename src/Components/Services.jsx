import React from "react";
import { FaShippingFast, FaHeadset, FaUndo } from "react-icons/fa";

const services = [
  {
    id: 1,
    icon: <FaShippingFast className="text-3xl mb-2" />,
    title: "FREE AND FAST DELIVERY",
    desc: "Free delivery for all orders over $140",
  },
  {
    id: 2,
    icon: <FaHeadset className="text-3xl mb-2" />,
    title: "24/7 CUSTOMER SERVICE",
    desc: "Friendly 24/7 customer support",
  },
  {
    id: 3,
    icon: <FaUndo className="text-3xl mb-2" />,
    title: "MONEY BACK GUARANTEE",
    desc: "We return money within 30 days",
  },
];

const Services = () => {
  return (
    <section className="py-12 px-4 md:px-20 bg-white text-black">
      <div className="grid md:grid-cols-3 gap-6 text-center">
        {services.map((service) => (
          <div key={service.id} className="flex flex-col items-center">
            {service.icon}
            <h3 className="font-semibold text-sm mt-2">{service.title}</h3>
            <p className="text-sm text-gray-600">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
