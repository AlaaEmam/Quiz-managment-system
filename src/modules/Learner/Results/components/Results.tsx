// import React, { useState, useEffect } from 'react';
// import { axiosInstance, Quiz } from "../../../../Constants/URLS/URL";

// const Results = () => {
//     const [results, setResults] = useState([]); // حالة لتخزين بيانات Quiz.allResults
//     const [lastFiveResults, setLastFiveResults] = useState([]); // حالة لتخزين بيانات Quiz.lastFiveCompleted
//     const [loading, setLoading] = useState(true); // حالة لتحميل البيانات
//     const [error, setError] = useState(null); // حالة لمعالجة الأخطاء
//     const [showNewTable, setShowNewTable] = useState(false); // لتبديل العرض بين الجدولين

//     // جلب البيانات من الـ API عند تحميل المكون
//     useEffect(() => {
//         const fetchResults = async () => {
//             try {
//                 setLoading(true);
//                 // جلب بيانات Quiz.allResults
//                 const allResultsResponse = await axiosInstance.get(Quiz.allResults);
//                 setResults(allResultsResponse.data);
//                 console.log(allResultsResponse)
//                 // جلب بيانات Quiz.lastFiveCompleted
//                 const lastFiveResponse = await axiosInstance.get(Quiz.lastFiveCompleted);
//                 setLastFiveResults(lastFiveResponse.data.questions);
//                 console.log(lastFiveResponse.data)
//             } catch (err) {
//                 setError('Failed to load results');
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchResults();
//     }, []);

//     if (loading) return <div>Loading...</div>;
//     if (error) return <div>{error}</div>;

//     return (
//         <>
//         <h1>hhhh</h1>
//         </>
//         // <div className="p-6 bg-gray-50 min-h-screen">
//         //     {showNewTable ? (
//         //         <>
//         //             <h2 className="text-lg font-semibold mb-4">Quiz Details</h2>
//         //             <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md" style={{ width: '50%' }}>
//         //                 <thead className="bg-gray-800 text-white">
//         //                     <tr>
//         //                         <th className="py-3 px-4 text-left font-medium">Title</th>
//         //                         <th className="py-3 px-4 text-left font-medium">Group Name</th>
//         //                         <th className="py-3 px-4 text-left font-medium">No. of Questions</th>
//         //                         <th className="py-3 px-4 text-left font-medium">Instructor</th>
//         //                         <th className="py-3 px-4 text-left font-medium">Actions</th>
//         //                     </tr>
//         //                 </thead>
//         //                 <tbody>
//         //                     {lastFiveResults.map((result, index) => (
//         //                         <tr key={index} className={`border-t ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
//         //                             <td className="py-3 px-4">{result.title}</td>
//         //                             <td className="py-3 px-4">{result.group}</td>
//         //                             <td className="py-3 px-4">{result.questions_number}</td>
//         //                             <td className="py-3 px-4">{result.instructor}</td>
//         //                             <td className="py-3 px-4">
//         //                                 <button
//         //                                     className="w-[75px] h-[25px] bg-[#C5D86D] rounded-tl-[10px]"
//         //                                     onClick={() => setShowNewTable(false)}
//         //                                 >
//         //                                     Back
//         //                                 </button>
//         //                             </td>
//         //                         </tr>
//         //                     ))}
//         //                 </tbody>
//         //             </table>
//         //         </>
//         //     ) : (
//         //         <>
//         //             <h1 className="text-2xl font-bold text-gray-800 mb-6">Completed Quizzes</h1>
//         //             <div className="overflow-x-auto">
//         //                 <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md" style={{ borderRadius: '10px' }}>
//         //                     <thead className="bg-gray-800 text-white">
//         //                         <tr>
//         //                             <th className="py-3 px-4 text-left font-medium">Title</th>
//         //                             <th className="py-3 px-4 text-left font-medium">Group</th>
//         //                             <th className="py-3 px-4 text-left font-medium">Participants</th>
//         //                             <th className="py-3 px-4 text-left font-medium">Date</th>
//         //                             <th className="py-3 px-4 text-left font-medium">Actions</th>
//         //                         </tr>
//         //                     </thead>
//         //                     <tbody>
//         //                         {results.map((result, index) => (
//         //                             <tr key={index} className={`border-t ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
//         //                                 <td className="py-3 px-4">{result.title}</td>
//         //                                 <td className="py-3 px-4">{result.group}</td>
//         //                                 <td className="py-3 px-4">{result.participants?.length || 0}</td>
//         //                                 <td className="py-3 px-4">{new Date(result.createdAt).toLocaleDateString()}</td>
//         //                                 <td className="py-3 px-4">
//         //                                     <button
//         //                                         className="w-[75px] h-[25px] bg-[#C5D86D] rounded-tl-[10px]"
//         //                                         onClick={() => setShowNewTable(true)}
//         //                                     >
//         //                                         View
//         //                                     </button>
//         //                                 </td>
//         //                             </tr>
//         //                         ))}
//         //                     </tbody>
//         //                 </table>
//         //             </div>
//         //         </>
//         //     )}
//         // </div>
//     );
// };

// export default Results;
