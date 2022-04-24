import { useState } from "react";
import { urlFor, PortableText, getClient } from "../utils/sanity";
import { Polygon, PolygonDown, SmallStar } from "./icons";
import Image from "next/image";

function ProductPage(props) {
  const { title, defaultProductVariant, mainImage, body, barcode } = props;
  const [count, setCount] = useState(1);
  const handleCount = (value) =>
    !(count === 0 && value === -1) ? setCount(count + value) : count;
  return (
    <div className="container mx-auto px-6">
      <div className="md:flex md:items-center">
        <div className="w-full h-64 md:w-1/2 lg:h-96">
          <img
            className="h-full w-full rounded-md object-cover max-w-lg mx-auto"
            src={urlFor(mainImage)
              .auto("format")
              .width(1051)
              .fit("crop")
              .quality(80)}
            alt={mainImage?.alt || `Photo of ${title}`}
          />
        </div>
        <div className="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2">
          <h3 className="text-gray-700 uppercase text-lg">{title}</h3>
          <span className="text-gray-500 mt-3">
            ${defaultProductVariant?.price}
          </span>
          <hr className="my-3" />
          {barcode && (
            <>
              <span className="text-gray-500 mt-3">Barcode: {barcode}</span>
              <hr className="my-3" />
            </>
          )}
          <div className="mt-2">
            <label className="text-gray-700 text-sm" htmlFor="count">
              Count:
            </label>
            <div className="flex items-center mt-1">
              <button
                onClick={() => handleCount(1)}
                className="text-gray-500 focus:outline-none focus:text-gray-600"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </button>
              <span className="text-gray-700 text-lg mx-2">{count}</span>
              <button
                onClick={() => handleCount(-1)}
                className="text-gray-500 focus:outline-none focus:text-gray-600"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex items-center mt-6">
            <button className="px-8 py-2 bg-indigo-600 text-white text-sm font-medium rounded hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500">
              Order Now
            </button>
            <button className="mx-2 text-gray-600 border rounded-md p-2 hover:bg-gray-200 focus:outline-none">
              <svg
                className="h-5 w-5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="mt-16 md:w-2/3">
        <h3 className="text-gray-600 text-2xl font-medium">
          Хэрэглэгчийн сэтгэгдлүүд
        </h3>
        <div className="flex flex-row items-center rounded my-4">
          <div>
            <img
              src="https://user-images.trustpilot.com/6262794dad301800124141d5/64x64.png"
              width={80}
              height={80}
            />
          </div>
          <div className="mx-8 w-2/3 flex flex-row justify-between">
            <div>
              <h1>Сайн байна уу? </h1>
              <h1>Зочин</h1>
            </div>
            <div className="flex flex-row">
              {[1, 2, 3, 4, 5].map((item) => (
                <div>
                  <SmallStar width={24} height={24} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <textarea
            rows="4"
            class=" w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-300 focus:border-blue-300 dark:bg-gray-500 dark:border-gray-400 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-400 dark:focus:border-blue-400 p-4"
            placeholder="Leave a review..."
          ></textarea>

          <button className="px-8 py-2 bg-indigo-600 text-white text-sm font-medium rounded hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500">
            Илгээх
          </button>
        </div>
        <div className="mt-4">
          <div className="flex flex-row items-center bg-gray-100 rounded p-4">
            <div className="mt-4">
              <Polygon />
              <h1 className="my-2">12</h1>
              <PolygonDown />
            </div>
            <div className="ml-6 mt-4 flex flex-row items-center ">
              <div>
                <img
                  src="https://user-images.trustpilot.com/6262794dad301800124141d5/64x64.png"
                  width={80}
                  height={80}
                  className="rounded-full"
                />
              </div>
              <div className="ml-4">
                <div className="flex flex-row w-48 justify-between">
                  <h3>Марал</h3>
                  <div className="flex flex-row">
                    <SmallStar width={24} height={24} />
                    <h3>4/5</h3>
                  </div>
                  <h3 style={{ color: "#10b981" }}>ЭЕРЭГ</h3>
                </div>
                <div>
                  <h3>
                    <span>04/22/2022</span> * Маш түргэн шуурхай хямд, амар
                    шийдлээр өөрийн онлайн шопыг бий болгон өндөр бүтээмжтэй
                    ажилж байгаад ...
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center bg-gray-100 rounded p-4 mt-4">
            <div className="mt-4">
              <Polygon />
              <h1 className="my-2">12</h1>
              <PolygonDown />
            </div>
            <div className="ml-6 mt-4 flex flex-row items-center ">
              <div>
                <img
                  src="https://user-images.trustpilot.com/6262794dad301800124141d5/64x64.png"
                  width={80}
                  height={80}
                  className="rounded-full"
                />
              </div>
              <div className="ml-4">
                <div className="flex flex-row w-40 justify-between">
                  <h3>Марал</h3>
                  <div className="flex flex-row">
                    <SmallStar width={24} height={24} />
                    <h3>4/5</h3>
                  </div>
                  <h3 style={{ color: "#10b981" }}>ЭЕРЭГ</h3>
                </div>
                <div>
                  <h3>
                    <span>04/22/2022</span> * Маш түргэн шуурхай хямд, амар
                    шийдлээр өөрийн онлайн шопыг бий болгон өндөр бүтээмжтэй
                    ажилж байгаад ...
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* {reviews && <PortableText blocks="TExt" className="text-gray-600" />} */}
      </div>
    </div>
  );
}

export default ProductPage;
