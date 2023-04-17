import React from "react";
import SectionHeading from "../SectionHeading";

const data = [
  {
    id: 1,
    title: "Boost your conversion rate",
    type: "Article",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.",
    author: "Jhon Doe",
    date: "Mar 16, 2020",
    time: "6 min read",
    image:
      "https://images.pexels.com/photos/389818/pexels-photo-389818.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 1,
    title: "Boost your conversion rate",
    type: "Article",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.",
    author: "Jhon Doe",
    date: "Mar 16, 2020",
    time: "6 min read",
    image:
      "https://images.pexels.com/photos/16292477/pexels-photo-16292477.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    id: 1,
    title: "Boost your conversion rate",
    type: "Article",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.",
    author: "Jhon Doe",
    date: "Mar 16, 2020",
    time: "6 min read",
    image:
      "https://images.pexels.com/photos/7745560/pexels-photo-7745560.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

const Blogs = () => {
  return (
    <div className="w-full my-20 ">
      <SectionHeading
        title={"Latest Blogs"}
        description={
          "There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
        }
        color={"black"}
      />

      <div className="w-full mx-auto max-w-[85%] grid grid-cols-3 gap-6">
        {data?.map((item, index) => (
          <div className="w-full bg-white shadow-lg rounded-lg">
            <div className="w-full h-44 rounded-t-lg">
              <img src={item.image} className="rounded-t-lg w-full h-44 object-cover" />
            </div>
            <div className="p-3">
              <div className="w-full my-2 text-blue-500 text-xs font-semibold">
                {item.type}
              </div>
              <div className="w-full mb-2 text-gray-800 font-bold">
                {item.title}
              </div>
              <div className="w-full mb-2 text-gray-500 text-xs ">
                {item.description}
              </div>

              <div className="w-full flex mt-10 justify-start items-center space-x-3">
                <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                <div>
                  <div className="text-gray-700 text-xs font-semibold">
                    {item.author}
                  </div>
                  <div className="text-gray-600 text-xs">
                    <span>{item.date}</span> - <span>{item.time}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
