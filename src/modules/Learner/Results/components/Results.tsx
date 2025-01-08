import React, { useState, useEffect } from 'react';
import { axiosInstance, Quiz } from "../../../../Constants/URLS/URL";

const Results = () => {
    const [results, setResults] = useState([]); // حالة لتخزين البيانات من الـ API
    const [loading, setLoading] = useState(true); // حالة لتحميل البيانات
    const [error, setError] = useState(null); // حالة لمعالجة الأخطاء
    const [detailedResults, setDetailedResults] = useState(null); // لحفظ بيانات النتائج التفصيلية
    const [showNewTable, setShowNewTable] = useState(false); // لتبديل العرض بين الجدولين

    // جلب البيانات من الـ API عند تحميل المكون
    useEffect(() => {
        const fetchResults = async () => {
            try {
                setLoading(true);
                const response = await axiosInstance.get(Quiz.getAll); // استدعاء API
                setResults(response.data); // تخزين البيانات في الحالة
            } catch (err) {
                setError('Failed to load results');
            } finally {
                setLoading(false);
            }
        };

        fetchResults();
    }, []);

    // جلب البيانات التفصيلية عند الضغط على "View"
    const fetchDetailedResults = async () => {
        try {
            setLoading(true);
            const response = await axiosInstance.get(Quiz.allResults); // استدعاء API لنتائج التفصيلية
            setDetailedResults(response.data[0].quiz); // تخزين البيانات التفصيلية
            console.log(response.data[0].quiz); // طباعة البيانات في الكونسول
        } catch (err) {
            setError('Failed to load detailed results');
        } finally {
            setLoading(false);
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            {showNewTable ? (
                <>
                    <h2 className="text-lg font-semibold mb-4">Quiz Details</h2>
                    <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md" style={{ width: '50%' }}>
                        <thead className="bg-gray-800 text-white">
                            <tr>
                                <th className="py-3 px-4 text-left font-medium">Title</th>
                                <th className="py-3 px-4 text-left font-medium">Score per Question</th>
                                <th className="py-3 px-4 text-left font-medium">Number of Questions</th>
                                <th className="py-3 px-4 text-left font-medium">Last Updated</th>
                                <th className="py-3 px-4 text-left font-medium">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {detailedResults && (
                                <tr className="border-t bg-gray-50">
                                    <td className="py-3 px-4">{detailedResults.title}</td>
                                    <td className="py-3 px-4">{detailedResults.score_per_question}</td>
                                    <td className="py-3 px-4">{detailedResults.questions_number}</td>
                                    <td className="py-3 px-4">{new Date(detailedResults.updatedAt).toLocaleTimeString()}</td> {/* يعرض الوقت فقط */}
                                    <td className="py-3 px-4">
                                        <button
                                            className="w-[75px] h-[25px] bg-[#C5D86D] rounded-tl-[10px]"
                                            onClick={() => setShowNewTable(false)}
                                        >
                                            Back
                                        </button>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </>
            ) : (
                <>
                    <h1 className="text-2xl font-bold text-gray-800 mb-6">Completed Quizzes</h1>
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md" style={{ borderRadius: '10px' }}>
                            <thead className="bg-gray-800 text-white">
                                <tr>
                                    <th className="py-3 px-4 text-left font-medium">Title</th>
                                    <th className="py-3 px-4 text-left font-medium">Group Name</th>
                                    <th className="py-3 px-4 text-left font-medium">No. of persons in group</th>
                                    <th className="py-3 px-4 text-left font-medium">Participants</th>
                                    <th className="py-3 px-4 text-left font-medium">Date</th> {/* يعرض التاريخ فقط */}
                                    <th className="py-3 px-4 text-left font-medium">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {results.map((result, index) => (
                                    <tr key={index} className={`border-t ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                                        <td className="py-3 px-4">{result.title}</td>
                                        <td className="py-3 px-4">{result.group}</td>
                                        <td className="py-3 px-4">{result.questions_number} persons</td>
                                        <td className="py-3 px-4">{result.participants.length} participants</td>
                                        <td className="py-3 px-4">{new Date(result.createdAt).toLocaleDateString()}</td> {/* يعرض التاريخ فقط */}
                                        <td className="py-3 px-4">
                                            <button
                                                className="w-[75px] h-[25px] bg-[#C5D86D] rounded-tl-[10px]"
                                                onClick={() => {
                                                    setShowNewTable(true);
                                                    fetchDetailedResults(); // جلب التفاصيل
                                                }}
                                            >
                                                View
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </>
            )}
        </div>
    );
};

export default Results;
