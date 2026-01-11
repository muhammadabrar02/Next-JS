"use client";

import React, { useCallback, useState, useEffect } from "react";
import { Todo } from "@prisma/client";
import { useUser } from "@clerk/nextjs";
import { useDebounceValue } from 'usehooks-ts';
import {
  Search,
  Plus,
  Trash2,
  Check,
  X,
  Loader2,
  Star,
  ChevronLeft,
  ChevronRight,
  AlertCircle,
  User,
  Clock
} from 'lucide-react';

function Dashboard() {
    const { user } = useUser();
    const [todos, setTodos] = useState<Todo[]>([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [loading, setLoading] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [isSubscribed, setIsSubscribed] = useState(false);
    const [newTodoTitle, setNewTodoTitle] = useState("");
    const [addingTodo, setAddingTodo] = useState(false);

    const [debouncedSearchTerm] = useDebounceValue(searchTerm, 300);

    const fetchTodos = useCallback(async (page: number) => {
        setLoading(true)
        try {
            const response = await fetch(`/api/todos?page=${page}&search=${debouncedSearchTerm}`)
            
            if (!response.ok) {
                throw new Error('Failed to fetch todos');
            }

            const data = await response.json()
            setTodos(data.todos || [])
            setTotalPages(data.totalPages || 0);
            setCurrentPage(data.currentPage || 1);
        } catch (error) {
            console.error('Error fetching todos:', error);
        } finally {
            setLoading(false);
        }
    }, [debouncedSearchTerm])

    useEffect(() => {
        fetchTodos(currentPage);
        fetchSubscriptionStatus();
    }, [debouncedSearchTerm]);

    useEffect(() => {
        fetchTodos(1);
    }, [debouncedSearchTerm]);

    const fetchSubscriptionStatus = async () => {
        try {
            const response = await fetch('/api/subscription')
            if (response.ok) {
                const data = await response.json()
                setIsSubscribed(data.isSubscribed);
            }
        } catch (error) {
            console.error('Error fetching subscription status:', error);
        }
    }

    const handleAddTodo = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!newTodoTitle.trim()) return;
        
        setAddingTodo(true);
        try {
            const response = await fetch('/api/todos', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ title: newTodoTitle })
            })

            if (!response.ok) {
                throw new Error('Failed to add todo');
            }

            setNewTodoTitle("");
            await fetchTodos(currentPage);
        } catch (error) {
            console.error('Error adding todo:', error);
        } finally {
            setAddingTodo(false);
        }
    }

    const handleUpdateTodo = async (id: string, completed: boolean) => {
        try {
            const response = await fetch(`/api/todos/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ completed })
            })

            if (!response.ok) {
                throw new Error('Failed to update todo');
            }
            await fetchTodos(currentPage);
        } catch (error) {
            console.error('Error updating todo:', error);
        }
    }

    const handleDeleteTodo = async (id: string) => {
        if (!confirm('Are you sure you want to delete this todo?')) return;
        
        try {
            const response = await fetch(`/api/todos/${id}`, {
                method: "DELETE",
            });

            if (!response.ok) {
                throw new Error('Failed to delete todo');
            }
            await fetchTodos(currentPage);
        } catch (error) {
            console.error('Error deleting todo:', error);
        }
    }

    const handlePageChange = (page: number) => {
        if (page < 1 || page > totalPages) return;
        setCurrentPage(page);
        fetchTodos(page);
    }

    const completedTodos = todos.filter(todo => todo.completed).length;
    const totalTodos = todos.length;
    const completionRate = totalTodos > 0 ? Math.round((completedTodos / totalTodos) * 100) : 0;

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-6">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
                        <p className="text-gray-600 mt-2">
                            Welcome back, {user?.firstName || 'User'}! 👋
                        </p>
                    </div>
                    
                    <div className="flex items-center gap-4">
                        {user?.imageUrl && (
                            <img 
                                src={user.imageUrl} 
                                alt="Profile" 
                                className="w-10 h-10 rounded-full border-2 border-white shadow-sm"
                            />
                        )}
                        <div className={`px-4 py-2 rounded-full text-sm font-medium ${isSubscribed ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white' : 'bg-gray-200 text-gray-700'}`}>
                            {isSubscribed ? (
                                <span className="flex items-center gap-2">
                                    <Star className="w-4 h-4" />
                                    Pro Member
                                </span>
                            ) : 'Free Plan'}
                        </div>
                    </div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-500">Total Tasks</p>
                                <p className="text-3xl font-bold text-gray-900 mt-2">{totalTodos}</p>
                            </div>
                            <div className="p-3 bg-blue-50 rounded-xl">
                                <Clock className="w-6 h-6 text-blue-600" />
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-500">Completed</p>
                                <p className="text-3xl font-bold text-gray-900 mt-2">{completedTodos}</p>
                            </div>
                            <div className="p-3 bg-green-50 rounded-xl">
                                <Check className="w-6 h-6 text-green-600" />
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-500">Completion Rate</p>
                                <p className="text-3xl font-bold text-gray-900 mt-2">{completionRate}%</p>
                            </div>
                            <div className="p-3 bg-purple-50 rounded-xl">
                                <div className="w-6 h-6 rounded-full border-4 border-purple-600 border-t-transparent animate-spin" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                    {/* Header with Search and Add */}
                    <div className="p-6 border-b border-gray-200">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                            <div className="relative flex-1 max-w-md">
                                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <input
                                    type="text"
                                    placeholder="Search todos..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                />
                            </div>
                            
                            <form onSubmit={handleAddTodo} className="flex gap-2 w-full md:w-auto">
                                <input
                                    type="text"
                                    placeholder="Add a new todo..."
                                    value={newTodoTitle}
                                    onChange={(e) => setNewTodoTitle(e.target.value)}
                                    className="flex-1 md:w-64 px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                />
                                <button
                                    type="submit"
                                    disabled={addingTodo || !newTodoTitle.trim()}
                                    className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center gap-2"
                                >
                                    {addingTodo ? (
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                    ) : (
                                        <Plus className="w-5 h-5" />
                                    )}
                                    Add
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Todos List */}
                    <div className="p-6">
                        {loading ? (
                            <div className="flex flex-col items-center justify-center py-12">
                                <Loader2 className="w-12 h-12 text-blue-600 animate-spin mb-4" />
                                <p className="text-gray-600">Loading todos...</p>
                            </div>
                        ) : todos.length === 0 ? (
                            <div className="flex flex-col items-center justify-center py-12 text-center">
                                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                                    <AlertCircle className="w-8 h-8 text-gray-400" />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">No todos found</h3>
                                <p className="text-gray-600 max-w-sm">
                                    {searchTerm ? 'Try a different search term' : 'Get started by adding your first todo!'}
                                </p>
                            </div>
                        ) : (
                            <div className="space-y-3">
                                {todos.map((todo) => (
                                    <div
                                        key={todo.id}
                                        className="group flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 rounded-xl transition-all duration-200"
                                    >
                                        <div className="flex items-center gap-4">
                                            <button
                                                onClick={() => handleUpdateTodo(todo.id, !todo.completed)}
                                                className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${todo.completed ? 'bg-green-500 border-green-500' : 'border-gray-300 hover:border-green-500'}`}
                                            >
                                                {todo.completed && <Check className="w-4 h-4 text-white" />}
                                            </button>
                                            <div>
                                                <p className={`font-medium ${todo.completed ? 'line-through text-gray-500' : 'text-gray-900'}`}>
                                                    {todo.title}
                                                </p>
                                                {todo.createdAt && (
                                                    <p className="text-sm text-gray-500 mt-1">
                                                        {new Date(todo.createdAt).toLocaleDateString()}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                        
                                        <button
                                            onClick={() => handleDeleteTodo(todo.id)}
                                            className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg opacity-0 group-hover:opacity-100 transition-all"
                                        >
                                            <Trash2 className="w-5 h-5" />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Pagination */}
                    {totalPages > 1 && (
                        <div className="px-6 py-4 border-t border-gray-200">
                            <div className="flex items-center justify-between">
                                <button
                                    onClick={() => handlePageChange(currentPage - 1)}
                                    disabled={currentPage === 1}
                                    className="flex items-center gap-2 px-4 py-2 text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 rounded-lg transition-colors"
                                >
                                    <ChevronLeft className="w-5 h-5" />
                                    Previous
                                </button>
                                
                                <div className="flex items-center gap-2">
                                    {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                                        let pageNum;
                                        if (totalPages <= 5) {
                                            pageNum = i + 1;
                                        } else if (currentPage <= 3) {
                                            pageNum = i + 1;
                                        } else if (currentPage >= totalPages - 2) {
                                            pageNum = totalPages - 4 + i;
                                        } else {
                                            pageNum = currentPage - 2 + i;
                                        }
                                        
                                        return (
                                            <button
                                                key={pageNum}
                                                onClick={() => handlePageChange(pageNum)}
                                                className={`w-10 h-10 rounded-lg transition-all ${currentPage === pageNum ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'}`}
                                            >
                                                {pageNum}
                                            </button>
                                        );
                                    })}
                                </div>
                                
                                <button
                                    onClick={() => handlePageChange(currentPage + 1)}
                                    disabled={currentPage === totalPages}
                                    className="flex items-center gap-2 px-4 py-2 text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 rounded-lg transition-colors"
                                >
                                    Next
                                    <ChevronRight className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                {/* Footer */}
                <div className="mt-8 text-center text-gray-500 text-sm">
                    <p>Built with ❤️ using Next.js & Clerk</p>
                </div>
            </div>
        </div>
    )
}

export default Dashboard