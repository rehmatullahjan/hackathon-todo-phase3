"use strict";
exports.id = 345;
exports.ids = [345];
exports.modules = {

/***/ 6873:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ ChatWidget)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9941);
/* harmony import */ var _heroicons_react_24_solid_esm_ChatBubbleLeftRightIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1434);
/* harmony import */ var _heroicons_react_24_solid_esm_XMarkIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1745);
/* harmony import */ var _heroicons_react_24_solid_esm_PaperAirplaneIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8457);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_api__WEBPACK_IMPORTED_MODULE_2__, _heroicons_react_24_solid_esm_ChatBubbleLeftRightIcon__WEBPACK_IMPORTED_MODULE_3__, _heroicons_react_24_solid_esm_XMarkIcon__WEBPACK_IMPORTED_MODULE_4__, _heroicons_react_24_solid_esm_PaperAirplaneIcon__WEBPACK_IMPORTED_MODULE_5__]);
([_utils_api__WEBPACK_IMPORTED_MODULE_2__, _heroicons_react_24_solid_esm_ChatBubbleLeftRightIcon__WEBPACK_IMPORTED_MODULE_3__, _heroicons_react_24_solid_esm_XMarkIcon__WEBPACK_IMPORTED_MODULE_4__, _heroicons_react_24_solid_esm_PaperAirplaneIcon__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






function ChatWidget() {
    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([
        {
            role: "assistant",
            content: 'Hi! I can help you manage your tasks. Try "Add a meeting at 2pm" or "What do I have to do?"'
        }
    ]);
    const [input, setInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const messagesEndRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const scrollToBottom = ()=>{
        messagesEndRef.current?.scrollIntoView({
            behavior: "smooth"
        });
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        scrollToBottom();
    }, [
        messages
    ]);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (!input.trim()) return;
        const userMsg = {
            role: "user",
            content: input
        };
        setMessages((prev)=>[
                ...prev,
                userMsg
            ]);
        setInput("");
        setIsLoading(true);
        try {
            const response = await (0,_utils_api__WEBPACK_IMPORTED_MODULE_2__/* .chatWithTodo */ .Z)(input);
            setMessages((prev)=>[
                    ...prev,
                    {
                        role: "assistant",
                        content: response.response
                    }
                ]);
        } catch (error) {
            setMessages((prev)=>[
                    ...prev,
                    {
                        role: "assistant",
                        content: "Sorry, I encountered an error. Please check if the backend is running and API key is set."
                    }
                ]);
        } finally{
            setIsLoading(false);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "fixed bottom-6 right-6 z-50",
        children: [
            !isOpen && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                onClick: ()=>setIsOpen(true),
                className: "bg-indigo-600 hover:bg-indigo-700 text-white p-4 rounded-full shadow-lg transition-all transform hover:scale-110",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_solid_esm_ChatBubbleLeftRightIcon__WEBPACK_IMPORTED_MODULE_3__["default"], {
                    className: "h-6 w-6"
                })
            }),
            isOpen && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "bg-white dark:bg-gray-800 rounded-lg shadow-2xl w-80 sm:w-96 flex flex-col border border-gray-200 dark:border-gray-700 overflow-hidden",
                style: {
                    height: "500px"
                },
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "bg-indigo-600 text-white p-4 flex justify-between items-center",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                                className: "font-semibold flex items-center",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_solid_esm_ChatBubbleLeftRightIcon__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                        className: "h-5 w-5 mr-2"
                                    }),
                                    "Todo Assistant"
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                onClick: ()=>setIsOpen(false),
                                className: "hover:text-gray-200",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_solid_esm_XMarkIcon__WEBPACK_IMPORTED_MODULE_4__["default"], {
                                    className: "h-5 w-5"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-gray-900",
                        children: [
                            messages.map((msg, idx)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: `flex ${msg.role === "user" ? "justify-end" : "justify-start"}`,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: `max-w-[80%] rounded-lg p-3 ${msg.role === "user" ? "bg-indigo-600 text-white rounded-br-none" : "bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 border border-gray-200 dark:border-gray-600 rounded-bl-none"}`,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "text-sm whitespace-pre-wrap",
                                            children: msg.content
                                        })
                                    })
                                }, idx)),
                            isLoading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex justify-start",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "bg-gray-200 dark:bg-gray-700 rounded-lg p-3 rounded-bl-none",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex space-x-2",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"
                                            })
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                ref: messagesEndRef
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
                        onSubmit: handleSubmit,
                        className: "p-4 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex items-center space-x-2",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    type: "text",
                                    value: input,
                                    onChange: (e)=>setInput(e.target.value),
                                    placeholder: "Type a message...",
                                    className: "flex-1 p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 text-sm"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    type: "submit",
                                    disabled: isLoading || !input.trim(),
                                    className: "bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white p-2 rounded-md transition-colors",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_solid_esm_PaperAirplaneIcon__WEBPACK_IMPORTED_MODULE_5__["default"], {
                                        className: "h-5 w-5"
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7345:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ChatWidget__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6873);
/* harmony import */ var _NotificationManager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4820);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ChatWidget__WEBPACK_IMPORTED_MODULE_4__, _NotificationManager__WEBPACK_IMPORTED_MODULE_5__]);
([_ChatWidget__WEBPACK_IMPORTED_MODULE_4__, _NotificationManager__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const Layout = ({ children, title = "Hackathon Todo" })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "min-h-screen bg-gray-50 font-sans text-gray-900",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    children: title
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
                className: "bg-white shadow-sm border-b border-gray-200 sticky top-0 z-10",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex justify-between h-16",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                href: "/",
                                className: "flex-shrink-0 flex items-center cursor-pointer group",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold mr-2 group-hover:bg-blue-700 transition",
                                        children: "HT"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600",
                                        children: "Hackathon Todo"
                                    })
                                ]
                            })
                        })
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
                className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8",
                children: children
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ChatWidget__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_NotificationManager__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4820:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9941);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_api__WEBPACK_IMPORTED_MODULE_1__]);
_utils_api__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const NotificationManager = ()=>{
    const [tasks, setTasks] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    const notifiedRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(new Set());
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const fetchTasks = async ()=>{
            try {
                const response = await _utils_api__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .C.get("/tasks", {
                    params: {
                        status: "pending"
                    }
                });
                setTasks(response.data);
            } catch (error) {
                console.error("NotificationManager failing to fetch:", error);
            }
        };
        fetchTasks();
        const interval = setInterval(fetchTasks, 60000); // Pulse every minute
        return ()=>clearInterval(interval);
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        // Request permission on mount
        if ("Notification" in window && Notification.permission === "default") {
            Notification.requestPermission();
        }
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (!tasks || !("Notification" in window) || Notification.permission !== "granted") return;
        const interval = setInterval(()=>{
            const now = new Date();
            tasks.forEach((task)=>{
                if (task.reminder_at && task.status !== "completed") {
                    const reminderTime = new Date(task.reminder_at);
                    // If reminder time has passed (within the last 10 minutes) 
                    // and we haven't notified for this task yet in this session
                    if (reminderTime <= now && reminderTime > new Date(now.getTime() - 10 * 60 * 1000) && !notifiedRef.current.has(task.id)) {
                        new Notification(`Reminder: ${task.title}`, {
                            body: task.description || "You have a task due!",
                            icon: "/favicon.ico" // Default nextjs favicon
                        });
                        notifiedRef.current.add(task.id);
                    }
                }
            });
        }, 10000); // Check every 10 seconds
        return ()=>clearInterval(interval);
    }, [
        tasks
    ]);
    return null; // This is a logic-only component
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotificationManager);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;