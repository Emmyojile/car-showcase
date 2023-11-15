// import Image from "next/image";
// import React from "react";

// const ProfilePage = () => {
//   return (
//     <div className="flex justify-center items-center w-full relative">
//       <div className="page__container">
//         {/* TOP */}
//         <div className="profile flex gap-4 ">
//           {/* LEFT-SIDE */}
//           <div className="left flex-2 bg-amber-700 sm:w-1/3 flex flex-col items-center">
//             <h1>My Profile Details</h1>
//             <Image
//               src="/page2-Ellipse 1 (2).png"
//               alt="profile img"
//               width={100}
//               height={100}
//             />
//             <h2>GodsFavour Joel</h2>
//             <hr className=" border-blue-900" />
//             <div className=" p-4">
//               <h2>Extra Details</h2>
//               <div className="flex justify-between">
//                 <span className="flex items-center">
//                   <Image
//                     src="/tribal-shield.png"
//                     alt=""
//                     width={20}
//                     height={20}
//                     className="edit_img"
//                   />
//                   <p>
//                     <span className="font-bold text-sm">Ethinicity: <br /></span>Igbo
//                   </p>
//                 </span>
//                 <button className="edit_button">
//                   <Image src="/edit.png" alt="" width={12} height={12} />
//                   Edit
//                 </button>
//               </div>
//               <div className="flex justify-between">
//                 <span className="flex items-center">
//                   <Image src="/nationality.png" alt="" width={20} height={20} className="edit_img" />
//                   <p>
//                     <span>Nationality: <br /></span>Nigerian
//                   </p>
//                 </span>
//                 <button className="edit_button">
//                   <Image src="/edit.png" alt="" width={12} height={12} />
//                   Edit
//                 </button>
//               </div>
//               <div className="flex justify-between">
//                 <span className="flex items-center">
//                   <Image src="/religion.png" alt="" width={20} height={20} className="edit_img" />
//                   <p>
//                     <span>Religion: <br /></span>Christianity
//                   </p>
//                 </span>
//                 <button className="edit_button">
//                   <Image src="/edit.png" alt="" width={12} height={12} />
//                   Edit
//                 </button>
//               </div>
//               <div className="flex justify-between">
//                 <span className="flex items-center">
//                   <Image src="/links.png" alt="" width={20} height={20} />
//                   <p>
//                     <span>Relationship status: <br /></span>Single
//                   </p>
//                 </span>
//                 <button className="edit_button">
//                   <Image src="/edit.png" alt="" width={12} height={12} />
//                   Edit
//                 </button>
//               </div>
//               <div className="flex justify-between">
//                 <span className="flex items-center">
//                   <Image src="/age.png" alt="" width={20} height={20} className="edit_img" />
//                   <p>
//                     <span>Age: <br /></span>28yrs
//                   </p>
//                 </span>
//                 <button className="edit_button">
//                   <Image src="/edit.png" alt="" width={12} height={12} />
//                   Edit
//                 </button>
//               </div>
//               <div className="flex justify-between">
//                 <span className="flex items-center">
//                   <Image src="/gender.png" alt="" width={20} height={20} className="edit_img" />
//                   <p>
//                     <span>Gender: <br /></span>Male
//                   </p>
//                 </span>
//                 <button className="edit_button">
//                   <Image src="/edit.png" alt="" width={12} height={12} />
//                   Edit
//                 </button>
//               </div>
//               <div className="flex justify-between">
//                 <span className="flex items-center">
//                   <Image src="/occupation.png" alt="" width={20} height={20} className="edit_img" />
//                   <p>
//                     <span>Occupation: <br /></span>Computer Engineering
//                   </p>
//                 </span>
//                 <button className="edit_button">
//                   <Image src="/edit.png" alt="" width={12} height={12} />
//                   Edit
//                 </button>
//               </div>
//               <div className="flex justify-between">
//                 <span className="flex items-center">
//                   <Image src="/school-work.png" alt="" width={20} height={20} className="edit_img" />
//                   <p>
//                     <span>School/ Work place: <br /></span>Computer Engineering
//                   </p>
//                 </span>
//                 <button className="edit_button">
//                   <Image src="/edit.png" alt="" width={12} height={12} />
//                   Edit
//                 </button>
//               </div>
//               <div className="flex justify-between">
//                 <span className="flex items-center">
//                   <Image src="/pet.png" alt="" width={20} height={20} className="edit_img" />
//                   <p>
//                     <span>Pet: <br /></span>None
//                   </p>
//                 </span>
//                 <button className="edit_button">
//                   <Image src="/edit.png" alt="" width={12} height={12} />
//                   Edit
//                 </button>
//               </div>
//               <div className="flex justify-between">
//                 <span className="flex items-center">
//                   <Image src="/links.png" alt="" width={20} height={20} className="edit_img" />
//                   <p>
//                     <span>Social media handle: <br /></span>Igbo
//                   </p>
//                 </span>
//                 <button className="edit_button">
//                   <Image src="/edit.png" alt="" width={12} height={12} />
//                   Edit
//                 </button>
//               </div>
//             </div>
//           </div>
//           {/* RIGHT-SIDE */}
//           <div className="right bg-late-500 flex-1 w-2/3">
//             <div className="agent-container md:w-full lg:w-full flex flex-col mb-10 ">
//               {/* PROFILE CARD */}
//               <div className="box p-12 bg-light-green border-deep-green border-2 ">
//                 <div className="bio">
//                   <h1 className="font-bold">My Biograph</h1>
//                   <h3 className="font-bold my-2">
//                     I am a Creative Realtor with proper negotiation skills
//                   </h3>
//                   <p className=" leading-7">
//                     The male property agent avatar is designed to be
//                     knowledgeable and professional. It is programmed with a
//                     foundational understanding of real estate principles, laws,
//                     and ethics. Its virtual training includes completing a
//                     simulated real estate pre-licensing course, passing a
//                     virtual licensing exam, and staying updated through virtual
//                     continuing education
//                   </p>
//                 </div>
//                 <div className="details bg-red-1 flex justify-between pt-8 pb-2 gap-2">
//                   <div className="flex flex-col sm:flex-row border-b border-blue-900 pb-3">
//                     <span className="font-bold mr-1">1k</span>likes
//                   </div>
//                   <div className="flex flex-col sm:flex-row border-b border-blue-900 pb-3">
//                     <span className="font-bold mr-1">32</span>reviews
//                   </div>
//                   <div className="flex flex-col sm:flex-row border-b border-blue-900 pb-3">
//                     <span className="font-bold mr-1">14</span>publishes
//                   </div>
//                   <div className="flex flex-col sm:flex-row border-b border-blue-900 pb-3">
//                     <span className="font-bold mr-1">3.5</span>rating
//                     <hr className=" border-blue-900" />
//                   </div>
//                   <div className="flex flex-col sm:flex-row border-b border-blue-900 pb-3">
//                     <span className="font-bold mr-1">12</span>sales
//                   </div>

//                   <div className="flex flex-col sm:flex-row border-b border-blue-900 pb-3">
//                     <span className="font-bold mr-1">2</span>years
//                   </div>

//                   <div className="flex flex-col sm:flex-row border-b border-blue-900 pb-3">
//                     <span className="font-bold mr-1">5</span>negatives
//                   </div>
//                 </div>
//                 {/* ABOUT */}
//                 <div className="about flex justify-between pt-4 gap-2">
//                   <div className="flex flex-col gap-1 flex-1">
//                     <span className="flex items-center gap-2">
//                       <Image
//                         src="/cil_education.png"
//                         alt=""
//                         width={20}
//                         height={20}
//                         className="object-contain  self-start mt-0"
//                       />
//                       <p className="font-bold">Educational Background:</p>
//                     </span>
//                     <p className="leading-loose">
//                       The male property agent avatar is designed to be
//                       knowledgeable and professional. It is programmed with a
//                       foundational understanding of real estate principles,
//                       laws, and ethics. Its virtual training includes completing
//                       a simulated real estate pre-licensing course, passing a
//                       virtual licensing exam, and staying updated through
//                       virtual continuing education.
//                     </p>
//                   </div>
//                   <div className="flex flex-col gap-1 flex-1">
//                     <span className="flex items-center gap-2">
//                       <Image
//                         src="/pajamas_work.png"
//                         alt=""
//                         width={20}
//                         height={20}
//                         className="object-contain  self-start mt-0"
//                       />
//                       <p className="font-bold">Professional Achievements:</p>
//                     </span>
//                     <p className="leading-loose">
//                       In its virtual world, the male property agent avatar may
//                       acquire virtual certifications to specialize in various
//                       aspects of real estate, depending on the needs of the
//                       simulated clients or scenarios it encounters.
//                     </p>
//                   </div>
//                   <div className="flex flex-col gap-1 flex-1">
//                     <span className="flex items-center gap-2">
//                       <Image
//                         src="/fluent_thumb-like-dislike-16-regular.png"
//                         alt=""
//                         width={20}
//                         height={20}
//                         className="object-contain  self-start mt-0"
//                       />
//                       <p className="font-bold">Likes $ Dislikes:</p>
//                     </span>
//                     <p className="leading-loose">
//                       This avatar is equipped with strong virtual communication
//                       skills, including verbal and written capabilities. It
//                       possesses a virtual database of local real estate market
//                       information, marketing techniques, negotiation strategies,
//                       and problem-solving algorithms. It operates with the
//                       highest ethical standards in virtual transactions.
//                     </p>
//                   </div>
//                 </div>
//                 <hr className="mt-4 mb-4 border-blue-900" />
//                 <div className="experiences flex flex-col p-6">
//                   <h1 className="font-bold mb-6">My Experiences</h1>
//                   <div className="flex gap-3 flex-col sm:flex-row">
//                     <div className="flex-1 flex flex-col gap-3">
//                       <Image
//                         src="/roomate-img1.png"
//                         alt=""
//                         width={300}
//                         height={300}
//                       />
//                       <h2 className="font-bold">
//                         Was a speaker at the international buisness sumit
//                       </h2>
//                       <p className="flex gap-2">
//                         {" "}
//                         <Image
//                           src="/carbon_location (1).png"
//                           alt=""
//                           width={20}
//                           height={20}
//                         />
//                         Ore,Ibadan
//                       </p>
//                     </div>
//                     <div className="flex-1 flex flex-col gap-3">
//                       <Image
//                         src="/roomate-img2.png"
//                         alt=""
//                         width={300}
//                         height={300}
//                       />
//                       <h2 className="font-bold">
//                         Was a speaker at the international buisness sumit
//                       </h2>
//                       <p className="flex gap-2">
//                         {" "}
//                         <Image
//                           src="/carbon_location (1).png"
//                           alt=""
//                           width={20}
//                           height={20}
//                         />
//                         Ore,Ibadan
//                       </p>
//                     </div>
//                     <div className="flex-1 flex flex-col gap-3">
//                       <Image
//                         src="/roomate-img1.png"
//                         alt=""
//                         width={300}
//                         height={300}
//                       />
//                       <h2 className="font-bold">
//                         Was a speaker at the international buisness sumit
//                       </h2>
//                       <p className="flex gap-2">
//                         {" "}
//                         <Image
//                           src="/carbon_location (1).png"
//                           alt=""
//                           width={20}
//                           height={20}
//                         />
//                         Ore,Ibadan
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <hr className=" border-blue-900 my-6" />
//         {/* BOTTOM */}
//         {/* REVIEWS */}
//         <div className="flex flex-col">
//           <h1 className=" font-bold mt-4">Reviews</h1>
//           <div className=" grid sm:grid-cols-2 sm:grid-rows-2 gap-2 mt-6">
//             <div className=" pt-2">
//               <div className="flex gap-3 mb-2">
//                 <Image src="/Ellipse 4.png" alt="" width={50} height={50} />
//                 <span>
//                   <h2 className="font-bold">Mercy Extractor</h2>
//                   <span>May 2023</span>
//                 </span>
//               </div>
//               <p>
//                 Property agents must obtain a real estate license from their
//                 states regulatory agency. Additionally, some agents pursue
//                 advanced certifications to demonstrate expertise in specific
//                 areas, such as commercial real estate, property management, or
//                 luxury properties.
//               </p>
//               <span className="flex gap-1 mt-2">
//                 <Image
//                   src="/material-symbols_star.png"
//                   alt=""
//                   width={20}
//                   height={20}
//                   className="object-contain"
//                 />
//                 3.5 rating
//               </span>
//             </div>
//             <div className=" pt-2">
//               <div className="flex gap-3 mb-2">
//                 <Image src="/Ellipse 4.png" alt="" width={50} height={50} />
//                 <span>
//                   <h2 className="font-bold">Mercy Extractor</h2>
//                   <span>May 2023</span>
//                 </span>
//               </div>
//               <p>
//                 Property agents must obtain a real estate license from their
//                 states regulatory agency. Additionally, some agents pursue
//                 advanced certifications to demonstrate expertise in specific
//                 areas, such as commercial real estate, property management, or
//                 luxury properties.
//               </p>
//               <span className="flex gap-1 mt-2">
//                 <Image
//                   src="/material-symbols_star.png"
//                   alt=""
//                   width={20}
//                   height={20}
//                   className="object-contain"
//                 />
//                 3.0 rating
//               </span>
//             </div>
//             <div className=" pt-2">
//               <div className="flex gap-3 mb-2">
//                 <Image src="/Ellipse 4.png" alt="" width={50} height={50} />
//                 <span>
//                   <h2 className="font-bold">Mercy Extractor</h2>
//                   <span>May 2023</span>
//                 </span>
//               </div>
//               <p>
//                 Property agents must obtain a real estate license from their
//                 states regulatory agency. Additionally, some agents pursue
//                 advanced certifications to demonstrate expertise in specific
//                 areas, such as commercial real estate, property management, or
//                 luxury properties.
//               </p>
//               <span className="flex gap-1 mt-2">
//                 <Image
//                   src="/material-symbols_star.png"
//                   alt=""
//                   width={20}
//                   height={20}
//                   className="object-contain"
//                 />
//                 4.0 rating
//               </span>
//             </div>
//             <div className=" pt-2">
//               <div className="flex gap-3 mb-2">
//                 <Image src="/Ellipse 4.png" alt="" width={50} height={50} />
//                 <span>
//                   <h2 className="font-bold">Mercy Extractor</h2>
//                   <span>May 2023</span>
//                 </span>
//               </div>
//               <p>
//                 Property agents must obtain a real estate license from their
//                 states regulatory agency. Additionally, some agents pursue
//                 advanced certifications to demonstrate expertise in specific
//                 areas, such as commercial real estate, property management, or
//                 luxury properties.
//               </p>
//               <span className="flex gap-1 mt-2">
//                 <Image
//                   src="/material-symbols_star.png"
//                   alt=""
//                   width={20}
//                   height={20}
//                   className="object-contain"
//                 />
//                 3.0 rating
//               </span>
//             </div>
//           </div>
//           <button className="flex gap-2 items-center justify-center ring-2 ring-button-shadow rounded-2xl bg-deep-green p-1 mt-8 mb-12 w-60 text-white">
//             Show all reviews
//             <span>
//               <Image
//                 src="/ep_arrow-up-bold.png"
//                 alt=""
//                 width={20}
//                 height={20}
//                 className="mb-1.5 object-contain"
//               />
//             </span>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfilePage;
