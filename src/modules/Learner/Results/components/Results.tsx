import React, { useState } from 'react';

const Results = () => {
    const [showNewTable, setShowNewTable] = useState(false);

    const results = [
        { title: 'Assembly language', groupName: 'Group 1', persons: 23, participants: 20, date: '12/02/2023' },
        { title: 'Assembly language', groupName: 'Group 1', persons: 23, participants: 20, date: '12/02/2023' },
        { title: 'Assembly language', groupName: 'Group 1', persons: 23, participants: 20, date: '12/02/2023' },
        { title: 'Assembly language', groupName: 'Group 1', persons: 23, participants: 20, date: '12/02/2023' },
        { title: 'Assembly language', groupName: 'Group 1', persons: 23, participants: 20, date: '12/02/2023' },
    ];

    const newResults = [
        { name: 'Jacob Hamuel', score: 16, average: 20, time: '09:00' },
        { name: 'Jacob Hamuel', score: 16, average: 20, time: '09:00' },
        { name: 'Jacob Hamuel', score: 16, average: 20, time: '09:00' },
        { name: 'Jacob Hamuel', score: 16, average: 20, time: '09:00' },
    ];

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            {showNewTable ? (
                <>
                    <h2 className="text-lg font-semibold mb-4">Quizzes &gt;&gt; Data structures quiz one</h2>
                    <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md" style={{ width: '50%' }}>
                        <thead className="bg-gray-800 text-white">
                            <tr>
                                <th className="py-3 px-4 text-left font-medium">Student name</th>
                                <th className="py-3 px-4 text-left font-medium">Score</th>
                                <th className="py-3 px-4 text-left font-medium">Average</th>
                                <th className="py-3 px-4 text-left font-medium">Time submitted</th>
                            </tr>
                        </thead>
                        <tbody>
                            {newResults.map((result, index) => (
                                <tr
                                    key={index}
                                    className={`border-t ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
                                >
                                    <td className="py-3 px-4">{result.name}</td>
                                    <td className="py-3 px-4">{result.score}</td>
                                    <td className="py-3 px-4">{result.average}</td>
                                    <td className="py-3 px-4">{result.time}</td>
                                </tr>
                            ))}
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
                                    <th className="py-3 px-4 text-left font-medium">Date</th>
                                    <th className="py-3 px-4 text-left font-medium">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {results.map((result, index) => (
                                    <tr
                                        key={index}
                                        className={`border -t ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
                                    >
                                        <td className="py-3 px-4">{result.title}</td>
                                        <td className="py-3 px-4">{result.groupName}</td>
                                        <td className="py-3 px-4">{result.persons} persons</td>
                                        <td className="py-3 px-4">{result.participants} participants</td>
                                        <td className="py-3 px-4">{result.date}</td>
                                        <td className="py-3 px-4">
                                            <button
                                                className="w-[75px] h-[25px] bg-[#C5D86D] rounded-tl-[10px]"
                                                onClick={() => setShowNewTable(true)}
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